'use client';

import React, { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { 
  Plus, 
  Dices, 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Trophy,
  SlidersHorizontal
} from 'lucide-react';
import { db } from '@/lib/db';
import { Header } from '@/components/layout/Header';
import { PlayCard } from '@/components/plays/PlayCard';
import { LogPlayModal } from '@/components/plays/LogPlayModal';
import { Play, Game } from '@/types';
import { matchGameSearch } from '@/lib/hangul-search';

export default function PlaysPage() {
  const games = useLiveQuery(() => db.games.toArray()) || [];
  const plays = useLiveQuery(() => db.plays.orderBy('date').reverse().toArray()) || [];
  const players = useLiveQuery(() => db.players.toArray()) || [];
  const locations = useLiveQuery(() => db.locations.toArray()) || [];

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlayerId, setSelectedPlayerId] = useState<string>('all');
  const [selectedLocationId, setSelectedLocationId] = useState<string>('all');
  const [selectedGameId, setSelectedGameId] = useState<string>('all');

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

  // Filter logic
  const filteredPlays = plays.filter(play => {
    // 1. Game filter
    if (selectedGameId !== 'all' && play.gameId !== selectedGameId) return false;

    // 2. Player filter
    if (selectedPlayerId !== 'all') {
      if (!play.playerScores.some(ps => ps.playerId === selectedPlayerId)) return false;
    }

    // 3. Location filter
    if (selectedLocationId !== 'all' && play.locationId !== selectedLocationId) return false;

    // 4. Text / Hangul search
    if (searchQuery.trim()) {
      const matchGame = matchGameSearch(
        { titleKr: play.gameTitleKr || '', titleEn: play.gameTitleEn || '' },
        searchQuery
      );
      const matchNotes = play.notes && play.notes.toLowerCase().includes(searchQuery.toLowerCase());
      const matchLoc = play.locationName && play.locationName.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchGame && !matchNotes && !matchLoc) return false;
    }

    return true;
  });

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
        searchPlaceholder="게임명, 초성(ㅌㅍㅁ), 장소, 메모 검색..."
        onOpenLogPlay={() => handleOpenLogPlay()}
      />

      <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto w-full">
        
        {/* Filters Bar */}
        <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
              <span>상세 필터</span>
            </span>
            {(selectedGameId !== 'all' || selectedPlayerId !== 'all' || selectedLocationId !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedGameId('all');
                  setSelectedPlayerId('all');
                  setSelectedLocationId('all');
                  setSearchQuery('');
                }}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                필터 초기화
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Game Selector */}
            <div>
              <label className="text-[11px] text-slate-400 font-medium block mb-1">게임별 필터</label>
              <select
                value={selectedGameId}
                onChange={(e) => setSelectedGameId(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              >
                <option value="all">전체 게임 ({games.length}종)</option>
                {games.map(g => (
                  <option key={g.id} value={g.id}>{g.titleKr}</option>
                ))}
              </select>
            </div>

            {/* Player Selector */}
            <div>
              <label className="text-[11px] text-slate-400 font-medium block mb-1">플레이어별 필터</label>
              <select
                value={selectedPlayerId}
                onChange={(e) => setSelectedPlayerId(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              >
                <option value="all">전체 플레이어</option>
                {players.map(p => (
                  <option key={p.id} value={p.id}>{p.avatar} {p.name} {p.isUser ? '(나)' : ''}</option>
                ))}
              </select>
            </div>

            {/* Location Selector */}
            <div>
              <label className="text-[11px] text-slate-400 font-medium block mb-1">장소별 필터</label>
              <select
                value={selectedLocationId}
                onChange={(e) => setSelectedLocationId(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
              >
                <option value="all">전체 장소</option>
                {locations.map(loc => (
                  <option key={loc.id} value={loc.id}>{loc.name}</option>
                ))}
              </select>
            </div>
          </div>
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
                onEdit={handleEditPlay}
                onDelete={handleDeletePlay}
                onClone={handleClonePlay}
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
