'use client';

import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Crown, RotateCcw, Users, Play } from 'lucide-react';
import { Player } from '@/types';

interface TouchPoint {
  id: number;
  x: number;
  y: number;
  color: string;
}

const COLORS = [
  '#ef4444', '#3b82f6', '#10b981', '#f59e0b', 
  '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'
];

interface StartPlayerChooserProps {
  players?: Player[];
}

export const StartPlayerChooser: React.FC<StartPlayerChooserProps> = ({ players = [] }) => {
  const [mode, setMode] = useState<'touch' | 'list'>('touch');
  const [touches, setTouches] = useState<TouchPoint[]>([]);
  const [winnerTouchId, setWinnerTouchId] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<any>(null);

  // List mode state
  const [selectedPlayerNames, setSelectedPlayerNames] = useState<string[]>(
    players.map(p => p.name)
  );
  const [listWinner, setListWinner] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  // Handle Touch Screen interactions (Chwazi-style)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (winnerTouchId !== null) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const newTouches: TouchPoint[] = [];
    for (let i = 0; i < e.touches.length; i++) {
      const t = e.touches[i];
      newTouches.push({
        id: t.identifier,
        x: t.clientX - rect.left,
        y: t.clientY - rect.top,
        color: COLORS[i % COLORS.length],
      });
    }
    setTouches(newTouches);

    // If at least 2 fingers, start 3s countdown
    if (newTouches.length >= 2) {
      if (timerRef.current) clearTimeout(timerRef.current);
      setCountdown(3);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (winnerTouchId !== null) return;
    if (e.touches.length < 2) {
      setCountdown(null);
      if (timerRef.current) clearTimeout(timerRef.current);
    }

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const activeTouches: TouchPoint[] = [];
    for (let i = 0; i < e.touches.length; i++) {
      const t = e.touches[i];
      activeTouches.push({
        id: t.identifier,
        x: t.clientX - rect.left,
        y: t.clientY - rect.top,
        color: COLORS[i % COLORS.length],
      });
    }
    setTouches(activeTouches);
  };

  // Countdown timer effect
  useEffect(() => {
    if (countdown === null) return;

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 800);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && touches.length >= 2) {
      // Pick random winner finger!
      const randIdx = Math.floor(Math.random() * touches.length);
      const chosen = touches[randIdx];
      setWinnerTouchId(chosen.id);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: {
            x: chosen.x / (containerRef.current?.clientWidth || window.innerWidth),
            y: chosen.y / (containerRef.current?.clientHeight || window.innerHeight),
          },
        });
      } catch (e) {}
    }
  }, [countdown, touches]);

  const resetTouch = () => {
    setWinnerTouchId(null);
    setTouches([]);
    setCountdown(null);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  // List mode spin picker
  const handleSpinList = () => {
    if (selectedPlayerNames.length < 2 || isSpinning) return;
    setIsSpinning(true);
    setListWinner(null);

    let counter = 0;
    const interval = setInterval(() => {
      const randomName = selectedPlayerNames[Math.floor(Math.random() * selectedPlayerNames.length)];
      setListWinner(randomName);
      counter++;
      if (counter > 25) {
        clearInterval(interval);
        setIsSpinning(false);
        try {
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        } catch (e) {}
      }
    }, 80);
  };

  return (
    <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
      {/* Header & Mode Switch */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Crown className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">시작 플레이어 뽑기 (선뽑기)</h4>
            <p className="text-xs text-slate-400">화면에 손가락을 대거나 룰렛으로 선 플레이어 선정</p>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl">
          <button
            onClick={() => { setMode('touch'); resetTouch(); }}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
              mode === 'touch' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            👆 멀티터치 방식
          </button>
          <button
            onClick={() => setMode('list')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
              mode === 'list' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            📋 멤버 룰렛 방식
          </button>
        </div>
      </div>

      {mode === 'touch' ? (
        /* Multi-touch Screen Area */
        <div className="space-y-2">
          <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            className="w-full h-72 bg-slate-950 rounded-2xl border-2 border-dashed border-indigo-500/30 relative flex flex-col items-center justify-center overflow-hidden cursor-pointer select-none touch-none"
          >
            {/* Background Hint / Countdown */}
            {countdown !== null && countdown > 0 && (
              <div className="absolute text-7xl font-black text-amber-400 animate-ping">
                {countdown}
              </div>
            )}

            {touches.length === 0 && (
              <div className="text-center p-4 pointer-events-none space-y-2">
                <span className="text-4xl block animate-bounce">👆</span>
                <p className="text-sm font-bold text-slate-300">화면에 각자의 손가락을 올려놓으세요!</p>
                <p className="text-xs text-slate-500">2명 이상 손가락을 대면 카운트다운 후 선 플레이어가 지목됩니다.</p>
              </div>
            )}

            {/* Render Touching Circles */}
            {touches.map((t) => {
              const isWinner = winnerTouchId === t.id;
              return (
                <div
                  key={t.id}
                  style={{
                    left: `${t.x - 36}px`,
                    top: `${t.y - 36}px`,
                    backgroundColor: t.color,
                  }}
                  className={`absolute w-20 h-20 rounded-full flex items-center justify-center text-white font-black text-xl shadow-2xl transition-transform ${
                    isWinner
                      ? 'scale-125 ring-8 ring-amber-400 z-30 animate-pulse'
                      : winnerTouchId !== null
                      ? 'opacity-20 scale-75'
                      : 'animate-pulse'
                  }`}
                >
                  {isWinner ? '👑 선!' : '🎲'}
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>감지된 손가락: <strong>{touches.length}개</strong></span>
            {winnerTouchId !== null && (
              <button
                onClick={resetTouch}
                className="px-3 py-1 bg-indigo-600 text-white rounded-lg font-bold flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>다시 뽑기</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Member List Roulette Mode */
        <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-bold">참여 멤버 선택</span>
            <span className="text-xs text-indigo-400">{selectedPlayerNames.length}명 참여 중</span>
          </div>

          {/* Member tags */}
          <div className="flex flex-wrap gap-2">
            {players.map((p) => {
              const isSelected = selectedPlayerNames.includes(p.name);
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedPlayerNames(selectedPlayerNames.filter(n => n !== p.name));
                    } else {
                      setSelectedPlayerNames([...selectedPlayerNames, p.name]);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  {p.avatar} {p.name}
                </button>
              );
            })}
          </div>

          {/* Winner Display */}
          <div className="h-28 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-center p-4">
            {listWinner ? (
              <div className="space-y-1 animate-in zoom-in-95">
                <span className="text-xs text-amber-400 font-bold flex items-center justify-center gap-1">
                  <Crown className="w-4 h-4" /> 시작 플레이어 당첨!
                </span>
                <span className="text-2xl font-black text-white block">{listWinner}</span>
              </div>
            ) : (
              <p className="text-xs text-slate-500">아래 버튼을 눌러 선 플레이어를 추첨하세요.</p>
            )}
          </div>

          <button
            onClick={handleSpinList}
            disabled={selectedPlayerNames.length < 2 || isSpinning}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 disabled:opacity-50 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isSpinning ? '추첨 중...' : '선 플레이어 룰렛 돌리기!'}</span>
          </button>
        </div>
      )}
    </div>
  );
};
