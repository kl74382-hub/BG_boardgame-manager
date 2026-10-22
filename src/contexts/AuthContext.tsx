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
  loginWithEmail: (email: string, password: string, rememberMe?: boolean) => Promise<{ error?: string }>;
  signUpWithEmail: (email: string, password: string, nickname: string, rememberMe?: boolean) => Promise<{ error?: string }>;
  loginWithOAuth: (provider: 'google' | 'kakao') => Promise<void>;
  logout: () => Promise<void>;
  quickLoginDemo: (role: 'admin' | 'user' | 'guest') => void;
  canViewPrivateFields: (itemUserId?: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_STORAGE_USER_KEY = 'bg_stats_user_session';
const LOCAL_STORAGE_USERS_DB_KEY = 'bg_stats_registered_accounts';

export interface RegisteredAccount {
  id: string;
  email: string;
  password: string;
  nickname: string;
  role: 'admin' | 'user';
  avatarUrl?: string;
  bggUsername?: string;
}

export const DEFAULT_ACCOUNTS: RegisteredAccount[] = [
  {
    id: 'admin-nana',
    email: 'admin@bgstats.kr',
    password: 'admin1234',
    nickname: 'Nana (소유자/관리자)',
    role: 'admin',
    avatarUrl: '👑',
    bggUsername: 'Bitnara',
  },
  {
    id: 'user-demo-1',
    email: 'user@bgstats.kr',
    password: 'user1234',
    nickname: '보드게임친구',
    role: 'user',
    avatarUrl: '🎲',
  },
];

export function getRegisteredAccounts(): RegisteredAccount[] {
  if (typeof window === 'undefined') return DEFAULT_ACCOUNTS;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_USERS_DB_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_USERS_DB_KEY, JSON.stringify(DEFAULT_ACCOUNTS));
      return DEFAULT_ACCOUNTS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_ACCOUNTS;
  } catch {
    return DEFAULT_ACCOUNTS;
  }
}

