'use client';

import React from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { Wrench, Crown, Dices, ShieldCheck } from 'lucide-react';
import { db } from '@/lib/db';
import { Header } from '@/components/layout/Header';
import { StartPlayerChooser } from '@/components/tools/StartPlayerChooser';
import { GamePickerModal } from '@/components/tools/GamePickerModal';
import { SleeveShoppingCalculator } from '@/components/tools/SleeveShoppingCalculator';

export default function ToolsPage() {
  const games = useLiveQuery(() => db.games.toArray()) || [];
  const players = useLiveQuery(() => db.players.toArray()) || [];

  return (
    <div className="flex-1 flex flex-col">
      <Header
        title="보드게임 유틸리티"
        subtitle="시작 플레이어 뽑기, 스마트 게임 추천, 슬리브 쇼핑 가이드"
      />

      <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto w-full">
        
        {/* 1. Start Player Chooser */}
        <section className="space-y-3">
          <StartPlayerChooser players={players} />
        </section>

        {/* 2. Smart Game Picker */}
        <section className="space-y-3">
          <GamePickerModal games={games} />
        </section>

        {/* 3. Sleeve Shopping Calculator */}
        <section className="space-y-3">
          <SleeveShoppingCalculator games={games} />
        </section>

      </div>
    </div>
  );
}
