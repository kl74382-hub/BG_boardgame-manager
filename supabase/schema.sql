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

CREATE POLICY "Public profiles are viewable by everyone" 
  ON public.profiles FOR SELECT 
  USING (true);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- 2. Trigger to automatically create a profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, nickname, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'nickname', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'role', 'user')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

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

-- Enable RLS for user_games
ALTER TABLE public.user_games ENABLE ROW LEVEL SECURITY;

-- Owner has full control
CREATE POLICY "Users can manage their own games"
  ON public.user_games FOR ALL
  USING (auth.uid() = user_id);

-- Anyone can view public games (Note: purchase_price can be masked in the API or view)
CREATE POLICY "Public games can be viewed by anyone"
  ON public.user_games FOR SELECT
  USING (is_public = true OR auth.uid() = user_id);

-- 4. Privacy View: public_user_games
-- Masks purchase_price and purchase_price_raw for anyone who is NOT the owner
CREATE OR REPLACE VIEW public.public_user_games AS
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

-- Enable RLS for user_plays
ALTER TABLE public.user_plays ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own plays"
  ON public.user_plays FOR ALL
  USING (auth.uid() = user_id);

CREATE POLICY "Public plays can be viewed by anyone"
  ON public.user_plays FOR SELECT
  USING (is_public = true OR auth.uid() = user_id);
