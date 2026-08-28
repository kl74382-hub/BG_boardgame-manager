'use client';

import React from 'react';
import { Plus, Search, Sun, Moon, Sparkles } from 'lucide-react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  onOpenLogPlay?: () => void;
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
  searchPlaceholder?: string;
  rightAction?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  onOpenLogPlay,
  searchQuery,
  onSearchChange,
  searchPlaceholder = '게임명, 초성(ㅌㅍㅁ, ㅅㄷ), 태그 검색...',
  rightAction,
}) => {
  const [theme, setTheme] = React.useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
      {/* Title / Breadcrumb */}
      <div>
        {title && <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{title}</h2>}
        {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
      </div>

      {/* Center Search Input (if enabled) */}
      {onSearchChange !== undefined && (
        <div className="flex-1 max-w-md hidden sm:block relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery || ''}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full bg-slate-800/80 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
          />
        </div>
      )}

      {/* Right Actions */}
      <div className="flex items-center gap-2.5">
        {rightAction}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
          title="테마 전환"
          aria-label="테마 전환"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
        </button>

        {/* Quick Log Play */}
        {onOpenLogPlay && (
          <button
            onClick={onOpenLogPlay}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md shadow-indigo-600/30 transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>플레이 기록</span>
          </button>
        )}
      </div>
    </header>
  );
};
