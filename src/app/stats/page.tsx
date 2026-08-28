'use client';

import React, { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { 
  BarChart3, 
  Target, 
  Swords, 
  Coins, 
  Flame, 
  Scale, 
  PieChart,
  Calendar,
  Award
} from 'lucide-react';
import { db } from '@/lib/db';
import { Header } from '@/components/layout/Header';
import { OverviewStats } from '@/components/stats/OverviewStats';
import { ActivityHeatmap } from '@/components/stats/ActivityHeatmap';
import { ChallengeTracker } from '@/components/stats/ChallengeTracker';
import { PlayerHeadToHead } from '@/components/stats/PlayerHeadToHead';
import { CostPerPlayLeaderboard } from '@/components/stats/CostPerPlayLeaderboard';
import { FirstPlayerAdvantageChart } from '@/components/stats/FirstPlayerAdvantageChart';
import { MechanismRadarChart } from '@/components/stats/MechanismRadarChart';

export default function StatsPage() {
  const games = useLiveQuery(() => db.games.toArray()) || [];
  const plays = useLiveQuery(() => db.plays.toArray()) || [];
  const players = useLiveQuery(() => db.players.toArray()) || [];
  const challenges = useLiveQuery(() => db.challenges.toArray()) || [];

  const mainChallenge = challenges[0];

  return (
    <div className="flex-1 flex flex-col">
      <Header
        title="심층 통계 & 인사이트"
        subtitle="H-Index, 365일 잔디, 승률, 가성비, 선플레이어 유리도 심층 분석"
      />

      <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto w-full">
        
        {/* 1. Overview KPIs */}
        <section className="space-y-3">
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Award className="w-4 h-4 text-indigo-400" />
            <span>핵심 지표 요약</span>
          </h3>
          <OverviewStats games={games} plays={plays} players={players} />
        </section>

        {/* 2. 365 Days Activity Grass Heatmap */}
        <section className="space-y-3">
          <ActivityHeatmap plays={plays} />
        </section>

        {/* 3. Challenge Progress */}
        {mainChallenge && (
          <section className="space-y-3">
            <ChallengeTracker challenge={mainChallenge} games={games} plays={plays} />
          </section>
        )}

        {/* 4. Player Head-to-Head & Leaderboard */}
        <section className="space-y-3">
          <PlayerHeadToHead players={players} plays={plays} />
        </section>

        {/* 5. Cost Per Play Analysis */}
        <section className="space-y-3">
          <CostPerPlayLeaderboard games={games} plays={plays} />
        </section>

        {/* 6. First Player Advantage & Mechanisms Radar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FirstPlayerAdvantageChart plays={plays} />
          <MechanismRadarChart games={games} plays={plays} />
        </div>

      </div>
    </div>
  );
}
