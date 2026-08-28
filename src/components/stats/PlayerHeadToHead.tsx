'use client';

import React, { useState } from 'react';
import { Swords, Trophy, Users, Shield, Award } from 'lucide-react';
import { Player, Play } from '@/types';
import { calculateAllPlayerStats } from '@/lib/stats-calculator';

interface PlayerHeadToHeadProps {
  players: Player[];
  plays: Play[];
}

export const PlayerHeadToHead: React.FC<PlayerHeadToHeadProps> = ({ players, plays }) => {
  const [player1Id, setPlayer1Id] = useState<string>(players[0]?.id || '');
  const [player2Id, setPlayer2Id] = useState<string>(players[1]?.id || '');

  const p1 = players.find(p => p.id === player1Id);
  const p2 = players.find(p => p.id === player2Id);

  // Calculate shared games stats
  let sharedPlaysCount = 0;
  let p1WinsInShared = 0;
  let p2WinsInShared = 0;
  const sharedGamesMap = new Map<string, { title: string; count: number; p1Wins: number; p2Wins: number }>();

  plays.forEach(play => {
    const ps1 = play.playerScores.find(p => p.playerId === player1Id);
    const ps2 = play.playerScores.find(p => p.playerId === player2Id);

    if (ps1 && ps2) {
      sharedPlaysCount += 1;
      if (ps1.winner) p1WinsInShared += 1;
      if (ps2.winner) p2WinsInShared += 1;

      let gStat = sharedGamesMap.get(play.gameId);
      if (!gStat) {
        gStat = { title: play.gameTitleKr || '게임', count: 0, p1Wins: 0, p2Wins: 0 };
        sharedGamesMap.set(play.gameId, gStat);
      }
      gStat.count += 1;
      if (ps1.winner) gStat.p1Wins += 1;
      if (ps2.winner) gStat.p2Wins += 1;
    }
  });

  const p1WinRate = sharedPlaysCount > 0 ? Math.round((p1WinsInShared / sharedPlaysCount) * 100) : 0;
  const p2WinRate = sharedPlaysCount > 0 ? Math.round((p2WinsInShared / sharedPlaysCount) * 100) : 0;

  // All players ranking table
  const allStats = calculateAllPlayerStats(players, plays);

  return (
    <div className="space-y-6">
      {/* 1. Head-to-Head Comparison Card */}
      <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30">
            <Swords className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">플레이어 1:1 맞대결 전적 분석 (Head-to-Head)</h4>
            <p className="text-xs text-slate-400">두 플레이어 간의 승률 및 대결 히스토리 비교</p>
          </div>
        </div>

        {/* Player Pickers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 bg-slate-800/60 border border-slate-700/60 rounded-xl space-y-1">
            <label className="text-[11px] text-slate-400 font-bold block">플레이어 1</label>
            <select
              value={player1Id}
              onChange={(e) => setPlayer1Id(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
            >
              {players.map(p => (
                <option key={p.id} value={p.id}>{p.avatar} {p.name} {p.isUser ? '(나)' : ''}</option>
              ))}
            </select>
          </div>

          <div className="p-3 bg-slate-800/60 border border-slate-700/60 rounded-xl space-y-1">
            <label className="text-[11px] text-slate-400 font-bold block">플레이어 2</label>
            <select
              value={player2Id}
              onChange={(e) => setPlayer2Id(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
            >
              {players.map(p => (
                <option key={p.id} value={p.id}>{p.avatar} {p.name} {p.isUser ? '(나)' : ''}</option>
              ))}
            </select>
          </div>
        </div>

        {/* VS Metric Visualizer */}
        {p1 && p2 && (
          <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              {/* Player 1 Card */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{p1.avatar || '🎲'}</span>
                <div>
                  <span className="font-extrabold text-sm text-white block">{p1.name}</span>
                  <span className="text-xs text-indigo-400 font-black">{p1WinsInShared}승 ({p1WinRate}%)</span>
                </div>
              </div>

              {/* VS Badge */}
              <div className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-black">
                {sharedPlaysCount}회 맞대결
              </div>

              {/* Player 2 Card */}
              <div className="flex items-center gap-3 text-right flex-row-reverse">
                <span className="text-3xl">{p2.avatar || '🎲'}</span>
                <div>
                  <span className="font-extrabold text-sm text-white block">{p2.name}</span>
                  <span className="text-xs text-sky-400 font-black">{p2WinsInShared}승 ({p2WinRate}%)</span>
                </div>
              </div>
            </div>

            {/* Split Bar */}
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-indigo-500 transition-all duration-500"
                style={{ width: `${sharedPlaysCount > 0 ? (p1WinsInShared / sharedPlaysCount) * 100 : 50}%` }}
              />
              <div
                className="h-full bg-sky-500 transition-all duration-500"
                style={{ width: `${sharedPlaysCount > 0 ? (p2WinsInShared / sharedPlaysCount) * 100 : 50}%` }}
              />
            </div>

            {/* Shared Games Breakdown */}
            {sharedGamesMap.size > 0 && (
              <div className="pt-2 space-y-1.5 border-t border-slate-800">
                <span className="text-[11px] text-slate-400 font-bold uppercase block">게임별 맞대결 승패</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Array.from(sharedGamesMap.entries()).map(([gId, stat]) => (
                    <div key={gId} className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                      <span className="text-slate-300 font-medium truncate max-w-[140px]">{stat.title}</span>
                      <span className="text-slate-400 font-mono">
                        <strong className="text-indigo-400">{stat.p1Wins}승</strong> : <strong className="text-sky-400">{stat.p2Wins}승</strong> ({stat.count}전)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 2. All Players Leaderboard */}
      <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-white">플레이어 랭킹 및 전체 승률</h4>
            <p className="text-xs text-slate-400">모임 멤버별 승률 및 나와의 상대 전적</p>
          </div>
        </div>

        <div className="space-y-2">
          {allStats.map((stat, idx) => (
            <div
              key={stat.player.id}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs"
            >
              <div className="flex items-center gap-3">
                <span className="text-slate-500 font-bold w-4">#{idx + 1}</span>
                <span className="text-lg">{stat.player.avatar || '🎲'}</span>
                <div>
                  <span className="font-bold text-white block">
                    {stat.player.name} {stat.player.isUser ? '(나)' : ''}
                  </span>
                  {stat.player.notes && <span className="text-[10px] text-slate-400">{stat.player.notes}</span>}
                </div>
              </div>

              <div className="flex items-center gap-4 text-right">
                <div>
                  <span className="text-[10px] text-slate-400 block">총 전적</span>
                  <span className="font-bold text-slate-200">{stat.totalPlays}전 {stat.totalWins}승</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">전체 승률</span>
                  <span className="font-black text-amber-400">{stat.winRate}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
