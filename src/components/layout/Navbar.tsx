'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Dices, 
  Library, 
  BarChart3, 
  Wrench, 
  Settings,
  Plus
} from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { name: '대시보드', href: '/', icon: LayoutDashboard },
  { name: '플레이 기록', href: '/plays', icon: Dices },
  { name: '컬렉션', href: '/collection', icon: Library },
  { name: '심층 통계', href: '/stats', icon: BarChart3 },
  { name: '유틸리티', href: '/tools', icon: Wrench },
  { name: '설정/연동', href: '/settings', icon: Settings },
];

interface NavbarProps {
  onOpenLogPlay?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLogPlay }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-slate-800 bg-slate-900/90 backdrop-blur-md p-4 fixed top-0 bottom-0 left-0 z-40">
        {/* Brand Header */}
        <div className="flex items-center gap-3 px-2 py-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/25">
            🎲
          </div>
          <div>
            <h1 className="font-extrabold text-lg text-white tracking-tight flex items-center gap-1.5">
              BG Stats <span className="text-xs px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-bold border border-indigo-500/30">KR</span>
            </h1>
            <p className="text-xs text-slate-400 font-medium">BGG & 보드라이프 연동</p>
          </div>
        </div>

        {/* Quick Log Play Button */}
        {onOpenLogPlay && (
          <button
            onClick={onOpenLogPlay}
            className="w-full mb-6 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 active:scale-[0.98] transition-all"
          >
            <Plus className="w-5 h-5" />
            <span>플레이 기록하기</span>
          </button>
        )}

        {/* Nav Links */}
        <nav className="flex-1 space-y-1.5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  isActive
                    ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/20 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer Info */}
        <div className="pt-4 border-t border-slate-800/60 text-xs text-slate-500 px-2 space-y-1">
          <div className="flex items-center justify-between">
            <span>BGG / BoardLife Bridge</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
          <p>© 2026 BG Stats Pro KR</p>
        </div>
      </aside>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800/80 px-2 py-1.5 safe-area-pb">
        <div className="flex items-center justify-around">
          {NAV_ITEMS.slice(0, 2).map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center py-1 px-2.5 rounded-lg text-[10px] font-semibold transition-all ${
                  isActive ? 'text-indigo-400' : 'text-slate-400 hover:text-slate-300'
                }`}
              >
                <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'text-indigo-400 scale-110' : ''}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}

          {/* Center Action Button (Log Play) */}
          {onOpenLogPlay && (
            <button
              onClick={onOpenLogPlay}
              className="-mt-5 w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-600/40 active:scale-95 transition-transform border-4 border-slate-900"
              aria-label="플레이 기록하기"
            >
              <Plus className="w-6 h-6 stroke-[2.5]" />
            </button>
          )}

          {NAV_ITEMS.slice(2, 5).map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-semibold transition-all ${
                  isActive ? 'text-indigo-400' : 'text-slate-400 hover:text-slate-300'
                }`}
              >
                <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'text-indigo-400 scale-110' : ''}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
