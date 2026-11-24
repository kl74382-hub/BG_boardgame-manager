import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();

const hasValidUrl =
  /^https?:\/\//i.test(supabaseUrl) &&
  supabaseUrl !== 'https://your-project.supabase.co' &&
  !supabaseUrl.includes('placeholder');

const hasValidAnonKey =
  Boolean(supabaseAnonKey) &&
  supabaseAnonKey !== 'your-supabase-anon-key' &&
  !supabaseAnonKey.includes('placeholder');

export const isSupabaseConfigured = Boolean(hasValidUrl && hasValidAnonKey);

// Fallback dummy client if credentials are not configured yet, so the app never crashes
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : createClient('https://placeholder.supabase.co', 'placeholder-key', {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
