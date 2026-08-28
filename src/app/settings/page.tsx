'use client';

import React, { useState, useEffect } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { 
  Settings, 
  Download, 
  Upload, 
  RefreshCw, 
  Check, 
  AlertTriangle, 
  Key, 
  User, 
  Globe, 
  Database,
  RotateCcw,
  Sparkles,
  Loader2,
  ExternalLink,
  HelpCircle,
  Dices,
  BookOpen
} from 'lucide-react';
import { db, getStoredSettings, saveStoredSettings, resetDatabaseToSeed } from '@/lib/db';
import { Header } from '@/components/layout/Header';
import { exportToBGStatsJson, parseBGStatsJson } from '@/lib/bgstats-io';
import { PlayerManager } from '@/components/players/PlayerManager';
import { AppSettings, Game, Play, Player } from '@/types';

export default function SettingsPage() {
  const games = useLiveQuery(() => db.games.toArray()) || [];
  const plays = useLiveQuery(() => db.plays.toArray()) || [];
  const players = useLiveQuery(() => db.players.toArray()) || [];
  const locations = useLiveQuery(() => db.locations.toArray()) || [];

  const [settings, setSettings] = useState<AppSettings>(getStoredSettings());
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [importStatus, setImportStatus] = useState<string>('');
  const [isSyncingCollection, setIsSyncingCollection] = useState(false);
  const [isSyncingPlays, setIsSyncingPlays] = useState(false);
  const [showTokenHelp, setShowTokenHelp] = useState(false);

  useEffect(() => {
    setSettings(getStoredSettings());
  }, []);

  const handleSaveSettings = () => {
    saveStoredSettings(settings);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  // Sync collection from BGG via Server API Route
  const handleSyncBGGCollection = async () => {
    if (!settings.bggUsername.trim()) {
      alert('BGG 유저명을 먼저 입력해 주세요.');
      return;
    }

    setIsSyncingCollection(true);
    setImportStatus('BGG 서버에서 컬렉션 데이터를 요청 중입니다...');
    try {
      const queryParams = new URLSearchParams({
        username: settings.bggUsername.trim(),
        ...(settings.bggApiToken ? { token: settings.bggApiToken.trim() } : {})
      });

      const res = await fetch(`/api/bgg/collection?${queryParams.toString()}`);
      const data = await res.json();

      if (!res.ok || data.error) {
        setImportStatus(`BGG 동기화 실패: ${data.error || '컬렉션을 가져오지 못했습니다. BGG 유저명 또는 API 토큰을 확인해 주세요.'}`);
        setIsSyncingCollection(false);
        return;
      }

      const items: Partial<Game>[] = data.items || [];
      if (items.length === 0) {
        setImportStatus(`BGG 계정 (${settings.bggUsername})에서 등록된 게임 컬렉션을 찾지 못했습니다.`);
        setIsSyncingCollection(false);
        return;
      }

      // Merge / Add into IndexedDB
      const importedGames: Game[] = items.map((item, idx) => ({
        id: `game-bgg-${item.bggId || Date.now() + idx}`,
        bggId: item.bggId,
        titleKr: item.titleKr || 'Unknown Game',
        titleEn: item.titleEn || 'Unknown Game',
        yearPublished: item.yearPublished,
        image: item.image,
        thumbnail: item.thumbnail,
        minPlayers: item.minPlayers || 1,
        maxPlayers: item.maxPlayers || 4,
        minPlaytime: item.minPlaytime || 30,
        maxPlaytime: item.maxPlaytime || 60,
        bggRating: item.bggRating,
        bggRank: item.bggRank,
        status: item.status || 'owned',
        userRating: item.userRating,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }));

      await db.games.bulkPut(importedGames);
      setImportStatus(`🎉 BGG 컬렉션에서 총 ${importedGames.length}개의 게임을 성공적으로 동기화하여 가져왔습니다!`);
    } catch (e: any) {
      setImportStatus(`BGG 동기화 오류: ${e.message}`);
    } finally {
      setIsSyncingCollection(false);
    }
  };

  // Sync historical Plays from BGG via Server API Route
  const handleSyncBGGPlays = async () => {
    if (!settings.bggUsername.trim()) {
      alert('BGG 유저명을 먼저 입력해 주세요.');
      return;
    }

    setIsSyncingPlays(true);
    setImportStatus('BGG 서버에서 플레이 기록을 가져오는 중입니다...');
    try {
      const queryParams = new URLSearchParams({
        username: settings.bggUsername.trim(),
        ...(settings.bggApiToken ? { token: settings.bggApiToken.trim() } : {})
      });

      const res = await fetch(`/api/bgg/plays?${queryParams.toString()}`);
      const data = await res.json();

      if (!res.ok || data.error) {
        setImportStatus(`BGG 플레이 기록 동기화 실패: ${data.error || '플레이 기록을 가져오지 못했습니다.'}`);
        setIsSyncingPlays(false);
        return;
      }

      const bggPlays: Partial<Play>[] = data.plays || [];
      if (bggPlays.length === 0) {
        setImportStatus(`BGG 계정 (${settings.bggUsername})에 기록된 플레이 기록이 없습니다.`);
        setIsSyncingPlays(false);
        return;
      }

      // Map to local DB plays
      const importedPlays: Play[] = bggPlays.map((bp, idx) => {
        // Find existing game by title match
        const matchingGame = games.find(
          g => g.titleEn.toLowerCase() === (bp.gameTitleEn || '').toLowerCase()
        );

        return {
          id: `play-bgg-${bp.bggPlayId || Date.now() + idx}`,
          bggPlayId: bp.bggPlayId,
          gameId: matchingGame?.id || `game-unlinked-${idx}`,
          gameTitleKr: bp.gameTitleKr || '보드게임',
          gameTitleEn: bp.gameTitleEn || 'Board Game',
          gameImage: matchingGame?.thumbnail || matchingGame?.image,
          date: bp.date || new Date().toISOString().substring(0, 10),
          durationMinutes: bp.durationMinutes || 45,
          locationName: bp.locationName || '기본 장소',
          notes: bp.notes,
          syncedToBgg: true,
          playerScores: (bp.playerScores || []).map((ps: any, pIdx: number) => ({
            playerId: pIdx === 0 ? 'player-me' : `player-${pIdx + 1}`,
            role: ps.role,
            score: ps.score,
            winner: ps.winner,
            startPlayer: ps.startPlayer,
            newPlayer: ps.newPlayer,
          })),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
      });

      await db.plays.bulkPut(importedPlays);
      setImportStatus(`🎉 BGG에서 총 ${importedPlays.length}개의 플레이 기록을 성공적으로 동기화했습니다!`);
    } catch (e: any) {
      setImportStatus(`BGG 플레이 기록 동기화 오류: ${e.message}`);
    } finally {
      setIsSyncingPlays(false);
    }
  };

  // Export to BG Stats JSON format
  const handleExportBGStats = () => {
    try {
      const bgStatsData = exportToBGStatsJson(games, players, locations, plays);
      const jsonStr = JSON.stringify(bgStatsData, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const dateStr = new Date().toISOString().substring(0, 10);
      a.href = url;
      a.download = `BGStats_Export_${dateStr}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e: any) {
      alert(`내보내기 실패: ${e.message}`);
    }
  };

  // Import from BG Stats JSON format
  const handleImportBGStats = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        setImportStatus('파일 분석 중...');
        const json = JSON.parse(event.target?.result as string);
        const { games: impGames, players: impPlayers, locations: impLocs, plays: impPlays } = parseBGStatsJson(json);

        setImportStatus(`가져오는 중... (게임 ${impGames.length}개, 플레이 ${impPlays.length}개)`);

        await db.transaction('rw', db.games, db.players, db.locations, db.plays, async () => {
          await db.games.bulkPut(impGames);
          await db.players.bulkPut(impPlayers);
          await db.locations.bulkPut(impLocs);
          await db.plays.bulkPut(impPlays);
        });

        setImportStatus(`🎉 성공적으로 가져왔습니다! (게임 ${impGames.length}개, 플레이 ${impPlays.length}개, 플레이어 ${impPlayers.length}명)`);
      } catch (err: any) {
        setImportStatus(`가져오기 오류: ${err.message}`);
      }
    };
    reader.readAsText(file);
  };

  // Reset to initial Seed data
  const handleResetToSeed = async () => {
    if (confirm('모든 데이터를 초기 프리셋 데이터(한국 인기 게임 10종 + 샘플 플레이)로 복구하시겠습니까? 현재 데이터는 초기화됩니다.')) {
      await resetDatabaseToSeed();
      alert('초기 데이터셋으로 복구되었습니다.');
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <Header
        title="설정 및 데이터 연동"
        subtitle="BGG 실시간 데이터 연동, BG Stats 백업 파일 호환 및 계정 관리"
      />

      <div className="p-4 md:p-8 space-y-8 max-w-4xl mx-auto w-full">
        
        {/* 1. BGG Integration Settings */}
        <section className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">BoardGameGeek (BGG) 계정 & 데이터 실시간 연동</h3>
                <p className="text-xs text-slate-400">BGG 컬렉션(보유/위시/평점) 및 플레이 기록을 원클릭으로 동기화합니다.</p>
              </div>
            </div>

            <button
              onClick={() => setShowTokenHelp(!showTokenHelp)}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
            >
              <HelpCircle className="w-4 h-4" />
              <span>연동 가이드</span>
            </button>
          </div>

          {/* Guide Dropdown */}
          {showTokenHelp && (
            <div className="p-4 bg-indigo-950/30 border border-indigo-500/30 rounded-xl space-y-2 text-xs text-slate-300 animate-in fade-in">
              <span className="font-bold text-indigo-400 block">💡 BGG 데이터 연동 방법 안내:</span>
              <p>1. <strong>BGG 유저명</strong>을 입력하고 [설정 저장]을 누르면 BGG 계정이 연결됩니다.</p>
              <p>2. <strong>BGG 최신 API 정책</strong>: BoardGameGeek에서 2025년 말부터 자동 API 호출 시 인증 토큰(Bearer Token)을 요구합니다. BGG 사이트 (<a href="https://boardgamegeek.com/using_the_xml_api" target="_blank" rel="noreferrer" className="text-indigo-400 underline font-bold">BGG Developer 안내</a>)에서 무료로 발급받은 API 토큰을 입력하시면 안정적인 무제한 동기화가 가능합니다.</p>
              <p>3. 토큰 없이도 기본 내장된 한국 보드게임 카탈로그, 초성 검색, 보드라이프 링크, 그리고 아래의 <strong>BG Stats JSON 백업 파일 가져오기</strong>는 100% 무료로 즉시 사용 가능합니다.</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>BGG 유저명 (BoardGameGeek Username) *</span>
              </label>
              <input
                type="text"
                value={settings.bggUsername}
                onChange={(e) => setSettings({ ...settings, bggUsername: e.target.value })}
                placeholder="예: octavian, boardgamer_kr 등 BGG 아이디 입력"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1.5 flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5" />
                <span>BGG API Bearer Token (선택 사항)</span>
              </label>
              <input
                type="password"
                value={settings.bggApiToken || ''}
                onChange={(e) => setSettings({ ...settings, bggApiToken: e.target.value })}
                placeholder="BGG Developer API Token (BGG 최신 인증 토큰)"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleSaveSettings}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow flex items-center gap-1.5 transition-colors"
              >
                {saveSuccess ? <Check className="w-4 h-4" /> : null}
                <span>{saveSuccess ? '저장 완료!' : 'BGG 설정 저장'}</span>
              </button>

              {/* Sync Collection */}
              <button
                onClick={handleSyncBGGCollection}
                disabled={isSyncingCollection || !settings.bggUsername}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50"
              >
                {isSyncingCollection ? <Loader2 className="w-4 h-4 animate-spin text-indigo-400" /> : <RefreshCw className="w-4 h-4 text-indigo-400" />}
                <span>BGG 컬렉션 동기화</span>
              </button>

              {/* Sync Plays */}
              <button
                onClick={handleSyncBGGPlays}
                disabled={isSyncingPlays || !settings.bggUsername}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50"
              >
                {isSyncingPlays ? <Loader2 className="w-4 h-4 animate-spin text-sky-400" /> : <Dices className="w-4 h-4 text-sky-400" />}
                <span>BGG 플레이 기록 동기화</span>
              </button>
            </div>
          </div>
        </section>

        {/* 2. Player / Member Management */}
        <section>
          <PlayerManager />
        </section>

        {/* 2. BG Stats Backup Compatibility (Import / Export) */}
        <section className="p-6 rounded-2xl bg-slate-900/90 border border-indigo-500/30 space-y-5 shadow-xl">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">BG Stats 모바일 앱 백업 파일 호환 (JSON)</h3>
              <p className="text-xs text-slate-400">
                기존 BG Stats 앱의 백업 파일(JSON)을 그대로 가져오거나, 본 툴의 데이터를 BG Stats 호환 파일로 다운로드합니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Export */}
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-3 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                  <Download className="w-4 h-4 text-indigo-400" />
                  <span>BG Stats 포맷으로 내보내기</span>
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  현재 DB의 게임({games.length}개), 플레이({plays.length}개), 플레이어({players.length}명)를 BG Stats 호환 JSON으로 다운로드합니다.
                </p>
              </div>

              <button
                onClick={handleExportBGStats}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>BG Stats 백업 JSON 다운로드</span>
              </button>
            </div>

            {/* Import */}
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-3 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                  <Upload className="w-4 h-4 text-sky-400" />
                  <span>BG Stats 백업 파일 가져오기</span>
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  BG Stats 앱의 `Export to JSON`으로 생성된 백업 파일을 업로드하여 기존 데이터를 복원합니다.
                </p>
              </div>

              <label className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-colors cursor-pointer text-center">
                <Upload className="w-4 h-4" />
                <span>BG Stats 백업 파일 선택 (.json)</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportBGStats}
                  className="hidden"
                />
              </label>
            </div>

          </div>

          {importStatus && (
            <div className="p-3 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-xs text-indigo-300 leading-relaxed animate-in fade-in">
              {importStatus}
            </div>
          )}
        </section>

        {/* 3. Database Maintenance */}
        <section className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-rose-400" />
            <span>데이터베이스 관리 및 초기화</span>
          </h3>
          <p className="text-xs text-slate-400">
            앱을 처음 상태(한국 인기 보드게임 10종, 샘플 플레이어 및 플레이 기록 프리셋)로 되돌립니다.
          </p>

          <button
            onClick={handleResetToSeed}
            className="px-4 py-2 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30 font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>기본 프리셋 데이터셋으로 복구 (Reset)</span>
          </button>
        </section>

      </div>
    </div>
  );
}
