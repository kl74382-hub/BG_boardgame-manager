'use client';

import React from 'react';
import { Play } from '@/types';
import { calculateFirstPlayerAdvantage } from '@/lib/stats-calculator';
import { Crown, Sparkles, Scale } from 'lucide-react';

interface FirstPlayerAdvantageChartProps {
  plays: Play[];
}

export const FirstPlayerAdvantageChart: React.FC<FirstPlayerAdvantageChartProps> = ({ plays }) => {
  const stats = calculateFirstPlayerAdvantage(plays);

  return (
    <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30">
          <Scale className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-white">선 플레이어 유리도 분석 (First Player Advantage)</h4>
          <p className="text-xs text-slate-400">경쟁 게임에서 선 플레이어를 잡았을 때의 승률 통계</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
        <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
          <span className="text-[10px] text-slate-400 font-bold block uppercase">경쟁 플레이 표본</span>
          <span className="text-lg font-black text-white">{stats.firstPlayerPlays}회</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-800/60 border border-sky-500/30">
          <span className="text-[10px] text-sky-400 font-bold block uppercase">선 플레이어 승리</span>
          <span className="text-lg font-black text-sky-300">{stats.firstPlayerWins}회 ({stats.firstPlayerWinRate}%)</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-800/60 border border-indigo-500/30">
          <span className="text-[10px] text-indigo-400 font-bold block uppercase">후 순위 플레이어 승리</span>
          <span className="text-lg font-black text-indigo-300">
            {stats.firstPlayerPlays - stats.firstPlayerWins}회 ({stats.nonFirstPlayerWinRate}%)
          </span>
        </div>
      </div>

      {/* Split Bar */}
      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
        <div 
          className="h-full bg-sky-500 transition-all duration-500"
          style={{ width: `${stats.firstPlayerWinRate}%` }}
        />
        <div 
          className="h-full bg-indigo-500 transition-all duration-500"
          style={{ width: `${stats.nonFirstPlayerWinRate}%` }}
        />
      </div>
      <div className="flex justify-between text-[11px] text-slate-400 px-1">
        <span className="text-sky-400 font-semibold">선 플레이어 승률: {stats.firstPlayerWinRate}%</span>
        <span className="text-indigo-400 font-semibold">후 순위 플레이어 승률: {stats.nonFirstPlayerWinRate}%</span>
      </div>
    </div>
  );
};
