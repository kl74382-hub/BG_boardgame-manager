'use client';

import React, { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { 
  Users, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  X, 
  Crown, 
  Dices,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { db } from '@/lib/db';
import { Player, Play } from '@/types';

const EMOJI_OPTIONS = ['🎲', '🦊', '🐱', '🐻', '🐼', '🦁', '🐯', '🐰', '🐸', '🦄', '🧙‍♂️', '🥷', '🤖', '👑', '⭐'];

export const PlayerManager: React.FC = () => {
  const players = useLiveQuery(() => db.players.toArray()) || [];
  const plays = useLiveQuery(() => db.plays.toArray()) || [];

  const [isAdding, setIsAdding] = useState(false);
  const [newName, setNewName] = useState('');
  const [newAvatar, setNewAvatar] = useState('🎲');
  const [newNotes, setNewNotes] = useState('');

  const [editingPlayerId, setEditingPlayerId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editAvatar, setEditAvatar] = useState('🎲');
  const [editNotes, setEditNotes] = useState('');

  // Add new player
  const handleAddPlayer = async () => {
    if (!newName.trim()) return;

    const newPlayer: Player = {
      id: `player-${Date.now()}`,
      name: newName.trim(),
      isUser: false,
      avatar: newAvatar,
      notes: newNotes.trim() || undefined,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await db.players.add(newPlayer);
    setNewName('');
    setNewNotes('');
    setNewAvatar('🎲');
    setIsAdding(false);
  };

  // Start editing player
  const handleStartEdit = (player: Player) => {
    setEditingPlayerId(player.id);
    setEditName(player.name);
    setEditAvatar(player.avatar || '🎲');
    setEditNotes(player.notes || '');
  };

  // Save edit
  const handleSaveEdit = async () => {
    if (!editingPlayerId || !editName.trim()) return;

    await db.players.update(editingPlayerId, {
      name: editName.trim(),
      avatar: editAvatar,
      notes: editNotes.trim() || undefined,
      updatedAt: new Date().toISOString(),
    });

    setEditingPlayerId(null);
  };

  // Delete player
  const handleDeletePlayer = async (player: Player) => {
    if (player.isUser) {
      alert('메인 계정(나)은 삭제할 수 없습니다.');
      return;
    }

    // Check how many plays this player has participated in
    const participatedPlaysCount = plays.filter(p => 
      p.playerScores.some(ps => ps.playerId === player.id)
    ).length;

    let confirmMsg = `플레이어 '${player.name}'을(를) 정말 삭제하시겠습니까?`;
    if (participatedPlaysCount > 0) {
      confirmMsg += `\n(⚠️ 주의: 이 플레이어가 참여한 ${participatedPlaysCount}개의 과거 플레이 기록에서 해당 플레이어가 제거됩니다)`;
    }

    if (confirm(confirmMsg)) {
      await db.transaction('rw', db.players, db.plays, async () => {
        // 1. Delete player from players table
        await db.players.delete(player.id);

        // 2. Remove player scores from existing plays if needed
        for (const play of plays) {
          if (play.playerScores.some(ps => ps.playerId === player.id)) {
            const updatedScores = play.playerScores.filter(ps => ps.playerId !== player.id);
            await db.plays.update(play.id, { playerScores: updatedScores });
          }
        }
      });
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">플레이어(멤버) 관리</h3>
            <p className="text-xs text-slate-400">함께 플레이하는 멤버 등록, 수정 및 삭제</p>
          </div>
        </div>

        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shadow transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>새 멤버 추가</span>
          </button>
        )}
      </div>

      {/* Add Player Form */}
      {isAdding && (
        <div className="p-4 bg-slate-800/80 border border-indigo-500/40 rounded-xl space-y-3 animate-in fade-in">
          <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">새 플레이어 등록</h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] text-slate-400 block mb-1">이름 *</label>
              <input
                type="text"
                placeholder="예: 민수, 지혜"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-[11px] text-slate-400 block mb-1">아이콘 / 아바타</label>
              <select
                value={newAvatar}
                onChange={(e) => setNewAvatar(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
              >
                {EMOJI_OPTIONS.map(em => (
                  <option key={em} value={em}>{em} 선택</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[11px] text-slate-400 block mb-1">특징 / 비고</label>
              <input
                type="text"
                placeholder="예: 전략 유로게임 선호"
                value={newNotes}
                onChange={(e) => setNewNotes(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-1">
            <button
              onClick={() => setIsAdding(false)}
              className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white"
            >
              취소
            </button>
            <button
              onClick={handleAddPlayer}
              disabled={!newName.trim()}
              className="px-4 py-1.5 rounded-lg bg-indigo-600 text-white font-bold text-xs shadow disabled:opacity-50"
            >
              등록 완료
            </button>
          </div>
        </div>
      )}

      {/* Players List Table */}
      <div className="space-y-2">
        {players.map((player) => {
          const isEditing = editingPlayerId === player.id;
          const playCount = plays.filter(p => p.playerScores.some(ps => ps.playerId === player.id)).length;

          if (isEditing) {
            return (
              <div key={player.id} className="p-3 bg-slate-800 border border-indigo-500 rounded-xl space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white"
                  />
                  <select
                    value={editAvatar}
                    onChange={(e) => setEditAvatar(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white"
                  >
                    {EMOJI_OPTIONS.map(em => (
                      <option key={em} value={em}>{em} 선택</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={editNotes}
                    placeholder="비고"
                    onChange={(e) => setEditNotes(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setEditingPlayerId(null)}
                    className="px-2.5 py-1 rounded text-xs text-slate-400 hover:text-white"
                  >
                    취소
                  </button>
                  <button
                    onClick={handleSaveEdit}
                    className="px-3 py-1 rounded bg-indigo-600 text-white font-bold text-xs"
                  >
                    저장
                  </button>
                </div>
              </div>
            );
          }

          return (
            <div
              key={player.id}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{player.avatar || '🎲'}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">
                      {player.name}
                    </span>
                    {player.isUser && (
                      <span className="px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-400 text-[10px] font-bold border border-indigo-500/30">
                        메인(나)
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                    <span>플레이 참여: <strong>{playCount}회</strong></span>
                    {player.notes && <span>• {player.notes}</span>}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleStartEdit(player)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  title="플레이어 정보 수정"
                >
                  <Edit3 className="w-4 h-4" />
                </button>

                {!player.isUser && (
                  <button
                    onClick={() => handleDeletePlayer(player)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-700 transition-colors"
                    title="플레이어 삭제"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
