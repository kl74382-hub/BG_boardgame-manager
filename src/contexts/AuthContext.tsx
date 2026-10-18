'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { UserProfile } from '@/types';

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  isConfigured: boolean;
  isLoggedIn: boolean;
  isAdmin: boolean;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  loginWithEmail: (email: string, password: string) => Promise<{ error?: string }>;
  signUpWithEmail: (email: string, password: string, nickname: string) => Promise<{ error?: string }>;
  loginWithOAuth: (provider: 'google' | 'kakao') => Promise<void>;
  logout: () => Promise<void>;
  quickLoginDemo: (role: 'admin' | 'user' | 'guest') => void;
  canViewPrivateFields: (itemUserId?: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_STORAGE_USER_KEY = 'bg_stats_user_session';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Initialize session
  useEffect(() => {
    const initAuth = async () => {
      // 1. If Supabase is configured, use Supabase session
      if (isSupabaseConfigured) {
        try {
          const { data: { session } } = await supabase.auth.getSession();
          if (session?.user) {
            await fetchUserProfile(session.user.id, session.user.email || '');
          } else {
            // Check for saved local demo user if no Supabase session
            loadSavedLocalUser();
          }
        } catch (err) {
          console.error('Error fetching Supabase session:', err);
          loadSavedLocalUser();
        }
      } else {
        // Supabase not configured yet - load local session (demo admin/user/guest)
        loadSavedLocalUser();
      }
      setLoading(false);
    };

    initAuth();

    // Listen to Supabase Auth state changes
    if (isSupabaseConfigured) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (session?.user) {
          await fetchUserProfile(session.user.id, session.user.email || '');
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
        }
      });
      return () => subscription.unsubscribe();
    }
  }, []);

  const loadSavedLocalUser = () => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      if (saved) {
        setUser(JSON.parse(saved));
      } else {
        // Default: If no session exists, start in Guest state (user = null)
        setUser(null);
      }
    } catch {
      setUser(null);
    }
  };

  const fetchUserProfile = async (userId: string, email: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (data && !error) {
        const profile: UserProfile = {
          id: data.id,
          email: data.email || email,
          nickname: data.nickname || '보드게이머',
          role: (data.role as 'admin' | 'user') || 'user',
          avatarUrl: data.avatar_url,
          bggUsername: data.bgg_username,
          createdAt: data.created_at,
        };
        setUser(profile);
        localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(profile));
      } else {
        // Basic fallback profile from session
        const basicUser: UserProfile = {
          id: userId,
          email: email,
          nickname: email.split('@')[0],
          role: 'user',
        };
        setUser(basicUser);
        localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(basicUser));
      }
    } catch (e) {
      console.error('Failed to load profile:', e);
    }
  };

  const loginWithEmail = async (email: string, password: string): Promise<{ error?: string }> => {
    if (!isSupabaseConfigured) {
      // Demo login
      const demoUser: UserProfile = {
        id: `user-${Date.now()}`,
        email,
        nickname: email.split('@')[0],
        role: email.includes('admin') ? 'admin' : 'user',
      };
      setUser(demoUser);
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(demoUser));
      setIsAuthModalOpen(false);
      return {};
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) return { error: error.message };
      if (data.user) {
        await fetchUserProfile(data.user.id, data.user.email || email);
        setIsAuthModalOpen(false);
      }
      return {};
    } catch (err: any) {
      return { error: err.message || '로그인 중 오류가 발생했습니다.' };
    }
  };

  const signUpWithEmail = async (email: string, password: string, nickname: string): Promise<{ error?: string }> => {
    if (!isSupabaseConfigured) {
      const demoUser: UserProfile = {
        id: `user-${Date.now()}`,
        email,
        nickname: nickname || email.split('@')[0],
        role: 'user',
      };
      setUser(demoUser);
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(demoUser));
      setIsAuthModalOpen(false);
      return {};
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            nickname,
            role: 'user',
          },
        },
      });
      if (error) return { error: error.message };
      if (data.user) {
        await fetchUserProfile(data.user.id, data.user.email || email);
        setIsAuthModalOpen(false);
      }
      return {};
    } catch (err: any) {
      return { error: err.message || '회원가입 중 오류가 발생했습니다.' };
    }
  };

  const loginWithOAuth = async (provider: 'google' | 'kakao') => {
    if (!isSupabaseConfigured) {
      quickLoginDemo('user');
      return;
    }
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: typeof window !== 'undefined' ? `${window.location.origin}` : undefined,
      },
    });
  };

  const logout = async () => {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    // Switch to guest mode
    quickLoginDemo('guest');
  };

  const quickLoginDemo = (role: 'admin' | 'user' | 'guest') => {
    if (role === 'guest') {
      setUser(null);
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    } else if (role === 'admin') {
      const admin: UserProfile = {
        id: 'admin-nana',
        email: 'admin@bgstats.kr',
        nickname: 'Nana (소유자/관리자)',
        role: 'admin',
        avatarUrl: '👑',
        bggUsername: 'Bitnara',
      };
      setUser(admin);
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(admin));
    } else {
      const normalUser: UserProfile = {
        id: 'demo-user-1',
        email: 'boardgamer@example.com',
        nickname: '보드게임친구',
        role: 'user',
        avatarUrl: '🎲',
      };
      setUser(normalUser);
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(normalUser));
    }
    setIsAuthModalOpen(false);
  };

  /**
   * ⭐ Determines whether private data (such as purchasePrice, costPerPlay) should be visible:
   * 1. If user is Admin -> true
   * 2. If logged in and item has no itemUserId (local seed data belonging to owner) -> true if admin, false if guest
   * 3. If logged in and item.userId === user.id -> true
   * 4. Otherwise (guest or viewing other user's game) -> false!
   */
  const canViewPrivateFields = (itemUserId?: string): boolean => {
    if (!user) return false; // Guest -> never see purchase prices
    if (user.role === 'admin') return true; // Admin -> full access
    if (itemUserId && user.id === itemUserId) return true; // Owner of this game
    return false;
  };

  const isLoggedIn = Boolean(user && user.role !== 'guest');
  const isAdmin = Boolean(user?.role === 'admin');

  const value = useMemo(
    () => ({
      user,
      loading,
      isConfigured: isSupabaseConfigured,
      isLoggedIn,
      isAdmin,
      isAuthModalOpen,
      openAuthModal: () => setIsAuthModalOpen(true),
      closeAuthModal: () => setIsAuthModalOpen(false),
      loginWithEmail,
      signUpWithEmail,
      loginWithOAuth,
      logout,
      quickLoginDemo,
      canViewPrivateFields,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, loading, isAuthModalOpen, isLoggedIn, isAdmin]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
