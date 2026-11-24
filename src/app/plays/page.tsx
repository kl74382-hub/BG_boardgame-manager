'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { 
  Plus, 
  Dices, 
  Search, 
  MapPin, 
  Users, 
  SlidersHorizontal,
  X
} from 'lucide-react';
import { db } from '@/lib/db';
import { Header } from '@/components/layout/Header';
import { PlayCard } from '@/components/plays/PlayCard';
import { LogPlayModal } from '@/components/plays/LogPlayModal';
import {
  SearchableFilterSelect,
  SearchableFilterOption,
} from '@/components/plays/SearchableFilterSelect';
import {
  PlayDateFilter,
  PlayDateFilterState,
  INITIAL_DATE_FILTER,
  isDateFilterActive,
  matchesPlayDateFilter,
} from '@/components/plays/PlayDateFilter';
import { UserViewSelector } from '@/components/layout/UserViewSelector';
import { Play } from '@/types';
import { getGameSearchScore, getTextSearchScore } from '@/lib/hangul-search';
import { useAuth } from '@/contexts/AuthContext';
import { filterGamesForUser, filterPlaysForUser } from '@/lib/user-data-filter';

export default function PlaysPage() {
  const { user } = useAuth();

  // Resolve initial selectedUserId from URL ?user= param
  const [selectedUserId, setSelectedUserId] = useState<string>('my');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlUser = params.get('user');
      if (urlUser) {
        setSelectedUserId(urlUser);
      } else {
        setSelectedUserId('my');
      }
    }
  }, []);

  const handleSelectUser = (userId: string) => {
    setSelectedUserId(userId);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (userId === 'my') {
        url.searchParams.delete('user');
      } else {
        url.searchParams.set('user', userId);
      }
      window.history.replaceState(null, '', url.toString());
    }
  };

  const allGamesQuery = useLiveQuery(() => db.games.toArray());
  const allPlaysQuery = useLiveQuery(() => db.plays.orderBy('date').reverse().toArray());
  const playersQuery = useLiveQuery(() => db.players.toArray());
  const locationsQuery = useLiveQuery(() => db.locations.toArray());

  const allGames = useMemo(() => allGamesQuery ?? [], [allGamesQuery]);
  const allPlays = useMemo(() => allPlaysQuery ?? [], [allPlaysQuery]);
  const players = useMemo(() => playersQuery ?? [], [playersQuery]);
  const locations = useMemo(() => locationsQuery ?? [], [locationsQuery]);

  const games = useMemo(
    () => filterGamesForUser(allGames, user, selectedUserId),
    [allGames, user, selectedUserId]
  );
  const plays = useMemo(
    () => filterPlaysForUser(allPlays, user, selectedUserId),
    [allPlays, user, selectedUserId]
  );

  // canManage: only if viewing own plays
  const isViewingOwn = selectedUserId === 'my' || (user && selectedUserId === user.id);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlayerId, setSelectedPlayerId] = useState<string>('all');
  const [selectedLocationId, setSelectedLocationId] = useState<string>('all');
  const [selectedGameId, setSelectedGameId] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<PlayDateFilterState>(INITIAL_DATE_FILTER);

  // Modal states
  const [isLogPlayOpen, setIsLogPlayOpen] = useState(false);
  const [editingPlay, setEditingPlay] = useState<Play | undefined>(undefined);
  const [targetGameId, setTargetGameId] = useState<string | undefined>(undefined);

  const handleOpenLogPlay = (gameId?: string) => {
    setTargetGameId(gameId);
    setEditingPlay(undefined);
    setIsLogPlayOpen(true);
  };

  const handleEditPlay = (play: Play) => {
    setEditingPlay(play);
    setIsLogPlayOpen(true);
  };

  const handleDeletePlay = async (playId: string) => {
    if (confirm('이 플레이 기록을 삭제하시겠습니까?')) {
      await db.plays.delete(playId);
    }
  };

  const handleClonePlay = (play: Play) => {
    setTargetGameId(play.gameId);
    setEditingPlay(undefined);
    setIsLogPlayOpen(true);
  };

  // Precompute lookup maps & searchable dropdown options with play counts
  const playerMap = useMemo(() => {
    const map = new Map<string, string>();
    for (const p of players) {
      map.set(p.id, p.name);
    }
    return map;
  }, [players]);

  const { gameOptions, playerOptions, locationOptions, locationNameById } = useMemo(() => {
    const gCounts = new Map<string, number>();
    const pCounts = new Map<string, number>();
    const lCountsById = new Map<string, number>();
    const lCountsByName = new Map<string, number>();

    for (const play of plays) {
      gCounts.set(play.gameId, (gCounts.get(play.gameId) || 0) + 1);
      for (const ps of play.playerScores) {
        pCounts.set(ps.playerId, (pCounts.get(ps.playerId) || 0) + 1);
      }
      if (play.locationId) {
        lCountsById.set(play.locationId, (lCountsById.get(play.locationId) || 0) + 1);
      } else if (play.locationName) {
        lCountsByName.set(play.locationName, (lCountsByName.get(play.locationName) || 0) + 1);
      }
    }

    const seenGameIds = new Set<string>();
    const builtGames: SearchableFilterOption[] = [];
    for (const g of games) {
      seenGameIds.add(g.id);
      const count = gCounts.get(g.id) || 0;
      builtGames.push({
        value: g.id,
        label: g.titleKr,
        subLabel: g.titleEn && g.titleEn !== g.titleKr ? g.titleEn : undefined,
        badge: count > 0 ? `${count}회` : undefined,
        searchGame: {
          titleKr: g.titleKr,
          titleEn: g.titleEn,
          publisherKr: g.publisherKr,
          categories: g.categories,
          mechanics: g.mechanics,
        },
      });
    }
    // Include games that appear in plays even if missing from the games table
    for (const play of plays) {
      if (!seenGameIds.has(play.gameId)) {
        seenGameIds.add(play.gameId);
        const count = gCounts.get(play.gameId) || 0;
        const titleKr = play.gameTitleKr || play.gameTitleEn || '보드게임';
        const titleEn = play.gameTitleEn || '';
        builtGames.push({
          value: play.gameId,
          label: titleKr,
          subLabel: titleEn && titleEn !== titleKr ? titleEn : undefined,
          badge: count > 0 ? `${count}회` : undefined,
          searchGame: { titleKr, titleEn },
        });
      }
    }

    const builtPlayers: SearchableFilterOption[] = players.map((p) => {
      const count = pCounts.get(p.id) || 0;
      return {
        value: p.id,
        label: `${p.name}${p.isUser ? ' (나)' : ''}`,
        prefixIcon: p.avatar || '🎲',
        badge: count > 0 ? `${count}회` : undefined,
        searchTexts: [p.name, ...(p.bggUsername ? [p.bggUsername] : [])],
      };
    });

    const locNameMap = new Map<string, string>();
    const knownLocationNames = new Set<string>();
    const builtLocations: SearchableFilterOption[] = locations.map((loc) => {
      locNameMap.set(loc.id, loc.name);
      knownLocationNames.add(loc.name);
      const count = (lCountsById.get(loc.id) || 0) + (lCountsByName.get(loc.name) || 0);
      return {
        value: loc.id,
        label: loc.name,
        badge: count > 0 ? `${count}회` : undefined,
        searchTexts: [loc.name],
      };
    });
    // Include ad-hoc location names stored on plays without a locationId
    for (const [locName, count] of Array.from(lCountsByName.entries())) {
      if (!knownLocationNames.has(locName)) {
        const syntheticId = `name:${locName}`;
        locNameMap.set(syntheticId, locName);
        builtLocations.push({
          value: syntheticId,
          label: locName,
          badge: `${count}회`,
          searchTexts: [locName],
        });
      }
    }

    return {
      gameOptions: builtGames,
      playerOptions: builtPlayers,
      locationOptions: builtLocations,
      locationNameById: locNameMap,
    };
  }, [games, players, locations, plays]);

  // Filter & priority-sort logic
  const filteredPlays = useMemo(() => {
    const trimmedSearch = searchQuery.trim();
    const selectedLocationName =
      selectedLocationId !== 'all' ? locationNameById.get(selectedLocationId) : undefined;

    const matched: Array<{ play: Play; score: number }> = [];

    for (const play of plays) {
      // 1. Game filter
      if (selectedGameId !== 'all' && play.gameId !== selectedGameId) continue;

      // 2. Player filter
      if (selectedPlayerId !== 'all') {
        if (!play.playerScores.some((ps) => ps.playerId === selectedPlayerId)) continue;
      }

      // 3. Location filter (matches by ID or cached name)
      if (selectedLocationId !== 'all') {
        const matchesId = play.locationId === selectedLocationId;
        const matchesName = Boolean(
          selectedLocationName && play.locationName === selectedLocationName
        );
        if (!matchesId && !matchesName) continue;
      }

      // 4. Play date filter
      if (!matchesPlayDateFilter(play.date, dateFilter)) continue;

      // 5. Text / Hangul Chosung search with prefix priority scoring
      if (trimmedSearch) {
        const gameScore = getGameSearchScore(
          { titleKr: play.gameTitleKr || '', titleEn: play.gameTitleEn || '' },
          trimmedSearch
        );
        const locScore = play.locationName
          ? getTextSearchScore(play.locationName, trimmedSearch)
          : 0;
        let playerScore = 0;
        for (const ps of play.playerScores) {
          const pName = ps.name || playerMap.get(ps.playerId) || '';
          if (pName) {
            const s = getTextSearchScore(pName, trimmedSearch);
            if (s > playerScore) playerScore = s;
          }
        }
        const notesScore =
          play.notes && getTextSearchScore(play.notes, trimmedSearch) > 0 ? 25 : 0;

        const bestScore = Math.max(gameScore, locScore, playerScore, notesScore);
        if (bestScore === 0) continue;
        matched.push({ play, score: bestScore });
      } else {
        matched.push({ play, score: 0 });
      }
    }

    // When searchQuery is active, prioritize prefix/chosung-start matches first,
    // preserving reverse chronological order within the same priority tier
    if (trimmedSearch) {
      matched.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return (b.play.date || '').localeCompare(a.play.date || '');
      });
    }

    return matched.map((item) => item.play);
  }, [
    plays,
    selectedGameId,
    selectedPlayerId,
    selectedLocationId,
    locationNameById,
    dateFilter,
    searchQuery,
    playerMap,
  ]);

  const dateFilterActive = isDateFilterActive(dateFilter);
  const activeFilterCount =
    (selectedGameId !== 'all' ? 1 : 0) +
    (selectedPlayerId !== 'all' ? 1 : 0) +
    (selectedLocationId !== 'all' ? 1 : 0) +
    (dateFilterActive ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  const handleResetAllFilters = () => {
    setSelectedGameId('all');
    setSelectedPlayerId('all');
    setSelectedLocationId('all');
    setDateFilter(INITIAL_DATE_FILTER);
    setSearchQuery('');
  };

  const totalFilteredMinutes = filteredPlays.reduce((acc, p) => acc + (p.durationMinutes || 0), 0);
  const totalFilteredHours = Math.round(totalFilteredMinutes / 60);
  const uniqueGamesCount = new Set(filteredPlays.map(p => p.gameId)).size;

  return (
    <div className="flex-1 flex flex-col">
      <Header
        title="플레이 기록"
        subtitle="보드게임 세션 기록, 점수표, 승패 통계 관리"
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="게임명, 초성(ㄱ, ㅌㅍㅁ), 영문(A), 플레이어, 장소 검색..."
        onOpenLogPlay={() => handleOpenLogPlay()}
      />

      <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto w-full">
        
        {/* User View Selector - for all users */}
        <UserViewSelector
          selectedUserId={selectedUserId}
          onSelectUser={handleSelectUser}
          pageType="plays"
          totalItemsCount={plays.length}
        />

        {/* Filters Bar */}
        <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
              <span>상세 필터</span>
              {activeFilterCount > 0 && (
                <span className="px-1.5 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 text-[10px] font-bold">
                  {activeFilterCount}개 적용중
                </span>
              )}
            </span>
            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={handleResetAllFilters}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                필터 초기화
              </button>
            )}
          </div>

          {/* Mobile Quick Search (since Header search is hidden on xs screens) */}
          <div className="sm:hidden relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="게임명, 초성(ㄱ, ㅌㅍㅁ), 영문(A) 검색..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-8 pr-8 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="검색어 지우기"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Searchable Entity Filters (Game / Player / Location) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <SearchableFilterSelect
              label="게임별 필터"
              icon={<Dices className="w-3 h-3 text-indigo-400" />}
              value={selectedGameId}
              onChange={setSelectedGameId}
              options={gameOptions}
              allLabel={`전체 게임 (${gameOptions.length}종)`}
              searchPlaceholder="게임명, 초성(ㄱ, ㅌㅍㅁ), 영문(A)..."
            />

            <SearchableFilterSelect
              label="플레이어별 필터"
              icon={<Users className="w-3 h-3 text-indigo-400" />}
              value={selectedPlayerId}
              onChange={setSelectedPlayerId}
              options={playerOptions}
              allLabel={`전체 플레이어 (${playerOptions.length}명)`}
              searchPlaceholder="플레이어명, 초성(ㄱ, ㅂ) 검색..."
            />

            <SearchableFilterSelect
              label="장소별 필터"
              icon={<MapPin className="w-3 h-3 text-indigo-400" />}
              value={selectedLocationId}
              onChange={setSelectedLocationId}
              options={locationOptions}
              allLabel={`전체 장소 (${locationOptions.length}곳)`}
              searchPlaceholder="장소명, 초성(ㄱ, ㅇ) 검색..."
            />
          </div>

          {/* Play Date Filter */}
          <PlayDateFilter
            plays={plays}
            value={dateFilter}
            onChange={setDateFilter}
          />
        </div>

        {/* Results Summary Bar */}
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <div>
            조회된 세션: <strong className="text-white font-bold">{filteredPlays.length}</strong>개 (총 <strong>{totalFilteredHours}시간</strong> / <strong>{uniqueGamesCount}종</strong>의 게임)
          </div>
          <button
            onClick={() => handleOpenLogPlay()}
            className="sm:hidden px-3 py-1 bg-indigo-600 text-white rounded-lg font-bold flex items-center gap-1"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>새 기록</span>
          </button>
        </div>

        {/* Plays Cards Grid */}
        {filteredPlays.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPlays.map((play) => (
              <PlayCard
                key={play.id}
                play={play}
                players={players}
                game={games.find(g => g.id === play.gameId)}
                onEdit={isViewingOwn ? handleEditPlay : undefined}
                onDelete={isViewingOwn ? handleDeletePlay : undefined}
                onClone={isViewingOwn ? handleClonePlay : undefined}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
            <p className="text-base font-bold text-slate-300">조건에 일치하는 플레이 기록이 없습니다.</p>
            <p className="text-xs text-slate-500">필터 조건을 변경하거나 새 플레이를 기록해 보세요.</p>
            <button
              onClick={() => handleOpenLogPlay()}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow transition-colors"
            >
              새 플레이 기록하기
            </button>
          </div>
        )}

      </div>

      {/* Modals */}
      <LogPlayModal
        isOpen={isLogPlayOpen}
        onClose={() => {
          setIsLogPlayOpen(false);
          setEditingPlay(undefined);
          setTargetGameId(undefined);
        }}
        initialGameId={targetGameId}
        editPlay={editingPlay}
      />
    </div>
  );
}
