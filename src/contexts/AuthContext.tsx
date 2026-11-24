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

// Local/offline fallback auth is allowed only when Supabase is not configured AND
// either running in development or explicitly opted-in via NEXT_PUBLIC_ALLOW_LOCAL_DEMO=true.
const isLocalDemoAllowed =
  !isSupabaseConfigured &&
  (process.env.NODE_ENV !== 'production' || process.env.NEXT_PUBLIC_ALLOW_LOCAL_DEMO === 'true');

export interface RegisteredAccount {
  id: string;
  email: string;
  passwordHash?: string;
  nickname: string;
  role: 'admin' | 'user';
  avatarUrl?: string;
  bggUsername?: string;
}

export const DEFAULT_ACCOUNTS: RegisteredAccount[] = [
  {
    id: 'admin-nana',
    email: 'admin@bgstats.kr',
    // SHA-256 for "admin@bgstats.kr:admin1234"
    passwordHash: 'e7b8bdd15d42b3ba0ec548d3f765545da12a6d0d42cf501c64f450bb50578544',
    nickname: 'Nana (소유자/관리자)',
    role: 'admin',
    avatarUrl: '👑',
    bggUsername: 'Bitnara',
  },
  {
    id: 'user-demo-1',
    email: 'user@bgstats.kr',
    // SHA-256 for "user@bgstats.kr:user1234"
    passwordHash: '00812dfadb88cbdd7b9ccccc4ee9e3a4df10e75b53774c5e43b24ca1994a3943',
    nickname: '보드게임친구',
    role: 'user',
    avatarUrl: '🎲',
  },
];

async function hashLocalPassword(email: string, password: string): Promise<string> {
  const input = `${email.toLowerCase()}:${password}`;
  if (typeof window !== 'undefined' && window.crypto?.subtle) {
    const data = new TextEncoder().encode(input);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }
  throw new Error('Web Crypto API is unavailable in this environment.');
}

function sanitizeStoredAccount(raw: any): RegisteredAccount | null {
  if (!raw || typeof raw !== 'object' || typeof raw.id !== 'string' || typeof raw.email !== 'string') {
    return null;
  }
  return {
    id: raw.id,
    email: raw.email,
    passwordHash: typeof raw.passwordHash === 'string' ? raw.passwordHash : undefined,
    nickname: typeof raw.nickname === 'string' ? raw.nickname : '보드게이머',
    role: raw.role === 'admin' ? 'admin' : 'user',
    avatarUrl: typeof raw.avatarUrl === 'string' ? raw.avatarUrl : undefined,
    bggUsername: typeof raw.bggUsername === 'string' ? raw.bggUsername : undefined,
  };
}

export function getRegisteredAccounts(): RegisteredAccount[] {
  if (typeof window === 'undefined' || isSupabaseConfigured) return DEFAULT_ACCOUNTS;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_USERS_DB_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_USERS_DB_KEY, JSON.stringify(DEFAULT_ACCOUNTS));
      return DEFAULT_ACCOUNTS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(LOCAL_STORAGE_USERS_DB_KEY, JSON.stringify(DEFAULT_ACCOUNTS));
      return DEFAULT_ACCOUNTS;
    }

    // Strip legacy plaintext and ensure default accounts have passwordHash
    const hasLegacyPlaintext = parsed.some((item: any) => item && typeof item.password === 'string');
    const sanitized = parsed
      .map(sanitizeStoredAccount)
      .filter((item): item is RegisteredAccount => item !== null);

    let needUpdate = hasLegacyPlaintext;
    const finalAccounts = sanitized.map((acc) => {
      const def = DEFAULT_ACCOUNTS.find((d) => d.email.toLowerCase() === acc.email.toLowerCase());
      if (def && def.passwordHash && !acc.passwordHash) {
        needUpdate = true;
        return { ...acc, passwordHash: def.passwordHash, role: def.role };
      }
      return acc;
    });

    // Ensure admin account always exists in local dev
    if (!finalAccounts.some((a) => a.role === 'admin' || a.id === 'admin-nana')) {
      finalAccounts.unshift(DEFAULT_ACCOUNTS[0]);
      needUpdate = true;
    }

    if (needUpdate && finalAccounts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_USERS_DB_KEY, JSON.stringify(finalAccounts));
    }

    return finalAccounts.length > 0 ? finalAccounts : DEFAULT_ACCOUNTS;
  } catch {
    return DEFAULT_ACCOUNTS;
  }
}

export function saveRegisteredAccount(newAccount: RegisteredAccount) {
  if (typeof window === 'undefined' || !isLocalDemoAllowed) return;
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
      // 1. If Supabase is configured, strictly trust Supabase Auth session (never fall back to localStorage spoofing)
      if (isSupabaseConfigured) {
        try {
          const { data: { session } } = await supabase.auth.getSession();
          if (session?.user) {
            await fetchUserProfile(session.user.id, session.user.email || '');
          } else {
            clearUserSession();
          }
        } catch (err) {
          console.error('Error fetching Supabase session:', err);
          clearUserSession();
        }
      } else if (isLocalDemoAllowed) {
        // Local dev / explicitly enabled local mode only
        getRegisteredAccounts();
        loadSavedLocalUser();
      } else {
        clearUserSession();
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
      if (!isLocalDemoAllowed) {
        return { error: '프로덕션 환경에서는 Supabase 인증 설정이 필요합니다.' };
      }

      const accounts = getRegisteredAccounts();
      let targetEmail = cleanEmail;
      let account = accounts.find(a => a.email.toLowerCase() === targetEmail);

      // Support alias: nana@bgstats.kr -> admin@bgstats.kr
      if (!account && targetEmail === 'nana@bgstats.kr') {
        targetEmail = 'admin@bgstats.kr';
        account = accounts.find(a => a.email.toLowerCase() === targetEmail);
      }

      if (!account) {
        return { error: '등록되지 않은 계정입니다. 회원가입 탭에서 먼저 가입해주세요.' };
      }

      if (!account.passwordHash) {
        return { error: '비밀번호가 설정되지 않은 계정입니다. 관리자 계정 초기 비밀번호는 admin1234 입니다.' };
      }

      const inputHash = await hashLocalPassword(targetEmail, cleanPw);
      if (account.passwordHash !== inputHash) {
        return { 
          error: account.role === 'admin'
            ? '관리자 비밀번호가 일치하지 않습니다. (초기 PW: admin1234)'
            : '이메일 또는 비밀번호가 일치하지 않습니다.' 
        };
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
      if (!isLocalDemoAllowed) {
        return { error: '프로덕션 환경에서는 Supabase 인증 설정이 필요합니다.' };
      }

      if (cleanPw.length < 8) {
        return { error: '비밀번호는 최소 8자 이상 입력해주세요.' };
      }

      const accounts = getRegisteredAccounts();
      if (accounts.some(a => a.email.toLowerCase() === cleanEmail)) {
        return { error: '이미 등록된 이메일 주소입니다. 다른 이메일로 가입해주세요.' };
      }

      const passwordHash = await hashLocalPassword(cleanEmail, cleanPw);
      const newAccount: RegisteredAccount = {
        id: `user-${Date.now()}`,
        email: cleanEmail,
        passwordHash,
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
      console.warn('OAuth login requires Supabase configuration.');
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
