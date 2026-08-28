'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLiveQuery } from 'dexie-react-hooks';
import { 
  Plus, 
  Dices, 
  Library, 
  BarChart3, 
  Trophy, 
  ChevronRight, 
  Sparkles, 
  ExternalLink,
  Flame,
  Crown
} from 'lucide-react';
import { db } from '@/lib/db';
import { Header } from '@/components/layout/Header';
import { OverviewStats } from '@/components/stats/OverviewStats';
import { PlayCard } from '@/components/plays/PlayCard';
import { GameCard } from '@/components/collection/GameCard';
import { ChallengeTracker } from '@/components/stats/ChallengeTracker';
import { LogPlayModal } from '@/components/plays/LogPlayModal';
import { GameDetailModal } from '@/components/collection/GameDetailModal';
import { Game, Play } from '@/types';
import { calculateGameStatsMap } from '@/lib/stats-calculator';

export default function DashboardPage() {
  const games = useLiveQuery(() => db.games.toArray()) || [];
  const plays = useLiveQuery(() => db.plays.orderBy('date').reverse().toArray()) || [];
  const players = useLiveQuery(() => db.players.toArray()) || [];
  const challenges = useLiveQuery(() => db.challenges.toArray()) || [];

  // Modal states
  const [isLogPlayOpen, setIsLogPlayOpen] = useState(false);
  const [selectedGameForPlay, setSelectedGameForPlay] = useState<string | undefined>(undefined);
  const [selectedGameForDetail, setSelectedGameForDetail] = useState<Game | null>(null);
  const [editingPlay, setEditingPlay] = useState<Play | undefined>(undefined);

  const gameStats = calculateGameStatsMap(games, plays);

  const handleOpenLogPlay = (gameId?: string) => {
    setSelectedGameForPlay(gameId);
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
    // Open log modal with same game and players
    setSelectedGameForPlay(play.gameId);
    setEditingPlay(undefined);
    setIsLogPlayOpen(true);
  };

  const handleToggleFavorite = async (gameId: string) => {
    const target = games.find(g => g.id === gameId);
    if (target) {
      await db.games.update(gameId, { favorite: !target.favorite });
    }
  };

  const recentPlays = plays.slice(0, 5);
  const favoriteGames = games.filter(g => g.favorite || g.status === 'owned').slice(0, 6);
  const mainChallenge = challenges[0];

  return (
    <div className="flex-1 flex flex-col">
      <Header
        title="보드게임 대시보드"
        subtitle="BG Stats 벤치마크 • BGG & 보드라이프 통합 관리"
        onOpenLogPlay={() => handleOpenLogPlay()}
      />

      <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto w-full">
        
        {/* 1. Top KPI Summary */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-400">
              📊 보드게임 라이프 요약 통계
            </h3>
            <Link href="/stats" className="text-xs text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1">
              <span>심층 분석 보기</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <OverviewStats games={games} plays={plays} players={players} />
        </section>

        {/* 2. Active Challenge Preview */}
        {mainChallenge && (
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-400">
                🎯 진행 중인 챌린지
              </h3>
              <Link href="/stats" className="text-xs text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1">
                <span>전체 챌린지</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <ChallengeTracker challenge={mainChallenge} games={games} plays={plays} />
          </section>
        )}

        {/* 3. Main Grid: Recent Plays & Favorite Collection */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left 2 Cols: Recent Plays Feed */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  <Dices className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">최근 플레이 기록</h3>
              </div>
              <Link href="/plays" className="text-xs text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1">
                <span>전체 기록 ({plays.length}개)</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {recentPlays.length > 0 ? (
              <div className="space-y-3">
                {recentPlays.map((play) => (
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
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-3">
                <p className="text-sm font-bold text-slate-300">아직 등록된 플레이 기록이 없습니다.</p>
                <button
                  onClick={() => handleOpenLogPlay()}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold"
                >
                  첫 플레이 기록하기
                </button>
              </div>
            )}
          </div>

          {/* Right 1 Col: Quick Collection & Utility Shortcuts */}
          <div className="space-y-6">
            
            {/* Quick Actions Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-indigo-500/30 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>스마트 보드게임 도구</span>
              </h4>
              <div className="space-y-2">
                <Link
                  href="/tools"
                  className="w-full p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-left flex items-center justify-between text-xs font-bold text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-amber-400" />
                    <span>시작 플레이어 뽑기 (선뽑기)</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>

                <Link
                  href="/tools"
                  className="w-full p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-left flex items-center justify-between text-xs font-bold text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Dices className="w-4 h-4 text-sky-400" />
                    <span>오늘 뭐 하지? (게임 추천기)</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>
              </div>
            </div>

            {/* Favorite Games List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-pink-500/20 text-pink-400 border border-pink-500/30">
                    <Library className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">나의 주요 컬렉션</h3>
                </div>
                <Link href="/collection" className="text-xs text-indigo-400 hover:text-indigo-300 font-bold">
                  전체 보기
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {favoriteGames.map((game) => {
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
            </div>

          </div>

        </div>

      </div>

      {/* Modals */}
      <LogPlayModal
        isOpen={isLogPlayOpen}
        onClose={() => {
          setIsLogPlayOpen(false);
          setEditingPlay(undefined);
          setSelectedGameForPlay(undefined);
        }}
        initialGameId={selectedGameForPlay}
        editPlay={editingPlay}
      />

      <GameDetailModal
        game={selectedGameForDetail}
        plays={plays}
        isOpen={selectedGameForDetail !== null}
        onClose={() => setSelectedGameForDetail(null)}
        onOpenLogPlay={(gId) => handleOpenLogPlay(gId)}
      />
    </div>
  );
}
