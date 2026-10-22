'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Share2, Globe, ShieldCheck } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetUserId: string;
  targetUserName: string;
  pageType: 'collection' | 'plays' | 'dashboard';
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  targetUserId,
  targetUserName,
  pageType,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const basePath = pageType === 'collection' ? '/collection' : pageType === 'plays' ? '/plays' : '/';
  const shareUrl = `${origin}${basePath}?user=${encodeURIComponent(targetUserId)}`;

  const pageTitle =
    pageType === 'collection'
      ? '보드게임 컬렉션'
      : pageType === 'plays'
      ? '플레이 기록/전적'
      : '보드게임 대시보드';

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = shareUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert('링크 복사에 실패했습니다.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden p-6 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {targetUserName} 님의 {pageTitle} 공유
              </h3>
              <p className="text-xs text-slate-400">
                링크를 복사하여 친구나 모임 단톡방에 공유해보세요
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Security / Privacy Badge */}
        <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed text-[11px]">
            공유 링크를 통해 접속한 상대방에게는 <strong className="text-slate-300">구매 가격, 가성비 지표 및 개인 메모가 비공개</strong>로 안전하게 보호됩니다.
          </p>
        </div>

        {/* Share Link Box */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <span>고유 공유 링크</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 bg-slate-950/80 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-indigo-300 select-all focus:outline-none focus:ring-1 focus:ring-indigo-500/50 truncate"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shrink-0 ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white active:scale-95'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>복사됨!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>링크 복사</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
          <span>어디서나 바로 열람 가능한 공개 링크</span>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 transition-colors font-semibold"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
