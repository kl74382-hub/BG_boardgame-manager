'use client';

import React from 'react';
import { Coins, TrendingDown, AlertCircle, Sparkles } from 'lucide-react';
import { Game, Play } from '@/types';
import { calculateGameStatsMap } from '@/lib/stats-calculator';

interface CostPerPlayLeaderboardProps {
  games: Game[];
  plays: Play[];
}

export const CostPerPlayLeaderboard: React.FC<CostPerPlayLeaderboardProps> = ({ games, plays }) => {
  const gameStats = calculateGameStatsMap(games, plays);

  // Filter games that have purchase price recorded
  const gamesWithPrice = Array.from(gameStats.values())
    .filter(g => g.purchasePrice && g.purchasePrice > 0);

  // Top Value (Lowest cost per play)
  const bestValueGames = [...gamesWithPrice]
    .filter(g => g.playCount > 0)
    .sort((a, b) => (a.costPerPlay || 0) - (b.costPerPlay || 0))
    .slice(0, 5);

  // High cost per play / Underplayed
  const highCostGames = [...gamesWithPrice]
    .sort((a, b) => (b.costPerPlay || 0) - (a.costPerPlay || 0))
    .slice(0, 5);

  return (
    <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
          <Coins className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-white">플레이당 비용 분석 (Cost Per Play / 가성비)</h4>
          <p className="text-xs text-slate-400">구매가 대비 플레이 횟수 기반 가성비 랭킹 (구매가 / 플레이수)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* 1. Best Value Games (가장 뽕 뽑은 게임 TOP) */}
        <div className="p-4 rounded-xl bg-slate-800/60 border border-emerald-500/30 space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
            <Sparkles className="w-4 h-4" />
            <span>최고의 가성비 게임 (가장 뽕 뽑음!)</span>
          </div>

          <div className="space-y-2">
            {bestValueGames.map((g, idx) => (
              <div key={g.gameId} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-emerald-400 w-3.5">#{idx + 1}</span>
                  <span className="font-semibold text-white truncate max-w-[120px]">{g.gameTitleKr}</span>
                  <span className="text-[10px] text-slate-400">({g.playCount}회)</span>
                </div>
                <div className="text-right font-mono">
                  <span className="text-emerald-300 font-bold">{g.costPerPlay?.toLocaleString()}원</span>
                  <span className="text-[10px] text-slate-400 block">{g.purchasePrice?.toLocaleString()}원 구매</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Need More Plays (더 돌려야 할 게임) */}
        <div className="p-4 rounded-xl bg-slate-800/60 border border-amber-500/30 space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
            <AlertCircle className="w-4 h-4" />
            <span>더 많이 플레이해야 할 게임 (회당 비용 높음)</span>
          </div>

          <div className="space-y-2">
            {highCostGames.map((g, idx) => (
              <div key={g.gameId} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-400 w-3.5">#{idx + 1}</span>
                  <span className="font-semibold text-white truncate max-w-[120px]">{g.gameTitleKr}</span>
                  <span className="text-[10px] text-slate-400">({g.playCount}회)</span>
                </div>
                <div className="text-right font-mono">
                  <span className="text-amber-300 font-bold">{g.costPerPlay?.toLocaleString()}원</span>
                  <span className="text-[10px] text-slate-400 block">{g.purchasePrice?.toLocaleString()}원 구매</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
