'use client';

import React, { useState } from 'react';
import { ShieldCheck, ShoppingBag, Copy, Check } from 'lucide-react';
import { Game } from '@/types';

interface SleeveShoppingCalculatorProps {
  games: Game[];
}

export const SleeveShoppingCalculator: React.FC<SleeveShoppingCalculatorProps> = ({ games }) => {
  const [copied, setCopied] = useState(false);

  // Group sleeves by size for games that don't have sleeves equipped
  const neededSleevesMap = new Map<string, { totalCount: number; gamesList: string[] }>();

  games.forEach(g => {
    if (g.status === 'owned' && g.sleeves) {
      g.sleeves.forEach(slv => {
        if (!slv.hasSleeves) {
          const current = neededSleevesMap.get(slv.size) || { totalCount: 0, gamesList: [] };
          current.totalCount += slv.count;
          if (!current.gamesList.includes(g.titleKr)) {
            current.gamesList.push(g.titleKr);
          }
          neededSleevesMap.set(slv.size, current);
        }
      });
    }
  });

  const sleeveItems = Array.from(neededSleevesMap.entries()).map(([size, val]) => ({
    size,
    totalCount: val.totalCount,
    packsNeeded: Math.ceil(val.totalCount / 100), // 100 per pack standard
    gamesList: val.gamesList,
  }));

  const handleCopyShoppingList = () => {
    if (sleeveItems.length === 0) return;
    const text = sleeveItems
      .map(item => `• [${item.size}] ${item.totalCount}장 (약 ${item.packsNeeded}팩) - 대상: ${item.gamesList.join(', ')}`)
      .join('\n');
    
    navigator.clipboard.writeText(`[보드게임 슬리브 쇼핑 리스트]\n${text}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">슬리브(프로텍터) 쇼핑 가이드 & 필요 수량 계산기</h4>
            <p className="text-xs text-slate-400">보유 게임 중 미착용 카드 슬리브의 규격별 총 매수 및 구매 팩수 자동 계산</p>
          </div>
        </div>

        {sleeveItems.length > 0 && (
          <button
            onClick={handleCopyShoppingList}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? '복사 완료!' : '쇼핑 목록 복사'}</span>
          </button>
        )}
      </div>

      {sleeveItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sleeveItems.map((item) => (
            <div key={item.size} className="p-4 rounded-xl bg-slate-800/60 border border-sky-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-sm text-white">{item.size}</span>
                <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-xs font-bold">
                  {item.packsNeeded}팩 권장
                </span>
              </div>
              <div className="text-xs text-slate-300 font-bold">
                필요 수량: <strong className="text-sky-400 text-sm">{item.totalCount}</strong>장
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                대상: {item.gamesList.join(', ')}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center bg-slate-950/40 rounded-xl border border-slate-800 space-y-1">
          <p className="text-sm font-bold text-slate-300">🎉 현재 모든 보유 게임의 슬리브가 착용 완료되었습니다!</p>
          <p className="text-xs text-slate-500">새 게임을 추가하거나 슬리브 상태를 변경하면 자동으로 쇼핑 목록이 갱신됩니다.</p>
        </div>
      )}
    </div>
  );
};
