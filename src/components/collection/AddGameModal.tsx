'use client';

import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Plus, 
  Loader2, 
  Check, 
  ExternalLink,
  Library,
  Sparkles
} from 'lucide-react';
import { db, getStoredSettings } from '@/lib/db';
import { Game, GameStatus } from '@/types';
import { searchBGG, fetchBGGGameDetails, BGGSearchResult } from '@/lib/bgg-client';

interface AddGameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddGameModal: React.FC<AddGameModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'bgg' | 'manual'>('bgg');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<BGGSearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingGameId, setLoadingGameId] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Manual Form States
  const [titleKr, setTitleKr] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [bggId, setBggId] = useState<number | undefined>(undefined);
  const [minPlayers, setMinPlayers] = useState(1);
  const [maxPlayers, setMaxPlayers] = useState(4);
  const [minPlaytime, setMinPlaytime] = useState(30);
  const [maxPlaytime, setMaxPlaytime] = useState(60);
  const [weight, setWeight] = useState<number | undefined>(undefined);
  const [publisherKr, setPublisherKr] = useState('');
  const [purchasePrice, setPurchasePrice] = useState<number | undefined>(undefined);
  const [status, setStatus] = useState<GameStatus>('owned');

  if (!isOpen) return null;

  const handleBGGSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setErrorMsg('');
    try {
      const settings = getStoredSettings();
      const results = await searchBGG(searchQuery.trim(), settings.bggApiToken);
      setSearchResults(results);
      if (results.length === 0) {
        setErrorMsg('검색 결과가 없습니다. 게임 영문명이나 BGG 번호로 검색해 보세요.');
      }
    } catch (err: any) {
      setErrorMsg('BGG 검색 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectBGGGame = async (result: BGGSearchResult) => {
    setLoadingGameId(result.bggId);
    try {
      const settings = getStoredSettings();
      const details = await fetchBGGGameDetails(result.bggId, settings.bggApiToken);
      
      const newGame: Game = {
        id: `game-${Date.now()}`,
        bggId: result.bggId,
        titleKr: result.titleEn, // Defaults to EN, user can edit KR title
        titleEn: result.titleEn,
        yearPublished: details?.yearPublished || result.yearPublished,
        image: details?.image,
        thumbnail: details?.thumbnail,
        minPlayers: details?.minPlayers || 1,
        maxPlayers: details?.maxPlayers || 4,
        bestPlayers: details?.bestPlayers,
        minPlaytime: details?.minPlaytime || 30,
        maxPlaytime: details?.maxPlaytime || 60,
        weight: details?.weight,
        bggRating: details?.bggRating,
        bggRank: details?.bggRank,
        categories: details?.categories || [],
        mechanics: details?.mechanics || [],
        designers: details?.designers || [],
        publisherEn: details?.publishers?.[0],
        status: 'owned',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await db.games.add(newGame);
      onClose();
    } catch (err) {
      console.error(err);
      setErrorMsg('게임 상세 정보를 가져오는 중 오류가 발생했습니다.');
    } finally {
      setLoadingGameId(null);
    }
  };

  const handleSaveManualGame = async () => {
    if (!titleKr.trim()) return;

    const newGame: Game = {
      id: `game-${Date.now()}`,
      bggId,
      titleKr: titleKr.trim(),
      titleEn: titleEn.trim() || titleKr.trim(),
      minPlayers,
      maxPlayers,
      minPlaytime,
      maxPlaytime,
      weight,
      publisherKr: publisherKr.trim() || undefined,
      purchasePrice,
      status,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await db.games.add(newGame);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/95">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Library className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">컬렉션에 새 게임 추가</h3>
              <p className="text-xs text-slate-400">BGG DB 검색 또는 직접 수동 등록</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle */}
        <div className="px-6 pt-4 flex gap-2 border-b border-slate-800 bg-slate-950/40">
          <button
            onClick={() => setActiveTab('bgg')}
            className={`pb-3 text-xs font-bold border-b-2 transition-colors ${
              activeTab === 'bgg'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            🌐 BGG 온라인 검색으로 추가
          </button>
          <button
            onClick={() => setActiveTab('manual')}
            className={`pb-3 text-xs font-bold border-b-2 transition-colors ${
              activeTab === 'manual'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            ✍️ 직접 정보 입력하여 추가
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          
          {activeTab === 'bgg' ? (
            <div className="space-y-4">
              {/* Search Form */}
              <form onSubmit={handleBGGSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="BGG 게임 영문명 검색 (예: Brass, Ark Nova, Cascadia)..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-10 pr-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center gap-1.5 shadow disabled:opacity-50"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                  <span>검색</span>
                </button>
              </form>

              {errorMsg && (
                <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 p-2.5 rounded-xl">
                  {errorMsg}
                </p>
              )}

              {/* Search Results List */}
              <div className="space-y-2 max-h-72 overflow-y-auto">
                {searchResults.map((res) => (
                  <div
                    key={res.bggId}
                    className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 flex items-center justify-between gap-3 transition-colors"
                  >
                    <div>
                      <h5 className="text-sm font-bold text-white">{res.titleEn}</h5>
                      <span className="text-xs text-slate-400">
                        출시년도: {res.yearPublished || '정보없음'} | BGG ID: #{res.bggId}
                      </span>
                    </div>

                    <button
                      onClick={() => handleSelectBGGGame(res)}
                      disabled={loadingGameId === res.bggId}
                      className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1 shadow disabled:opacity-50 transition-colors"
                    >
                      {loadingGameId === res.bggId ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                      <span>컬렉션에 추가</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Manual Input Form */
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">한글 게임명 *</label>
                  <input
                    type="text"
                    value={titleKr}
                    onChange={(e) => setTitleKr(e.target.value)}
                    placeholder="예: 테라포밍 마스"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">영문 게임명</label>
                  <input
                    type="text"
                    value={titleEn}
                    onChange={(e) => setTitleEn(e.target.value)}
                    placeholder="예: Terraforming Mars"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">최소 인원</label>
                  <input
                    type="number"
                    min="1"
                    value={minPlayers}
                    onChange={(e) => setMinPlayers(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">최대 인원</label>
                  <input
                    type="number"
                    min="1"
                    value={maxPlayers}
                    onChange={(e) => setMaxPlayers(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">최소 시간 (분)</label>
                  <input
                    type="number"
                    min="5"
                    value={minPlaytime}
                    onChange={(e) => setMinPlaytime(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">최대 시간 (분)</label>
                  <input
                    type="number"
                    min="5"
                    value={maxPlaytime}
                    onChange={(e) => setMaxPlaytime(Number(e.target.value))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">난이도 Weight (1~5)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="1"
                    max="5"
                    value={weight || ''}
                    onChange={(e) => setWeight(e.target.value ? Number(e.target.value) : undefined)}
                    placeholder="예: 3.25"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">한국어판 발매사</label>
                  <input
                    type="text"
                    value={publisherKr}
                    onChange={(e) => setPublisherKr(e.target.value)}
                    placeholder="예: 코리아보드게임즈"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">컬렉션 상태</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as GameStatus)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white"
                  >
                    <option value="owned">보유중 (Owned)</option>
                    <option value="wishlist">위시리스트 (Wishlist)</option>
                    <option value="played">플레이해봄 (Played)</option>
                    <option value="fortrade">방출대기 (For Trade)</option>
                    <option value="preordered">예약구매 (Preordered)</option>
                  </select>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSaveManualGame}
                disabled={!titleKr.trim()}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md disabled:opacity-50 transition-colors"
              >
                게임 추가 완료
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
