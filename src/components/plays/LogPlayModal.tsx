'use client';

import React, { useState, useEffect } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import confetti from 'canvas-confetti';
import { 
  X, 
  Dices, 
  Clock, 
  MapPin, 
  Users, 
  Trophy, 
  Play, 
  Pause, 
  RotateCcw, 
  Plus, 
  Trash2, 
  Star,
  Search,
  Sparkles,
  Check
} from 'lucide-react';
import { db } from '@/lib/db';
import { Game, Player, Play as PlayModel, PlayerScore } from '@/types';
import { matchGameSearch } from '@/lib/hangul-search';

interface LogPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGameId?: string;
  editPlay?: PlayModel;
}

export const LogPlayModal: React.FC<LogPlayModalProps> = ({
  isOpen,
  onClose,
  initialGameId,
  editPlay,
}) => {
  // Dexie live queries
  const games = useLiveQuery(() => db.games.toArray()) || [];
  const players = useLiveQuery(() => db.players.toArray()) || [];
  const locations = useLiveQuery(() => db.locations.toArray()) || [];

  // Form states
  const [selectedGameId, setSelectedGameId] = useState<string>('');
  const [gameSearch, setGameSearch] = useState('');
  const [date, setDate] = useState<string>(new Date().toISOString().substring(0, 10));
  const [durationMinutes, setDurationMinutes] = useState<number>(45);
  const [locationName, setLocationName] = useState<string>('우리집 (홈)');
  const [isCoop, setIsCoop] = useState<boolean>(false);
  const [coopWon, setCoopWon] = useState<boolean>(true);
  const [isSolo, setIsSolo] = useState<boolean>(false);
  const [rounds, setRounds] = useState<number | undefined>(undefined);
  const [notes, setNotes] = useState<string>('');
  const [rating, setRating] = useState<number>(5);
  const [syncedToBgg, setSyncedToBgg] = useState<boolean>(false);

  // Players in this session
  const [sessionPlayers, setSessionPlayers] = useState<PlayerScore[]>([
    { playerId: 'player-me', startPlayer: true, score: 0, winner: true, newPlayer: false, role: '' },
    { playerId: 'player-2', startPlayer: false, score: 0, winner: false, newPlayer: false, role: '' }
  ]);

  // Live Timer states
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);

  // New Player quick add popup
  const [newPlayerName, setNewPlayerName] = useState('');
  const [showAddPlayer, setShowAddPlayer] = useState(false);

  // Initialize or reset form on open / edit
  useEffect(() => {
    if (isOpen) {
      if (editPlay) {
        setSelectedGameId(editPlay.gameId);
        setDate(editPlay.date);
        setDurationMinutes(editPlay.durationMinutes || 45);
        setLocationName(editPlay.locationName || '우리집 (홈)');
        setIsCoop(Boolean(editPlay.isCoop));
        setCoopWon(Boolean(editPlay.coopWon));
        setIsSolo(Boolean(editPlay.isSolo));
        setRounds(editPlay.rounds);
        setNotes(editPlay.notes || '');
        setRating(editPlay.rating || 5);
        setSyncedToBgg(Boolean(editPlay.syncedToBgg));
        setSessionPlayers(editPlay.playerScores || []);
      } else {
        setSelectedGameId(initialGameId || (games[0]?.id ?? ''));
        setDate(new Date().toISOString().substring(0, 10));
        setDurationMinutes(45);
        setLocationName(locations[0]?.name || '우리집 (홈)');
        setIsCoop(false);
        setCoopWon(true);
        setIsSolo(false);
        setRounds(undefined);
        setNotes('');
        setRating(5);
        setSyncedToBgg(false);

        // Default 2 players
        const me = players.find(p => p.isUser) || players[0];
        const other = players.find(p => !p.isUser) || players[1];
        setSessionPlayers([
          { playerId: me ? me.id : 'player-me', startPlayer: true, score: 0, winner: true, newPlayer: false, role: '' },
          ...(other ? [{ playerId: other.id, startPlayer: false, score: 0, winner: false, newPlayer: false, role: '' }] : [])
        ]);
      }
      setIsTimerRunning(false);
      setTimerSeconds(0);
    }
  }, [isOpen, initialGameId, editPlay]);

  // Timer Tick
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds(prev => {
          const next = prev + 1;
          setDurationMinutes(Math.max(1, Math.round(next / 60)));
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  if (!isOpen) return null;

  // Filtered games for selection
  const filteredGames = games.filter(g => matchGameSearch(g, gameSearch));
  const selectedGame = games.find(g => g.id === selectedGameId);

  // Player scoring helpers
  const handleScoreChange = (index: number, scoreVal: string) => {
    const num = parseFloat(scoreVal);
    const updated = [...sessionPlayers];
    updated[index].score = isNaN(num) ? undefined : num;

    // Recalculate ranks and winners if not coop
    if (!isCoop && updated.some(p => p.score !== undefined)) {
      const validScores = updated
        .map((p, idx) => ({ idx, score: p.score ?? -999999 }))
        .sort((a, b) => b.score - a.score);

      const maxScore = validScores[0].score;
      validScores.forEach((item, rankIdx) => {
        updated[item.idx].rank = rankIdx + 1;
        updated[item.idx].winner = item.score === maxScore && item.score !== -999999;
      });
    }

    setSessionPlayers(updated);
  };

  const toggleWinner = (index: number) => {
    const updated = [...sessionPlayers];
    updated[index].winner = !updated[index].winner;
    setSessionPlayers(updated);
  };

  const toggleStartPlayer = (index: number) => {
    const updated = sessionPlayers.map((p, idx) => ({
      ...p,
      startPlayer: idx === index,
    }));
    setSessionPlayers(updated);
  };

  const addPlayerToSession = (playerId: string) => {
    if (sessionPlayers.some(p => p.playerId === playerId)) return;
    setSessionPlayers([
      ...sessionPlayers,
      { playerId, startPlayer: false, score: 0, winner: false, newPlayer: false, role: '' }
    ]);
  };

  const removePlayerFromSession = (index: number) => {
    if (sessionPlayers.length <= 1) return;
    setSessionPlayers(sessionPlayers.filter((_, idx) => idx !== index));
  };

  const handleQuickCreatePlayer = async () => {
    if (!newPlayerName.trim()) return;
    const newId = `player-${Date.now()}`;
    const newP: Player = {
      id: newId,
      name: newPlayerName.trim(),
      isUser: false,
      avatar: '🎲',
      color: '#0ea5e9',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await db.players.add(newP);
    addPlayerToSession(newId);
    setNewPlayerName('');
    setShowAddPlayer(false);
  };

  const handleSavePlay = async () => {
    if (!selectedGameId || !selectedGame) return;

    // Check location
    let loc = locations.find(l => l.name === locationName);
    if (!loc && locationName.trim()) {
      const newLocId = `loc-${Date.now()}`;
      await db.locations.add({
        id: newLocId,
        name: locationName.trim(),
        createdAt: new Date().toISOString(),
      });
    }

    const playId = editPlay?.id || `play-${Date.now()}`;
    const playData: PlayModel = {
      id: playId,
      gameId: selectedGame.id,
      gameTitleKr: selectedGame.titleKr,
      gameTitleEn: selectedGame.titleEn,
      gameImage: selectedGame.thumbnail || selectedGame.image,
      date,
      durationMinutes: Math.max(1, durationMinutes),
      locationName,
      locationId: loc?.id,
      isCoop,
      coopWon: isCoop ? coopWon : undefined,
      isSolo: sessionPlayers.length === 1,
      rounds,
      playerScores: sessionPlayers,
      notes: notes.trim() || undefined,
      rating,
      syncedToBgg,
      createdAt: editPlay?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (editPlay) {
      await db.plays.put(playData);
    } else {
      await db.plays.add(playData);
      // Trigger celebratory confetti on new play!
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }

    onClose();
  };

  // Format timer seconds into mm:ss
  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Dices className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{editPlay ? '플레이 기록 수정' : '새 플레이 기록'}</h3>
              <p className="text-xs text-slate-400">게임 세션 및 플레이어 점수 입력</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* 1. Game Selection */}
          <div className="space-y-2.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
              게임 선택 *
            </label>
            
            {/* Search filter for games */}
            <div className="relative mb-2">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={gameSearch}
                onChange={(e) => setGameSearch(e.target.value)}
                placeholder="게임명 검색 (초성: ㅌㅍㅁ, ㅅㄷ, ㄷ)..."
                className="w-full bg-slate-800/80 border border-slate-700 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Games Grid / List Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-36 overflow-y-auto p-1 border border-slate-800 rounded-xl bg-slate-950/40">
              {filteredGames.map((game) => {
                const isSelected = game.id === selectedGameId;
                return (
                  <button
                    key={game.id}
                    type="button"
                    onClick={() => setSelectedGameId(game.id)}
                    className={`flex items-center gap-2 p-2 rounded-lg text-left transition-all text-xs ${
                      isSelected
                        ? 'bg-indigo-600/30 border border-indigo-500 text-white font-bold shadow-sm'
                        : 'bg-slate-800/60 border border-transparent text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {game.thumbnail ? (
                      <img src={game.thumbnail} alt="" className="w-7 h-7 object-cover rounded shadow-sm flex-shrink-0" />
                    ) : (
                      <div className="w-7 h-7 bg-slate-700 rounded flex items-center justify-center text-xs flex-shrink-0">🎲</div>
                    )}
                    <span className="truncate leading-tight">{game.titleKr}</span>
                  </button>
                );
              })}
            </div>
            {selectedGame && (
              <div className="flex items-center gap-2 text-xs text-indigo-300 font-medium px-1">
                <span>선택된 게임: <strong>{selectedGame.titleKr}</strong> ({selectedGame.titleEn})</span>
                {selectedGame.bggRating && <span className="text-amber-400 font-bold">★ {selectedGame.bggRating}</span>}
              </div>
            )}
          </div>

          {/* 2. Date, Duration & Live Stopwatch */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Date */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                플레이 일자
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            {/* Duration with Stopwatch */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  플레이 시간 (분)
                </label>
                {/* Live timer controls */}
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="font-mono text-indigo-400 font-bold">{formatTimer(timerSeconds)}</span>
                  <button
                    type="button"
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white"
                    title={isTimerRunning ? '일시정지' : '스톱워치 시작'}
                  >
                    {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsTimerRunning(false);
                      setTimerSeconds(0);
                    }}
                    className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white"
                    title="초기화"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={durationMinutes}
                  onChange={(e) => setDurationMinutes(Number(e.target.value))}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                />
                <span className="text-xs text-slate-400">분</span>
              </div>
            </div>
          </div>

          {/* 3. Location & Mode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                플레이 장소
              </label>
              <input
                type="text"
                list="location-presets"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                placeholder="예: 우리집, 강남 레드버튼"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
              <datalist id="location-presets">
                {locations.map(loc => (
                  <option key={loc.id} value={loc.name} />
                ))}
              </datalist>
            </div>

            {/* Coop Mode Toggle */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                게임 모드
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsCoop(!isCoop)}
                  className={`flex-1 py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                    isCoop
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isCoop ? '🤝 협력 모드 (활성)' : '⚔️ 경쟁 모드'}
                </button>
                {isCoop && (
                  <button
                    type="button"
                    onClick={() => setCoopWon(!coopWon)}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold ${
                      coopWon
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : 'bg-rose-500/20 border-rose-500 text-rose-300'
                    }`}
                  >
                    {coopWon ? '🏆 승리' : '💀 패배'}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* 4. Player Scoring & Ranks */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                플레이어 및 점수 ({sessionPlayers.length}명)
              </label>
              <div className="flex items-center gap-2">
                {/* Available players quick dropdown */}
                <select
                  onChange={(e) => {
                    if (e.target.value === 'NEW') {
                      setShowAddPlayer(true);
                    } else if (e.target.value) {
                      addPlayerToSession(e.target.value);
                      e.target.value = '';
                    }
                  }}
                  className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-200 focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>+ 플레이어 추가</option>
                  {players.filter(p => !sessionPlayers.some(sp => sp.playerId === p.id)).map(p => (
                    <option key={p.id} value={p.id}>{p.name} {p.isUser ? '(나)' : ''}</option>
                  ))}
                  <option value="NEW">➕ 새 플레이어 직접 등록...</option>
                </select>
              </div>
            </div>

            {/* Quick Add Player Modal inline */}
            {showAddPlayer && (
              <div className="p-3 bg-slate-800/90 border border-indigo-500/40 rounded-xl flex items-center gap-2">
                <input
                  type="text"
                  placeholder="플레이어 이름 입력..."
                  value={newPlayerName}
                  onChange={(e) => setNewPlayerName(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white"
                  onKeyDown={(e) => e.key === 'Enter' && handleQuickCreatePlayer()}
                />
                <button
                  type="button"
                  onClick={handleQuickCreatePlayer}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold text-xs"
                >
                  추가
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddPlayer(false)}
                  className="px-2 py-1.5 text-xs text-slate-400 hover:text-white"
                >
                  취소
                </button>
              </div>
            )}

            {/* Players Table */}
            <div className="space-y-2">
              {sessionPlayers.map((sp, idx) => {
                const player = players.find(p => p.id === sp.playerId);
                return (
                  <div
                    key={sp.playerId || idx}
                    className={`p-3 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center gap-3 ${
                      sp.winner && !isCoop
                        ? 'bg-amber-500/10 border-amber-500/40'
                        : 'bg-slate-800/70 border-slate-700/60'
                    }`}
                  >
                    {/* Player Info & Badges */}
                    <div className="flex items-center gap-2.5 min-w-[150px]">
                      {/* Starting Player Button */}
                      <button
                        type="button"
                        onClick={() => toggleStartPlayer(idx)}
                        className={`p-1 rounded-md text-[10px] font-bold border transition-colors ${
                          sp.startPlayer
                            ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                            : 'border-slate-700 text-slate-400 hover:text-slate-200'
                        }`}
                        title="선 플레이어 지정"
                      >
                        선
                      </button>

                      {/* Avatar */}
                      <span className="text-base">{player?.avatar || '🎲'}</span>
                      <div>
                        <span className="text-sm font-bold text-white block leading-tight">
                          {player?.name || '플레이어'} {player?.isUser ? '(나)' : ''}
                        </span>
                        {sp.rank && !isCoop && (
                          <span className="text-[11px] text-slate-400 font-medium">#{sp.rank}등</span>
                        )}
                      </div>
                    </div>

                    {/* Role / Faction Input */}
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="역할/세력 (예: 에코라인, 파랑)"
                        value={sp.role || ''}
                        onChange={(e) => {
                          const updated = [...sessionPlayers];
                          updated[idx].role = e.target.value;
                          setSessionPlayers(updated);
                        }}
                        className="w-full bg-slate-900/80 border border-slate-700/70 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 placeholder-slate-400"
                      />
                    </div>

                    {/* Score & Winner Controls */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          placeholder="점수"
                          value={sp.score !== undefined ? sp.score : ''}
                          onChange={(e) => handleScoreChange(idx, e.target.value)}
                          className="w-16 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1.5 text-sm text-right font-bold text-indigo-300 focus:outline-none"
                        />
                        <span className="text-xs text-slate-400">점</span>
                      </div>

                      {/* Winner Toggle */}
                      {!isCoop && (
                        <button
                          type="button"
                          onClick={() => toggleWinner(idx)}
                          className={`p-2 rounded-lg border transition-all ${
                            sp.winner
                              ? 'bg-amber-500 text-slate-950 font-black border-amber-400 shadow-md shadow-amber-500/30'
                              : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-amber-400'
                          }`}
                          title="승리자 지정"
                        >
                          <Trophy className="w-4 h-4" />
                        </button>
                      )}

                      {/* Remove player */}
                      {sessionPlayers.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removePlayerFromSession(idx)}
                          className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-900 transition-colors"
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

          {/* 5. Notes & Rating */}
          <div className="space-y-3">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                  세션 후기 & 메모
                </label>
                {/* 5-star rating */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`p-0.5 ${star <= rating ? 'text-amber-400' : 'text-slate-600 hover:text-slate-400'}`}
                    >
                      <Star className="w-4 h-4 fill-current" />
                    </button>
                  ))}
                </div>
              </div>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="전략, 재미있었던 점, 특이사항을 기록하세요..."
                rows={2}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            총 {sessionPlayers.length}명 참여
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 font-semibold text-sm transition-colors"
            >
              취소
            </button>
            <button
              type="button"
              onClick={handleSavePlay}
              disabled={!selectedGameId}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 disabled:opacity-50 active:scale-95 transition-all"
            >
              {editPlay ? '수정 완료' : '플레이 기록 저장'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
