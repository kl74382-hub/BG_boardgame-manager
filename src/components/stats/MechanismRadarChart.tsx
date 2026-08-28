'use client';

import React from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { Game, Play } from '@/types';
import { calculateMechanismsAndCategories } from '@/lib/stats-calculator';
import { PieChart, Sparkles } from 'lucide-react';

interface MechanismRadarChartProps {
  games: Game[];
  plays: Play[];
}

export const MechanismRadarChart: React.FC<MechanismRadarChartProps> = ({ games, plays }) => {
  const { topMechanics, topCategories } = calculateMechanismsAndCategories(games, plays);

  const radarData = topMechanics.map(m => ({
    subject: m.name,
    plays: m.count,
    fullMark: Math.max(...topMechanics.map(t => t.count), 5),
  }));

  return (
    <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
          <PieChart className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-white">내가 가장 선호하는 게임 메커니즘 & 테마</h4>
          <p className="text-xs text-slate-400">플레이한 게임들의 주요 시스템(일꾼놓기, 덱빌딩 등) 분포</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        
        {/* 1. Radar Chart */}
        <div className="h-64 w-full flex items-center justify-center">
          {radarData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} stroke="#475569" />
                <Radar
                  name="플레이 횟수"
                  dataKey="plays"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-xs text-slate-500">메커니즘 데이터가 충분하지 않습니다.</p>
          )}
        </div>

        {/* 2. Top Category Bars */}
        <div className="space-y-3">
          <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            인기 테마 & 카테고리 TOP
          </h5>
          <div className="space-y-2">
            {topCategories.map((c, idx) => (
              <div key={c.name} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-200">
                    <span className="text-indigo-400 font-bold mr-1.5">#{idx + 1}</span>
                    {c.name}
                  </span>
                  <span className="text-slate-400">{c.count}회 플레이</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full"
                    style={{
                      width: `${Math.min(100, (c.count / (topCategories[0]?.count || 1)) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
