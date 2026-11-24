-- ================================================================
-- BG Stats KR: Multi-User Platform Database Schema
-- Run this script in your Supabase project's SQL Editor
-- ================================================================

-- 1. Create profiles table (links to Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  username TEXT UNIQUE,
  nickname TEXT NOT NULL DEFAULT '보드게이머',
  avatar_url TEXT,
  bgg_username TEXT,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('admin', 'user')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Restrict direct table reads to the account owner so email addresses are not exposed publicly
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = id);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = id)
  WITH CHECK ((select auth.uid()) = id);

DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = id AND role = 'user');

-- Prevent non-service-role users from escalating their own role via UPDATE
CREATE OR REPLACE FUNCTION public.prevent_profile_role_escalation()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.role IS DISTINCT FROM OLD.role AND COALESCE(auth.role(), '') <> 'service_role' THEN
    RAISE EXCEPTION 'Insufficient privileges to change user role';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_prevent_profile_role_escalation ON public.profiles;
CREATE TRIGGER trg_prevent_profile_role_escalation
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.prevent_profile_role_escalation();

-- Public-safe profile view (excludes private email, enforces caller RLS)
CREATE OR REPLACE VIEW public.public_profiles
WITH (security_invoker = true) AS
SELECT
  id,
  username,
  nickname,
  avatar_url,
  bgg_username,
  role,
  created_at
FROM public.profiles;

GRANT SELECT ON public.public_profiles TO anon, authenticated;

-- 2. Trigger to automatically create a profile on user signup
-- Always assign 'user' role (never trust client-supplied raw_user_meta_data->>'role')
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, nickname, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'nickname', split_part(NEW.email, '@', 1)),
    'user'
  );
  RETURN NEW;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 3. Create user_games table