export function saveRegisteredAccount(newAccount: RegisteredAccount) {
  if (typeof window === 'undefined') return;
  const accounts = getRegisteredAccounts();
  const filtered = accounts.filter(a => a.email.toLowerCase() !== newAccount.email.toLowerCase());
  filtered.push(newAccount);
  localStorage.setItem(LOCAL_STORAGE_USERS_DB_KEY, JSON.stringify(filtered));
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Initialize session
  useEffect(() => {
    const initAuth = async () => {
      // Ensure default accounts exist in localStorage
      if (typeof window !== 'undefined') {
        getRegisteredAccounts();
      }

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
          clearUserSession();
        }
      });
      return () => subscription.unsubscribe();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveUserSession = (profile: UserProfile, rememberMe: boolean = true) => {
    setUser(profile);
    if (typeof window === 'undefined') return;
    try {
      if (rememberMe) {
        localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(profile));
        sessionStorage.removeItem(LOCAL_STORAGE_USER_KEY);
      } else {
        sessionStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(profile));
        localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
      }
    } catch (e) {
      console.error('Failed to save user session:', e);
    }
  };

  const clearUserSession = () => {
    setUser(null);
    if (typeof window === 'undefined') return;
    try {
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
      sessionStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    } catch (e) {
      console.error('Failed to clear user session:', e);
    }
  };

  const loadSavedLocalUser = () => {
    if (typeof window === 'undefined') return;
    try {
      // 1. Check persistent localStorage (Automatic login / Remember me)
      let saved = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      // 2. If not found, check transient sessionStorage (Session only)
      if (!saved) {
        saved = sessionStorage.getItem(LOCAL_STORAGE_USER_KEY);
      }

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

  const fetchUserProfile = async (userId: string, email: string, rememberMe: boolean = true) => {
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
        saveUserSession(profile, rememberMe);
      } else {
        // Basic fallback profile from session
        const basicUser: UserProfile = {
          id: userId,
          email: email,
          nickname: email.split('@')[0],
          role: 'user',
        };
        saveUserSession(basicUser, rememberMe);
      }
    } catch (e) {
      console.error('Failed to load profile:', e);
    }
  };

  const loginWithEmail = async (
    email: string, 
    password: string, 
    rememberMe: boolean = true
  ): Promise<{ error?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPw = password.trim();

    if (!cleanEmail || !cleanPw) {
      return { error: '이메일과 비밀번호를 모두 입력해주세요.' };
    }

    if (!isSupabaseConfigured) {
      const accounts = getRegisteredAccounts();
      const account = accounts.find(a => a.email.toLowerCase() === cleanEmail);

      // Special alias: allow nana@bgstats.kr as admin
      if (!account && cleanEmail === 'nana@bgstats.kr') {
        const adminAcc = DEFAULT_ACCOUNTS[0];
        if (cleanPw !== adminAcc.password) {
          return { error: '이메일 또는 비밀번호가 일치하지 않습니다.' };
        }
        const adminProfile: UserProfile = {
          id: adminAcc.id,
          email: adminAcc.email,
          nickname: adminAcc.nickname,
          role: adminAcc.role,
          avatarUrl: adminAcc.avatarUrl,
          bggUsername: adminAcc.bggUsername,
        };
        saveUserSession(adminProfile, rememberMe);
        setIsAuthModalOpen(false);
        return {};
      }

      if (!account) {
        return { error: '등록되지 않은 계정입니다. 회원가입 탭에서 먼저 가입해주세요.' };
      }

      if (account.password !== cleanPw) {
        return { error: '이메일 또는 비밀번호가 일치하지 않습니다.' };
      }

      const profile: UserProfile = {
        id: account.id,
        email: account.email,
        nickname: account.nickname,
        role: account.role,
        avatarUrl: account.avatarUrl,
        bggUsername: account.bggUsername,
      };
      saveUserSession(profile, rememberMe);
      setIsAuthModalOpen(false);
      return {};
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email: cleanEmail, password: cleanPw });
      if (error) return { error: error.message };
      if (data.user) {
        await fetchUserProfile(data.user.id, data.user.email || cleanEmail, rememberMe);
        setIsAuthModalOpen(false);
      }
      return {};
    } catch (err: any) {
      return { error: err.message || '로그인 중 오류가 발생했습니다.' };
    }
  };

  const signUpWithEmail = async (
    email: string, 
    password: string, 
    nickname: string, 
    rememberMe: boolean = true
  ): Promise<{ error?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPw = password.trim();
    const cleanNick = nickname.trim();

    if (!cleanEmail || !cleanPw || !cleanNick) {
      return { error: '닉네임, 이메일, 비밀번호를 모두 입력해주세요.' };
    }

    if (!isSupabaseConfigured) {
      const accounts = getRegisteredAccounts();
      if (accounts.some(a => a.email.toLowerCase() === cleanEmail)) {
        return { error: '이미 등록된 이메일 주소입니다. 다른 이메일로 가입해주세요.' };
      }

      const newAccount: RegisteredAccount = {
        id: `user-${Date.now()}`,
        email: cleanEmail,
        password: cleanPw,
        nickname: cleanNick,
        role: 'user',
        avatarUrl: '🎲',
      };
      saveRegisteredAccount(newAccount);

      const profile: UserProfile = {
        id: newAccount.id,
        email: newAccount.email,
        nickname: newAccount.nickname,
        role: 'user',
        avatarUrl: '🎲',
      };
      saveUserSession(profile, rememberMe);
      setIsAuthModalOpen(false);
      return {};
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: cleanEmail,
        password: cleanPw,
        options: {
          data: {
            nickname: cleanNick,
            role: 'user',
          },
        },
      });
      if (error) return { error: error.message };
      if (data.user) {
        await fetchUserProfile(data.user.id, data.user.email || cleanEmail, rememberMe);
        setIsAuthModalOpen(false);
      }
      return {};
    } catch (err: any) {
      return { error: err.message || '회원가입 중 오류가 발생했습니다.' };
    }
  };

  const loginWithOAuth = async (provider: 'google' | 'kakao') => {
    if (!isSupabaseConfigured) {
      // Demo OAuth fallback -> user
      await loginWithEmail('user@bgstats.kr', 'user1234', true);
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
    clearUserSession();
    setIsAuthModalOpen(false);
  };

  const quickLoginDemo = (role: 'admin' | 'user' | 'guest') => {
    if (role === 'guest') {
      logout();
    } else {
      // Open modal to let user authenticate with password
      setIsAuthModalOpen(true);
    }
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
