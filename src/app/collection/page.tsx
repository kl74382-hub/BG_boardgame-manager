'use client';

import React, { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { 
  Plus, 
  Library, 
  Search, 
  Filter, 
  SlidersHorizontal, 
  LayoutGrid, 
  Table as TableIcon,
  Star,
  Users,
  Clock,
  Coins,
  ShieldCheck,
  Sparkles,
  ArrowUpDown
} from 'lucide-react';
import { db } from '@/lib/db';
import { Header } from '@/components/layout/Header';
import { GameCard } from '@/components/collection/GameCard';
import { GameDetailModal } from '@/components/collection/GameDetailModal';
import { AddGameModal } from '@/components/collection/AddGameModal';
import { LogPlayModal } from '@/components/plays/LogPlayModal';
import { Game, GameStatus, Play } from '@/types';
import { matchGameSearch } from '@/lib/hangul-search';
import { calculateGameStatsMap } from '@/lib/stats-calculator';

type SortOption = 'rank' | 'rating' | 'plays' | 'cost' | 'weight' | 'title';

export default function CollectionPage() {
  const games = useLiveQuery(() => db.games.toArray()) || [];
  const plays = useLiveQuery(() => db.plays.toArray()) || [];

  // Filter & Search states
  const [activeTab, setActiveTab] = useState<GameStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [playerCountFilter, setPlayerCountFilter] = useState<number | 'all'>('all');
  const [maxTimeFilter, setMaxTimeFilter] = useState<number | 'all'>('all');
  const [weightFilter, setWeightFilter] = useState<'all' | 'light' | 'medium' | 'heavy'>('all');
  const [unplayedOnly, setUnplayedOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('rank');

  // Modals
  const [selectedGameForDetail, setSelectedGameForDetail] = useState<Game | null>(null);
  const [isAddGameOpen, setIsAddGameOpen] = useState(false);
  const [isLogPlayOpen, setIsLogPlayOpen] = useState(false);
  const [targetGameIdForPlay, setTargetGameIdForPlay] = useState<string | undefined>(undefined);

  const gameStats = calculateGameStatsMap(games, plays);

  const handleToggleFavorite = async (gameId: string) => {
    const target = games.find(g => g.id === gameId);
    if (target) {
      await db.games.update(gameId, { favorite: !target.favorite });
    }
  };

  // Filter logic
  const filteredGames = games.filter(game => {
    // 1. Tab status filter
    if (activeTab !== 'all' && game.status !== activeTab) return false;

    // 2. Player count filter
    if (playerCountFilter !== 'all') {
      if (game.minPlayers > playerCountFilter || game.maxPlayers < playerCountFilter) return false;
    }

    // 3. Max playtime filter
    if (maxTimeFilter !== 'all') {
      if (game.maxPlaytime > maxTimeFilter) return false;
    }

    // 4. Weight filter
    if (weightFilter === 'light' && (game.weight || 0) >= 2.5) return false;
    if (weightFilter === 'medium' && ((game.weight || 0) < 2.5 || (game.weight || 0) >= 3.5)) return false;
    if (weightFilter === 'heavy' && (game.weight || 0) < 3.5) return false;

    // 5. Unplayed filter
    const stats = gameStats.get(game.id);
    if (unplayedOnly && (stats?.playCount || 0) > 0) return false;

    // 6. Search query with Hangul Chosung
    if (!matchGameSearch(game, searchQuery)) return false;

    return true;
  });

  // Sorting
  const sortedGames = [...filteredGames].sort((a, b) => {
    const statA = gameStats.get(a.id);
    const statB = gameStats.get(b.id);

    switch (sortBy) {
      case 'rank':
        return (a.bggRank || 99999) - (b.bggRank || 99999);
      case 'rating':
        return (b.userRating || b.bggRating || 0) - (a.userRating || a.bggRating || 0);
      case 'plays':
        return (statB?.playCount || 0) - (statA?.playCount || 0);
      case 'cost':
        return (statA?.costPerPlay || 999999) - (statB?.costPerPlay || 999999);
      case 'weight':
        return (b.weight || 0) - (a.weight || 0);
      case 'title':
        return a.titleKr.localeCompare(b.titleKr, 'ko');
      default:
        return 0;
    }
  });

  // Tab counts
  const countOwned = games.filter(g => g.status === 'owned').length;
  const countWishlist = games.filter(g => g.status === 'wishlist').length;
  const countPlayed = games.filter(g => g.status === 'played').length;
  const countForTrade = games.filter(g => g.status === 'fortrade').length;

  return (
    <div className="flex-1 flex flex-col">
      <Header
        title="보드게임 컬렉션"
        subtitle="보유 게임, 위시리스트, BGG 스탯 및 슬리브 관리"
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="게임명, 초성(ㅌㅍㅁ, ㅅㄷ), 발매사 검색..."
        rightAction={
          <button
            onClick={() => setIsAddGameOpen(true)}
            className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">새 게임 추가</span>
          </button>
        }
      />

      <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto w-full">
        
        {/* Status Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            전체 ({games.length})
          </button>
          <button
            onClick={() => setActiveTab('owned')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'owned'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            보유중 ({countOwned})
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'wishlist'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            위시리스트 ({countWishlist})
          </button>
          <button
            onClick={() => setActiveTab('played')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'played'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            해본 게임 ({countPlayed})
          </button>
          <button
            onClick={() => setActiveTab('fortrade')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeTab === 'fortrade'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            방출/교환 ({countForTrade})
          </button>
        </div>

        {/* Filter & Sort Drawer Bar */}
        <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {/* Player Count */}
            <div>
              <label className="text-[11px] text-slate-400 font-medium block mb-1">인원수 필터</label>
              <select
                value={playerCountFilter}
                onChange={(e) => setPlayerCountFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
              >
                <option value="all">인원수 무관</option>
                <option value="1">1인 (솔로 가능)</option>
                <option value="2">2인 가능</option>
                <option value="3">3인 가능</option>
                <option value="4">4인 가능</option>
                <option value="5">5인 이상 가능</option>
              </select>
            </div>

            {/* Playtime */}
            <div>
              <label className="text-[11px] text-slate-400 font-medium block mb-1">플레이 타임</label>
              <select
                value={maxTimeFilter}
                onChange={(e) => setMaxTimeFilter(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
              >
                <option value="all">시간 무관</option>
                <option value="30">30분 이하</option>
                <option value="60">60분 이하</option>
                <option value="90">90분 이하</option>
                <option value="120">120분 이하</option>
              </select>
            </div>

            {/* Weight */}
            <div>
              <label className="text-[11px] text-slate-400 font-medium block mb-1">난이도 (Weight)</label>
              <select
                value={weightFilter}
                onChange={(e) => setWeightFilter(e.target.value as any)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
              >
                <option value="all">전체 난이도</option>
                <option value="light">입문 (2.5 미만)</option>
                <option value="medium">초중급 (2.5~3.5)</option>
                <option value="heavy">헤비 (3.5 이상)</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="text-[11px] text-slate-400 font-medium block mb-1 flex items-center gap-1">
                <ArrowUpDown className="w-3 h-3 text-indigo-400" />
                <span>정렬 기준</span>
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-white"
              >
                <option value="rank">BGG 랭킹순</option>
                <option value="rating">평점 높은순</option>
                <option value="plays">플레이 횟수순</option>
                <option value="cost">가성비 (회당비용)순</option>
                <option value="weight">난이도 높은순</option>
                <option value="title">게임명 가나다순</option>
              </select>
            </div>

            {/* Unplayed Toggle */}
            <div className="flex flex-col justify-end">
              <button
                type="button"
                onClick={() => setUnplayedOnly(!unplayedOnly)}
                className={`w-full py-1.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                  unplayedOnly
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                {unplayedOnly ? '📦 노플 게임만 보기' : '노플 게임 모아보기'}
              </button>
            </div>
          </div>
        </div>

        {/* Game Count Display */}
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>
            총 <strong className="text-white font-bold">{sortedGames.length}</strong>개의 게임 검색됨
          </span>
        </div>

        {/* Games Grid */}
        {sortedGames.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {sortedGames.map((game) => {
              const stat = gameStats.get(game.id);
              return (
                <GameCard
                  key={game.id}
                  game={game}
                  playCount={stat?.playCount}
                  costPerPlay={stat?.costPerPlay}
                  onClick={() => setSelectedGameForDetail(game)}
                  onToggleFavorite={handleToggleFavorite}
                />
              );
            })}
          </div>
        ) : (
          <div className="p-12 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
            <p className="text-base font-bold text-slate-300">검색 조건에 맞는 게임이 없습니다.</p>
            <p className="text-xs text-slate-500">필터를 초기화하거나 새 게임을 추가해 보세요.</p>
            <button
              onClick={() => setIsAddGameOpen(true)}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow"
            >
              새 게임 추가하기
            </button>
          </div>
        )}

      </div>

      {/* Modals */}
      <GameDetailModal
        game={selectedGameForDetail}
        plays={plays}
        isOpen={selectedGameForDetail !== null}
        onClose={() => setSelectedGameForDetail(null)}
        onOpenLogPlay={(gId) => {
          setTargetGameIdForPlay(gId);
          setIsLogPlayOpen(true);
        }}
      />

      <AddGameModal
        isOpen={isAddGameOpen}
        onClose={() => setIsAddGameOpen(false)}
      />

      <LogPlayModal
        isOpen={isLogPlayOpen}
        onClose={() => {
          setIsLogPlayOpen(false);
          setTargetGameIdForPlay(undefined);
        }}
        initialGameId={targetGameIdForPlay}
      />
    </div>
  );
}
