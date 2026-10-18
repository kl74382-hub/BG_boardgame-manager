'use client';

import React, { useState } from 'react';
import { 
  X, 
  LogIn, 
  UserPlus, 
  ShieldCheck, 
  Mail, 
  Lock, 
  User, 
  Sparkles, 
  Crown, 
  UserCheck, 
  EyeOff, 
  Database,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export const AuthModal: React.FC = () => {
  const { 
    isAuthModalOpen, 
    closeAuthModal, 
    loginWithEmail, 
    signUpWithEmail, 
    quickLoginDemo,
    logout,
    isConfigured,
    user 
  } = useAuth();

  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      if (mode === 'login') {
        const res = await loginWithEmail(email, password);
        if (res.error) setErrorMessage(res.error);
      } else {
        if (!nickname.trim()) {
          setErrorMessage('닉네임을 입력해주세요.');
          setLoading(false);
          return;
        }
        const res = await signUpWithEmail(email, password, nickname);
        if (res.error) setErrorMessage(res.error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="relative bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-slate-900 p-6 border-b border-slate-800">
          <button
            onClick={closeAuthModal}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-500/30">
              🎲
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {user ? '계정 및 권한 설정' : (mode === 'login' ? 'BG Stats KR 로그인' : '새 계정 만들기')}
              </h3>
              <p className="text-xs text-slate-400">
                {user
                  ? `${user.nickname}님으로 로그인되어 있습니다`
                  : '관리자 또는 가입한 계정으로 로그인하여 데이터를 안전하게 관리하세요'}
              </p>
            </div>
          </div>

          {/* If already logged in, show current session banner & logout */}
          {user ? (
            <div className="mt-4 p-3 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-xl">{user.avatarUrl || '🎲'}</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white truncate">{user.nickname}</span>
                    {user.role === 'admin' ? (
                      <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold text-[9px] border border-amber-500/30 flex items-center gap-0.5">
                        <Crown className="w-2.5 h-2.5" />
                        <span>관리자</span>
                      </span>
                    ) : (
                      <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-bold text-[9px] border border-indigo-500/30">
                        회원
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-400 truncate">{user.email}</p>
                </div>
              </div>
              <button
                onClick={logout}
                className="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 hover:text-rose-300 text-xs font-semibold transition-colors shrink-0"
              >
                로그아웃
              </button>
            </div>
          ) : (
            /* Mode Switch Tabs for Guest */
            <div className="flex bg-slate-950/60 rounded-xl p-1 mt-5 border border-slate-800">
              <button
                onClick={() => { setMode('login'); setErrorMessage(null); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  mode === 'login' 
                    ? 'bg-indigo-600 text-white shadow' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>계정 로그인</span>
              </button>
              <button
                onClick={() => { setMode('signup'); setErrorMessage(null); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  mode === 'signup' 
                    ? 'bg-indigo-600 text-white shadow' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>회원가입</span>
              </button>
            </div>
          )}
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-5">
          {/* Quick Direct Login (Admin / Demo User) */}
          <div className="bg-slate-950/50 border border-slate-800/80 rounded-2xl p-3.5 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>원클릭 계정 로그인 / 전환</span>
              </span>
              <span className="text-[10px] text-slate-400">
                접속 정보 자동 유지
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => quickLoginDemo('admin')}
                className={`p-2.5 rounded-xl border text-left transition-all group ${
                  user?.role === 'admin'
                    ? 'bg-amber-950/30 border-amber-500/50 ring-1 ring-amber-500/30'
                    : 'bg-slate-900 hover:bg-slate-800 border-slate-700/80'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold text-amber-400 group-hover:text-amber-300">
                  <span className="flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5" />
                    <span>관리자(소유자)</span>
                  </span>
                  {user?.role === 'admin' && <span className="text-[9px] text-amber-400 font-normal">선택됨</span>}
                </div>
                <p className="text-[10px] text-slate-400 mt-1">Nana 관리자 권한으로 로그인 (구매가/수정 전체 가능)</p>
              </button>

              <button
                type="button"
                onClick={() => quickLoginDemo('user')}
                className={`p-2.5 rounded-xl border text-left transition-all group ${
                  user?.role === 'user'
                    ? 'bg-indigo-950/30 border-indigo-500/50 ring-1 ring-indigo-500/30'
                    : 'bg-slate-900 hover:bg-slate-800 border-slate-700/80'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold text-indigo-400 group-hover:text-indigo-300">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>일반 회원</span>
                  </span>
                  {user?.role === 'user' && <span className="text-[9px] text-indigo-400 font-normal">선택됨</span>}
                </div>
                <p className="text-[10px] text-slate-400 mt-1">일반 등록 계정으로 즉시 로그인</p>
              </button>
            </div>

            {user && (
              <button
                type="button"
                onClick={() => quickLoginDemo('guest')}
                className="w-full mt-1.5 py-1.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800/80 border border-slate-800 text-[11px] font-semibold text-slate-400 hover:text-rose-400 transition-colors flex items-center justify-center gap-1.5"
              >
                <EyeOff className="w-3 h-3 text-rose-400" />
                <span>게스트(방문자) 모드로 전환 (로그아웃)</span>
              </button>
            )}
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-slate-800"></div>
            <span className="flex-shrink mx-3 text-[11px] font-semibold text-slate-500">또는 이메일 계정으로 접속</span>
            <div className="flex-grow border-t border-slate-800"></div>
          </div>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-indigo-400" />
                  <span>닉네임</span>
                </label>
                <input
                  type="text"
                  required
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="예: 보드게임마니아"
                  className="w-full bg-slate-950/70 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>이메일 주소</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-slate-950/70 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-indigo-400" />
                <span>비밀번호</span>
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-950/70 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>{mode === 'login' ? '로그인하기' : '가입 완료하기'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Cloud Status indicator */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-sky-400" />
              <span>백엔드 상태:</span>
            </span>
            <span className={`font-semibold ${isConfigured ? 'text-emerald-400' : 'text-amber-400'}`}>
              {isConfigured ? '● Supabase 연동됨' : '● 로컬 세션 모드'}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
