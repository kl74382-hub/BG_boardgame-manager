'use client';

import React from 'react';
import { Trophy, CheckCircle2, Target, Plus, Flame } from 'lucide-react';
import { Challenge, Game, Play } from '@/types';
import { calculateGameStatsMap } from '@/lib/stats-calculator';

interface ChallengeTrackerProps {
  challenge: Challenge;
  games: Game[];
  plays: Play[];
}

export const ChallengeTracker: React.FC<ChallengeTrackerProps> = ({
  challenge,
  games,
  plays,
}) => {
  const gameStats = calculateGameStatsMap(games, plays);
  const targetPlays = challenge.targetPlaysPerGame || 10;

  // Selected games in challenge
  const challengeGames = challenge.gameIds.map(id => {
    const game = games.find(g => g.id === id);
    const stats = gameStats.get(id);
    const playCount = stats?.playCount || 0;
    const progress = Math.min(100, Math.round((playCount / targetPlays) * 100));
    const isCompleted = playCount >= targetPlays;

    return {
      id,
      titleKr: game?.titleKr || '알 수 없는 게임',
      titleEn: game?.titleEn || 'Unknown',
      thumbnail: game?.thumbnail || game?.image,
      playCount,
      progress,
      isCompleted,
    };
  });

  const totalPossiblePlays = challenge.gameIds.length * targetPlays;
  const currentTotalPlays = challengeGames.reduce((acc, g) => acc + Math.min(targetPlays, g.playCount), 0);
  const overallProgress = totalPossiblePlays > 0 ? Math.round((currentTotalPlays / totalPossiblePlays) * 100) : 0;
  const completedGamesCount = challengeGames.filter(g => g.isCompleted).length;

  return (
    <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
      {/* Header & Overall Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-base text-white flex items-center gap-2">
              {challenge.title}
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30">
                {challenge.type}
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              {challengeGames.length}개 게임 각 {targetPlays}회 플레이 도전
            </p>
          </div>
        </div>

        {/* Big Overall Metric */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs text-slate-400 font-medium">전체 달성률</span>
            <div className="text-lg font-black text-purple-300">{overallProgress}% ({completedGamesCount}/{challengeGames.length}개 완료)</div>
          </div>
        </div>
      </div>

      {/* Main Progress Bar */}
      <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-400 transition-all duration-500 rounded-full"
          style={{ width: `${overallProgress}%` }}
        />
      </div>

      {/* Grid of Games in Challenge */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 pt-2">
        {challengeGames.map((g) => (
          <div
            key={g.id}
            className={`p-3 rounded-xl border transition-all flex flex-col justify-between ${
              g.isCompleted
                ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                : 'bg-slate-800/60 border-slate-700/60 text-slate-300'
            }`}
          >
            <div className="flex items-center gap-2.5 mb-2">
              {g.thumbnail ? (
                <img src={g.thumbnail} alt="" className="w-8 h-8 rounded-lg object-cover flex-shrink-0" />
              ) : (
                <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-xs flex-shrink-0">🎲</div>
              )}
              <div className="min-w-0 flex-1">
                <h5 className="text-xs font-bold truncate text-white leading-tight">{g.titleKr}</h5>
                <span className="text-[10px] text-slate-400 block truncate">{g.titleEn}</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold">{g.playCount} / {targetPlays}회</span>
                {g.isCompleted ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3" /> 달성
                  </span>
                ) : (
                  <span className="text-purple-400 font-semibold">{g.progress}%</span>
                )}
              </div>
              <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    g.isCompleted ? 'bg-emerald-400' : 'bg-purple-500'
                  }`}
                  style={{ width: `${g.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
