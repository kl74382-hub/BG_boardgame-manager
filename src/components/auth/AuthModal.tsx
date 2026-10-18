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
        className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
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
                {mode === 'login' ? 'BG Stats KR 로그인' : '새 계정 만들기'}
              </h3>
              <p className="text-xs text-slate-400">
                {mode === 'login' 
                  ? '내 컬렉션과 비공개 구매가/기록을 안전하게 관리하세요' 
                  : '나만의 보드게임 컬렉션과 전적을 기록해보세요'}
              </p>
            </div>
          </div>

          {/* Mode Switch Tabs */}
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
              <span>로그인</span>
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
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-5">
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
              {isConfigured ? '● Supabase 연동됨' : '● 로컬 데모 모드 (설정 가능)'}
            </span>
          </div>

          {/* Quick Role Experience (Instant testing for Admin vs Guest vs User) */}
          <div className="bg-slate-950/50 border border-slate-800/80 rounded-2xl p-3.5 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>권한별 즉시 체험 (클릭하여 테스트)</span>
              </span>
              {user && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold border border-indigo-500/30">
                  현재: {user.role === 'admin' ? '관리자' : '일반 유저'}
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => quickLoginDemo('admin')}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-left transition-all group"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300">
                  <Crown className="w-3.5 h-3.5" />
                  <span>관리자(소유자)</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">구매가·가성비·수정 권한 전체 표시</p>
              </button>

              <button
                type="button"
                onClick={() => quickLoginDemo('guest')}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-left transition-all group"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 group-hover:text-white">
                  <EyeOff className="w-3.5 h-3.5 text-rose-400" />
                  <span>게스트(방문자)</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-0.5">⭐ 구매가/가성비 완벽 숨김</p>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
