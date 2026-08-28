'use client';

import React, { useMemo } from 'react';
import { Play } from '@/types';
import { generateActivityHeatmap } from '@/lib/stats-calculator';
import { Calendar, Flame } from 'lucide-react';

interface ActivityHeatmapProps {
  plays: Play[];
  year?: number;
}

export const ActivityHeatmap: React.FC<ActivityHeatmapProps> = ({
  plays,
  year = new Date().getFullYear(),
}) => {
  const daysData = useMemo(() => generateActivityHeatmap(plays, year), [plays, year]);
  
  const totalDaysWithPlays = daysData.filter(d => d.count > 0).length;
  const totalYearPlays = daysData.reduce((acc, d) => acc + d.count, 0);

  // Group days into 53 weeks (columns) x 7 days (rows)
  const weeks = useMemo(() => {
    const cols: typeof daysData[] = [];
    let currentWeek: typeof daysData = [];

    daysData.forEach((day, index) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || index === daysData.length - 1) {
        cols.push(currentWeek);
        currentWeek = [];
      }
    });

    return cols;
  }, [daysData]);

  // Color mapping based on play count
  const getCellColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-indigo-900/80 border-indigo-700/60';
      case 2: return 'bg-indigo-600 border-indigo-500';
      case 3: return 'bg-indigo-400 border-indigo-300';
      case 4: return 'bg-emerald-400 border-emerald-300 shadow-sm shadow-emerald-400/30';
      default: return 'bg-slate-800/60 border-slate-800';
    }
  };

  return (
    <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">{year}년 보드게임 라이프 잔디 (Activity Heatmap)</h4>
            <p className="text-xs text-slate-400">총 <strong>{totalDaysWithPlays}일</strong> 동안 <strong>{totalYearPlays}회</strong> 플레이</p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <span>적음</span>
          <div className="w-2.5 h-2.5 rounded-sm bg-slate-800/60 border border-slate-800"></div>
          <div className="w-2.5 h-2.5 rounded-sm bg-indigo-900/80 border border-indigo-700/60"></div>
          <div className="w-2.5 h-2.5 rounded-sm bg-indigo-600 border border-indigo-500"></div>
          <div className="w-2.5 h-2.5 rounded-sm bg-indigo-400 border border-indigo-300"></div>
          <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400 border border-emerald-300"></div>
          <span>많음</span>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-1 min-w-[700px]">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1">
              {week.map((day) => (
                <div
                  key={day.date}
                  className={`w-3 h-3 rounded-sm border transition-transform hover:scale-125 cursor-pointer ${getCellColor(day.level)}`}
                  title={`${day.date}: ${day.count}회 플레이`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
