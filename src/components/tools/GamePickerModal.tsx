'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Dices, Users, Clock, Flame, RotateCcw } from 'lucide-react';
import { Game } from '@/types';
import { GameCard } from '@/components/collection/GameCard';

interface GamePickerModalProps {
  games: Game[];
}

export const GamePickerModal: React.FC<GamePickerModalProps> = ({ games }) => {
  const [playerCount, setPlayerCount] = useState<number>(3);
  const [maxTime, setMaxTime] = useState<number>(90);
  const [weightFilter, setWeightFilter] = useState<'all' | 'light' | 'medium' | 'heavy'>('all');
  const [pickedGame, setPickedGame] = useState<Game | null>(null);
  const [isPicking, setIsPicking] = useState(false);

  // Filter available games
  const eligibleGames = games.filter(g => {
    if (g.status !== 'owned') return false;
    if (g.minPlayers > playerCount || g.maxPlayers < playerCount) return false;
    if (g.maxPlaytime > maxTime) return false;

    if (weightFilter === 'light' && (g.weight || 0) >= 2.5) return false;
    if (weightFilter === 'medium' && ((g.weight || 0) < 2.5 || (g.weight || 0) >= 3.5)) return false;
    if (weightFilter === 'heavy' && (g.weight || 0) < 3.5) return false;

    return true;
  });

  const handlePickRandomGame = () => {
    if (eligibleGames.length === 0 || isPicking) return;
    setIsPicking(true);
    setPickedGame(null);

    let count = 0;
    const interval = setInterval(() => {
      const randGame = eligibleGames[Math.floor(Math.random() * eligibleGames.length)];
      setPickedGame(randGame);
      count++;
      if (count > 20) {
        clearInterval(interval);
        setIsPicking(false);
        try {
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        } catch (e) {}
      }
    }, 90);
  };

  return (
    <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
          <Dices className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-bold text-sm text-white">오늘 뭐 하지? (스마트 게임 추천기)</h4>
          <p className="text-xs text-slate-400">인원수, 플레이 타임, 난이도 조건에 맞는 게임을 내 컬렉션에서 추천</p>
        </div>
      </div>

      {/* Filter Parameters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-950/60 rounded-xl border border-slate-800">
        <div>
          <label className="text-xs text-slate-400 font-bold block mb-1">
            참여 인원 ({playerCount}인)
          </label>
          <input
            type="range"
            min="1"
            max="8"
            value={playerCount}
            onChange={(e) => setPlayerCount(Number(e.target.value))}
            className="w-full accent-indigo-500"
          />
        </div>

        <div>
          <label className="text-xs text-slate-400 font-bold block mb-1">
            최대 허용 시간 ({maxTime}분 이내)
          </label>
          <input
            type="range"
            min="15"
            max="240"
            step="15"
            value={maxTime}
            onChange={(e) => setMaxTime(Number(e.target.value))}
            className="w-full accent-sky-500"
          />
        </div>

        <div>
          <label className="text-xs text-slate-400 font-bold block mb-1">
            난이도 선택
          </label>
          <select
            value={weightFilter}
            onChange={(e) => setWeightFilter(e.target.value as any)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
          >
            <option value="all">전체 난이도 무관</option>
            <option value="light">입문/파티 (Weight 2.5 미만)</option>
            <option value="medium">중급 전략 (Weight 2.5 ~ 3.5)</option>
            <option value="heavy">헤비 전략 (Weight 3.5 이상)</option>
          </select>
        </div>
      </div>

      {/* Matching Count & Action Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-xs text-slate-400">
          조건에 일치하는 보유 게임: <strong className="text-indigo-400">{eligibleGames.length}개</strong>
        </span>
        <button
          onClick={handlePickRandomGame}
          disabled={eligibleGames.length === 0 || isPicking}
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 active:scale-95 transition-all disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4" />
          <span>{isPicking ? '추천 게임 선정 중...' : '오늘의 게임 추천받기!'}</span>
        </button>
      </div>

      {/* Picked Game Card Display */}
      {pickedGame && (
        <div className="p-4 bg-indigo-950/20 border border-indigo-500/40 rounded-2xl space-y-2 animate-in zoom-in-95">
          <span className="text-xs text-amber-400 font-black uppercase tracking-wider flex items-center gap-1">
            🎉 오늘의 추천 게임 결정!
          </span>
          <div className="max-w-xs mx-auto">
            <GameCard game={pickedGame} />
          </div>
        </div>
      )}
    </div>
  );
};
