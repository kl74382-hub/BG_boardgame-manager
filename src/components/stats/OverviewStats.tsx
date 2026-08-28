'use client';

import React from 'react';
import { 
  Dices, 
  Clock, 
  Library, 
  Trophy, 
  Flame, 
  TrendingUp, 
  Award,
  Crown
} from 'lucide-react';
import { Game, Play, Player } from '@/types';
import { calculateHIndex, calculateGameStatsMap } from '@/lib/stats-calculator';

interface OverviewStatsProps {
  games: Game[];
  plays: Play[];
  players: Player[];
  currentUserId?: string;
}

export const OverviewStats: React.FC<OverviewStatsProps> = ({
  games,
  plays,
  players,
  currentUserId = 'player-me',
}) => {
  const totalPlays = plays.length;
  const totalMinutes = plays.reduce((acc, p) => acc + (p.durationMinutes || 0), 0);
  const totalHours = Math.round(totalMinutes / 60);

  const ownedGamesCount = games.filter(g => g.status === 'owned').length;
  
  // User win rate
  let userPlaysCount = 0;
  let userWinsCount = 0;
  plays.forEach(play => {
    const ps = play.playerScores.find(p => p.playerId === currentUserId);
    if (ps) {
      userPlaysCount += 1;
      if (ps.winner || (play.isCoop && play.coopWon)) {
        userWinsCount += 1;
      }
    }
  });
  const userWinRate = userPlaysCount > 0 ? Math.round((userWinsCount / userPlaysCount) * 100) : 0;

  // H-Index Calculation
  const gameStats = calculateGameStatsMap(games, plays, currentUserId);
  const playCounts = Array.from(gameStats.values()).map(s => s.playCount);
  const hIndex = calculateHIndex(playCounts);

  // Most played game
  let mostPlayedGameTitle = '-';
  let mostPlayedCount = 0;
  gameStats.forEach((stat) => {
    if (stat.playCount > mostPlayedCount) {
      mostPlayedCount = stat.playCount;
      mostPlayedGameTitle = stat.gameTitleKr;
    }
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {/* 1. Total Plays */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-500/30 shadow-lg">
        <div className="flex items-center justify-between text-indigo-400 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider">총 플레이</span>
          <Dices className="w-4 h-4" />
        </div>
        <div className="text-2xl font-black text-white">{totalPlays}</div>
        <p className="text-[11px] text-slate-400 mt-1">총 세션 기록</p>
      </div>

      {/* 2. Total Playtime */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-950/60 to-slate-900 border border-sky-500/30 shadow-lg">
        <div className="flex items-center justify-between text-sky-400 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider">총 플레이 시간</span>
          <Clock className="w-4 h-4" />
        </div>
        <div className="text-2xl font-black text-white">{totalHours}<span className="text-sm font-normal text-slate-400 ml-1">시간</span></div>
        <p className="text-[11px] text-slate-400 mt-1">{totalMinutes.toLocaleString()}분 플레이</p>
      </div>

      {/* 3. Owned Games */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/30 shadow-lg">
        <div className="flex items-center justify-between text-emerald-400 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider">보유 게임</span>
          <Library className="w-4 h-4" />
        </div>
        <div className="text-2xl font-black text-white">{ownedGamesCount}<span className="text-sm font-normal text-slate-400 ml-1">개</span></div>
        <p className="text-[11px] text-slate-400 mt-1">전체 등록: {games.length}개</p>
      </div>

      {/* 4. Win Rate */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/60 to-slate-900 border border-amber-500/30 shadow-lg">
        <div className="flex items-center justify-between text-amber-400 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider">나의 승률</span>
          <Trophy className="w-4 h-4" />
        </div>
        <div className="text-2xl font-black text-amber-300">{userWinRate}%</div>
        <p className="text-[11px] text-slate-400 mt-1">{userPlaysCount}전 {userWinsCount}승</p>
      </div>

      {/* 5. H-Index */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-950/60 to-slate-900 border border-purple-500/30 shadow-lg">
        <div className="flex items-center justify-between text-purple-400 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider">H-Index</span>
          <Award className="w-4 h-4" />
        </div>
        <div className="text-2xl font-black text-purple-300">H - {hIndex}</div>
        <p className="text-[11px] text-slate-400 mt-1">{hIndex}개 게임을 {hIndex}회 이상 플레이</p>
      </div>

      {/* 6. Most Played Game */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-950/60 to-slate-900 border border-rose-500/30 shadow-lg">
        <div className="flex items-center justify-between text-rose-400 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider">최애 게임</span>
          <Crown className="w-4 h-4" />
        </div>
        <div className="text-base font-black text-white truncate leading-snug">{mostPlayedGameTitle}</div>
        <p className="text-[11px] text-slate-400 mt-1">총 {mostPlayedCount}회 플레이</p>
      </div>
    </div>
  );
};