CREATE TABLE IF NOT EXISTS public.user_games (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  bgg_id INT,
  boardlife_id INT,
  title_kr TEXT NOT NULL,
  title_en TEXT NOT NULL,
  year_published INT,
  image TEXT,
  thumbnail TEXT,
  min_players INT DEFAULT 1,
  max_players INT DEFAULT 4,
  best_players TEXT,
  min_playtime INT DEFAULT 30,
  max_playtime INT DEFAULT 60,
  weight NUMERIC(3,2),
  bgg_rating NUMERIC(4,2),
  bgg_rank INT,
  categories TEXT[],
  mechanics TEXT[],
  designers TEXT[],
  publisher_kr TEXT,
  publisher_en TEXT,
  edition TEXT,
  status TEXT NOT NULL DEFAULT 'owned',
  user_rating NUMERIC(3,1),
  purchase_price INT,            -- ⭐ 개인 구매가 (본인에게만 공개)
  purchase_price_raw TEXT,
  resale_price INT,
  delivery_status TEXT,
  shipping_date TEXT,
  shipping_history TEXT,
  purchase_date TEXT,
  purchase_store TEXT,
  sleeves JSONB,
  organizer TEXT,
  notes TEXT,
  links JSONB,
  is_expansion BOOLEAN DEFAULT false,
  base_game_id TEXT,
  favorite BOOLEAN DEFAULT false,
  is_public BOOLEAN DEFAULT true, -- 다른 사용자가 열람 가능 여부
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Unique index required for upsert(onConflict: 'user_id, title_kr') in cloud-sync
CREATE UNIQUE INDEX IF NOT EXISTS user_games_user_id_title_kr_idx
  ON public.user_games (user_id, title_kr);

-- Enable RLS for user_games
ALTER TABLE public.user_games ENABLE ROW LEVEL SECURITY;

-- Owner has full control (direct reads of user_games are owner-only so purchase_price cannot be leaked)
DROP POLICY IF EXISTS "Users can manage their own games" ON public.user_games;
CREATE POLICY "Users can manage their own games"
  ON public.user_games FOR ALL
  TO authenticated
  USING ((select auth.uid()) = user_id)
  WITH CHECK ((select auth.uid()) = user_id);

-- Public reads MUST go through public.public_user_games view, which masks purchase_price
DROP POLICY IF EXISTS "Public games can be viewed by anyone" ON public.user_games;

-- 4. Privacy View: public_user_games
-- Masks purchase_price and purchase_price_raw for anyone who is NOT the owner
CREATE OR REPLACE VIEW public.public_user_games
WITH (security_invoker = true) AS
SELECT
  id,
  user_id,
  bgg_id,
  boardlife_id,
  title_kr,
  title_en,
  year_published,
  image,
  thumbnail,
  min_players,
  max_players,
  best_players,
  min_playtime,
  max_playtime,
  weight,
  bgg_rating,
  bgg_rank,
  categories,
  mechanics,
  designers,
  publisher_kr,
  publisher_en,
  edition,
  status,
  user_rating,
  -- ⭐ 본인(auth.uid())에게만 구매가를 반환하고, 타인에게는 NULL로 완벽 마스킹!
  CASE 
    WHEN auth.uid() = user_id THEN purchase_price 
    ELSE NULL 
  END AS purchase_price,
  CASE 
    WHEN auth.uid() = user_id THEN purchase_price_raw 
    ELSE NULL 
  END AS purchase_price_raw,
  resale_price,
  delivery_status,
  shipping_date,
  shipping_history,
  purchase_date,
  purchase_store,
  sleeves,
  organizer,
  notes,
  links,
  is_expansion,
  base_game_id,
  favorite,
  is_public,
  created_at,
  updated_at
FROM public.user_games
WHERE is_public = true OR auth.uid() = user_id;

GRANT SELECT ON public.public_user_games TO anon, authenticated;

-- 5. Create user_plays table
CREATE TABLE IF NOT EXISTS public.user_plays (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  bgg_play_id INT,
  game_id UUID REFERENCES public.user_games(id) ON DELETE CASCADE,
  game_title_kr TEXT,
  game_title_en TEXT,
  game_image TEXT,
  expansion_ids TEXT[],
  date DATE NOT NULL,
  start_time TEXT,
  duration_minutes INT DEFAULT 0,
  location_id TEXT,
  location_name TEXT,
  is_coop BOOLEAN DEFAULT false,
  coop_won BOOLEAN,
  is_solo BOOLEAN DEFAULT false,
  incomplete BOOLEAN DEFAULT false,
  rounds INT,
  player_scores JSONB DEFAULT '[]'::jsonb,
  notes TEXT,
  rating NUMERIC(2,1),
  synced_to_bgg BOOLEAN DEFAULT false,
  is_public BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for foreign keys & user lookups
CREATE INDEX IF NOT EXISTS idx_user_plays_user_id ON public.user_plays (user_id);
CREATE INDEX IF NOT EXISTS idx_user_plays_game_id ON public.user_plays (game_id);

-- Enable RLS for user_plays
ALTER TABLE public.user_plays ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage their own plays" ON public.user_plays;
DROP POLICY IF EXISTS "Public plays can be viewed by anyone" ON public.user_plays;
DROP POLICY IF EXISTS "Users can insert their own plays" ON public.user_plays;
DROP POLICY IF EXISTS "Users can update their own plays" ON public.user_plays;
DROP POLICY IF EXISTS "Users can delete their own plays" ON public.user_plays;

CREATE POLICY "Public plays can be viewed by anyone"
  ON public.user_plays FOR SELECT
  TO anon, authenticated
  USING (is_public = true OR (select auth.uid()) = user_id);

CREATE POLICY "Users can insert their own plays"
  ON public.user_plays FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can update their own plays"
  ON public.user_plays FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = user_id)
  WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can delete their own plays"
  ON public.user_plays FOR DELETE
  TO authenticated
  USING ((select auth.uid()) = user_id);

-- Explicit Data API grants (RLS still enforces row-level access)
GRANT SELECT ON public.profiles TO anon;
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT ON public.user_games TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_games TO authenticated;
GRANT SELECT ON public.user_plays TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_plays TO authenticated;
