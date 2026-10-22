'use client';

import React, { useState } from 'react';
import { 
  Users, 
  Share2, 
  ArrowLeft, 
  ShieldCheck, 
  ChevronDown, 
  Eye,
  Crown,
  UserCheck
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { getPublicUserList, getPublicUserById, ADMIN_USER_ID, PublicUserProfile } from '@/lib/user-data-filter';
import { ShareModal } from './ShareModal';

interface UserViewSelectorProps {
  selectedUserId: string; // 'my', 'admin-nana', 'showcase', or specific userId
  onSelectUser: (userId: string) => void;
  pageType: 'collection' | 'plays';
  totalItemsCount?: number;
}

export const UserViewSelector: React.FC<UserViewSelectorProps> = ({
  selectedUserId,
  onSelectUser,
  pageType,
  totalItemsCount,
}) => {
  const { user, isAdmin } = useAuth();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const publicUsers = getPublicUserList();

  // Determine current active viewing context
  const isViewingMyOwn =
    selectedUserId === 'my' ||
    (user && selectedUserId === user.id) ||
    (!user && (selectedUserId === ADMIN_USER_ID || selectedUserId === 'showcase'));

  const isViewingOwner =
    selectedUserId === ADMIN_USER_ID || selectedUserId === 'showcase';

  // Resolve current target profile info
  let currentTargetName = '내 컬렉션';
  let currentTargetAvatar = user?.avatarUrl || '🎲';
  let isViewingThirdParty = false;
  let shareTargetId = selectedUserId;
  let shareTargetName = '';

  if (isViewingOwner) {
    currentTargetName = 'Nana (소유자/관리자)';
    currentTargetAvatar = '👑';
    shareTargetId = ADMIN_USER_ID;
    shareTargetName = 'Nana';
    if (user && !isAdmin) {
      isViewingThirdParty = true;
    }
  } else if (selectedUserId === 'my') {
    if (user) {
      currentTargetName = `${user.nickname} (나)`;
      currentTargetAvatar = user.avatarUrl || (isAdmin ? '👑' : '🎲');
      shareTargetId = user.id;
      shareTargetName = user.nickname;
    } else {
      currentTargetName = '게스트 열람 (기본 마스터)';
      currentTargetAvatar = '👑';
      shareTargetId = ADMIN_USER_ID;
      shareTargetName = 'Nana';
    }
  } else {
    // Specific userId
    const targetUser = getPublicUserById(selectedUserId);
    if (targetUser) {
      currentTargetName = targetUser.nickname;
      currentTargetAvatar = targetUser.avatarUrl || '🎲';
      shareTargetId = targetUser.id;
      shareTargetName = targetUser.nickname;
      if (!user || user.id !== targetUser.id) {
        isViewingThirdParty = true;
      }
    } else {
      currentTargetName = '보드게이머';
      shareTargetId = selectedUserId;
      shareTargetName = '보드게이머';
      isViewingThirdParty = true;
    }
  }

  const pageLabel = pageType === 'collection' ? '컬렉션' : '플레이 기록';

  return (
    <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-3.5 sm:p-4 shadow-sm space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Left: Current Active Profile Banner */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl shrink-0 shadow-inner">
              {currentTargetAvatar}
            </div>
            {isViewingOwner ? (
              <span className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-amber-500 text-slate-950" title="소유자/마스터">
                <Crown className="w-3 h-3" />
              </span>
            ) : isViewingMyOwn ? (
              <span className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-indigo-500 text-white" title="내 계정">
                <UserCheck className="w-3 h-3" />
              </span>
            ) : (
              <span className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-sky-500 text-white" title="둘러보기">
                <Eye className="w-3 h-3" />
              </span>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-white">
                {currentTargetName}
              </span>
              <span
                className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                  isViewingOwner
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : isViewingThirdParty
                    ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                    : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                }`}
              >
                {isViewingOwner ? '👑 마스터 쇼케이스' : isViewingThirdParty ? '👀 둘러보기 (공개)' : '내 데이터'}
              </span>
              {totalItemsCount !== undefined && (
                <span className="text-xs text-slate-400 font-medium">
                  {totalItemsCount}개
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-400">
              {isViewingThirdParty
                ? `${currentTargetName} 님의 ${pageLabel}을(를) 열람하고 있습니다. (구매가·비밀메모 보호됨)`
                : isViewingOwner
                ? `전체 마스터 추천 ${pageLabel}을(를) 둘러보고 있습니다.`
                : `현재 로그인된 내 계정의 ${pageLabel}입니다.`}
            </p>
          </div>
        </div>

        {/* Right Actions: Dropdown Switcher & Share Button */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          {/* If viewing someone else and user is logged in: Return to My Collection button */}
          {isViewingThirdParty && user && (
            <button
              onClick={() => onSelectUser('my')}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
              title="내 데이터로 돌아가기"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">내 {pageLabel}</span>
            </button>
          )}

          {/* User Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Users className="w-3.5 h-3.5 text-indigo-400" />
              <span>유저 둘러보기</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
            </button>

            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-1.5 w-60 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl z-50 py-1.5 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 border-b border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    보드게이머 쇼케이스 선택
                  </div>

                  <div className="max-h-60 overflow-y-auto py-1 scrollbar-thin">
                    {/* 1. My Collection (if logged in) */}
                    {user && (
                      <button
                        onClick={() => {
                          onSelectUser('my');
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between transition-colors ${
                          selectedUserId === 'my' || selectedUserId === user.id
                            ? 'bg-indigo-600/20 text-indigo-300 font-bold'
                            : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{user.avatarUrl || '🎲'}</span>
                          <span>{user.nickname} (내 {pageLabel})</span>
                        </div>
                        {(selectedUserId === 'my' || selectedUserId === user.id) && (
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        )}
                      </button>
                    )}

                    {/* 2. Nana Owner Master Collection */}
                    <button
                      onClick={() => {
                        onSelectUser(ADMIN_USER_ID);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between transition-colors ${
                        selectedUserId === ADMIN_USER_ID || selectedUserId === 'showcase'
                          ? 'bg-amber-500/20 text-amber-300 font-bold'
                          : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>👑</span>
                        <span>Nana (소유자 컬렉션)</span>
                      </div>
                      {(selectedUserId === ADMIN_USER_ID || selectedUserId === 'showcase') && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      )}
                    </button>

                    {/* 3. Registered other users */}
                    {publicUsers.length > 0 && (
                      <div className="pt-1 mt-1 border-t border-slate-800/80">
                        <div className="px-3 py-1 text-[10px] text-slate-400 font-semibold">
                          등록된 보드게이머
                        </div>
                        {publicUsers
                          .filter((u) => u.id !== ADMIN_USER_ID)
                          .map((u) => {
                            const isMe = user && user.id === u.id;
                            const isSelected = selectedUserId === u.id;
                            return (
                              <button
                                key={u.id}
                                onClick={() => {
                                  onSelectUser(u.id);
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between transition-colors ${
                                  isSelected
                                    ? 'bg-sky-500/20 text-sky-300 font-bold'
                                    : 'text-slate-300 hover:bg-slate-800'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <span>{u.avatarUrl || '🎲'}</span>
                                  <span>
                                    {u.nickname} {isMe ? '(나)' : ''}
                                  </span>
                                </div>
                                {isSelected && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                                )}
                              </button>
                            );
                          })}
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Share Button */}
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
            title="현재 쇼케이스 공유 링크 복사"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>공유하기</span>
          </button>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        targetUserId={shareTargetId}
        targetUserName={shareTargetName || currentTargetName}
        pageType={pageType}
      />
    </div>
  );
};
