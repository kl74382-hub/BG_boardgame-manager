'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Star, 
  Users, 
  Clock, 
  ShieldCheck, 
  ExternalLink, 
  Coins, 
  Trophy, 
  Calendar, 
  Plus, 
  Edit3, 
  Check,
  Package,
  BookOpen,
  DollarSign,
  MessageSquare,
  Truck,
  Globe,
  FileText,
  Calculator,
  RefreshCw,
  Loader2,
  Image as ImageIcon
} from 'lucide-react';
import { Game, Play, GameStatus } from '@/types';
import { db } from '@/lib/db';
import { getBoardLifeLinks, getBggLinks } from '@/lib/boardlife-helper';
import { getGameReferenceInfo } from '@/lib/manual-helper';
import { calculateGameStatsMap } from '@/lib/stats-calculator';
import { useAuth } from '@/contexts/AuthContext';

interface GameDetailModalProps {
  game: Game | null;
  plays: Play[];
  isOpen: boolean;
  onClose: () => void;
  onOpenLogPlay: (gameId: string) => void;
}

export const GameDetailModal: React.FC<GameDetailModalProps> = ({
  game,
  plays,
  isOpen,
  onClose,
  onOpenLogPlay,
}) => {
  const { canViewPrivateFields } = useAuth();
  const showPrice = game ? canViewPrivateFields(game.userId) : false;
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState<GameStatus>('owned');
  const [userRating, setUserRating] = useState<number | undefined>(undefined);
  const [purchasePrice, setPurchasePrice] = useState<number | undefined>(undefined);
  const [organizer, setOrganizer] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [manualUrlInput, setManualUrlInput] = useState<string>('');
  const [sleeves, setSleeves] = useState(game?.sleeves || []);
  const [bggIdInput, setBggIdInput] = useState<number | undefined>(undefined);
  const [customImageUrl, setCustomImageUrl] = useState<string>('');
  const [imgError, setImgError] = useState(false);
  const [isRefreshingBgg, setIsRefreshingBgg] = useState(false);

  useEffect(() => {
    if (game) {
      setStatus(game.status || 'owned');
      setUserRating(game.userRating ?? undefined);
      setPurchasePrice(game.purchasePrice ?? undefined);
      setOrganizer(typeof game.organizer === 'string' ? game.organizer : (game.organizer ? '보유' : ''));
      setNotes(game.notes || '');
      setManualUrlInput(game.manualUrl || '');
      setSleeves(game.sleeves || []);
      setBggIdInput(game.bggId ?? undefined);
      setCustomImageUrl(game.image || game.thumbnail || '');
      setImgError(false);
      setIsEditing(false);
    }
  }, [game, isOpen]);

  if (!isOpen || !game) return null;

  const blLinks = getBoardLifeLinks(game.titleKr, game.titleEn, game.boardlifeId);
  const bggLinks = getBggLinks(game.bggId, game.titleEn);
  const refInfo = getGameReferenceInfo(game);
  const gameStatsMap = calculateGameStatsMap([game], plays);
  const stats = gameStatsMap.get(game.id);

  const handleRefreshBggImage = async () => {
    const targetBggId = bggIdInput || game.bggId;
    if (!targetBggId) {
      alert('BGG ID를 먼저 입력해주세요.');
      return;
    }
    setIsRefreshingBgg(true);
    try {
      const res = await fetch(`/api/bgg/thing?id=${targetBggId}`);
      const data = await res.json();
      if (data.game?.image || data.game?.thumbnail) {
        const newImg = data.game.image || data.game.thumbnail;
        const newThumb = data.game.thumbnail || data.game.image;
        setCustomImageUrl(newImg);
        setImgError(false);
        await db.games.update(game.id, {
          bggId: targetBggId,
          image: newImg,
          thumbnail: newThumb,
          bggRating: data.game.bggRating || game.bggRating,
          bggRank: data.game.bggRank || game.bggRank,
          weight: data.game.weight || game.weight,
        });
        alert('🎉 BGG에서 최신 썸네일과 공식 정보를 성공적으로 갱신했습니다!');
      } else {
        alert('BGG에서 해당 게임의 이미지를 찾을 수 없습니다.');
      }
    } catch (e: any) {
      alert(`BGG 조회 오류: ${e.message}`);
    } finally {
      setIsRefreshingBgg(false);
    }
  };

  const handleSaveEdit = async () => {
    await db.games.update(game.id, {
      status,
      userRating,
      purchasePrice,
      organizer,
      notes,
      manualUrl: manualUrlInput ? manualUrlInput.trim() : null,
      sleeves,
      bggId: bggIdInput,
      image: customImageUrl || game.image,
      thumbnail: customImageUrl || game.thumbnail,
      updatedAt: new Date().toISOString(),
    });
    setImgError(false);
    setIsEditing(false);
  };

  const toggleSleeveEquipped = async (index: number) => {
    const updated = [...sleeves];
    updated[index].hasSleeves = !updated[index].hasSleeves;
    setSleeves(updated);
    await db.games.update(game.id, { sleeves: updated });
  };

  const playCount = stats?.playCount || 0;
  const price = game.purchasePrice || purchasePrice;
  const costPerPlay = price && playCount > 0 ? Math.round(price / playCount) : price;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/95 sticky top-0 z-10">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h3 className="text-lg font-bold text-white leading-tight">{game.titleKr}</h3>
            {game.edition && (
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-bold text-xs border border-slate-700">
                {game.edition}
              </span>
            )}
            {game.bggRank && (
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-black text-xs border border-amber-500/30">
                BGG #{game.bggRank}
              </span>
            )}
            
            {/* Quick External Deep Links */}
            <div className="flex items-center gap-1.5 ml-2">
              <a
                href={refInfo.url}
                target="_blank"
                rel="noreferrer"
                title={refInfo.hasDedicatedManual ? '전용 규칙 참조표 열기' : '참조표 허브에서 관련 규칙 검색'}
                className={`px-2 py-0.5 rounded-lg border text-xs font-bold transition-colors flex items-center gap-1 ${
                  refInfo.hasDedicatedManual
                    ? 'bg-emerald-950/90 hover:bg-emerald-600 text-emerald-300 hover:text-white border-emerald-500/40 shadow-sm shadow-emerald-950'
                    : 'bg-teal-950/70 hover:bg-teal-600 text-teal-400 hover:text-white border-teal-500/30'
                }`}
              >
                <span>📖 {refInfo.hasDedicatedManual ? '규칙 참조표' : '참조표 허브'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={blLinks.infoUrl}
                target="_blank"
                rel="noreferrer"
                title="보드라이프 직행"
                className="px-2 py-0.5 rounded-lg bg-sky-950/80 hover:bg-sky-600 text-sky-400 hover:text-white border border-sky-500/30 text-xs font-bold transition-colors flex items-center gap-1"
              >
                <span>🇰🇷 보드라이프</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              {game.bggId && (
                <a
                  href={bggLinks.detailUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="BGG 직행"
                  className="px-2 py-0.5 rounded-lg bg-amber-950/80 hover:bg-amber-600 text-amber-400 hover:text-white border border-amber-500/30 text-xs font-bold transition-colors flex items-center gap-1"
                >
                  <span>🌐 BGG</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {showPrice && (
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  isEditing
                    ? 'bg-indigo-600 border-indigo-500 text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditing ? '수정 중' : '정보 및 구매가 수정'}</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Top Info Banner */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Box Image */}
            <div className="w-full sm:w-48 aspect-square sm:aspect-[3/4] bg-slate-950 rounded-2xl overflow-hidden shadow-xl border border-slate-800 flex-shrink-0 relative flex items-center justify-center">
              {(!imgError && (customImageUrl || game.image || game.thumbnail)) ? (
                <img
                  src={customImageUrl || game.image || game.thumbnail || ''}
                  alt={game.titleKr}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800/80 text-slate-500 p-4 text-center">
                  <span className="text-4xl mb-2">🎲</span>
                  <span className="text-xs font-bold text-slate-400">{game.titleKr}</span>
                  <span className="text-[10px] text-slate-500 mt-1">이미지 없음 / 불러오기 실패</span>
                </div>
              )}
            </div>

            {/* Core Stats & Metadata */}
            <div className="flex-1 space-y-3">
              <div>
                <h2 className="text-2xl font-black text-white">{game.titleKr}</h2>
                <p className="text-sm text-slate-400 font-medium">{game.titleEn} {game.yearPublished ? `(${game.yearPublished})` : ''}</p>
              </div>

              {/* Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">난이도 (Weight)</span>
                  <span className="text-sm font-black text-amber-400">{game.weight ? `${game.weight} / 5.0` : '정보 없음'}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">긱 평점 (BGG)</span>
                  <span className="text-sm font-black text-amber-400">{game.bggRating ? `★ ${game.bggRating}` : '-'}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">인원 (베스트)</span>
                  <span className="text-sm font-black text-indigo-300">
                    {game.minPlayers}~{game.maxPlayers}인 {game.bestPlayers ? `(${game.bestPlayers}인)` : ''}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-center">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">플레이 타임</span>
                  <span className="text-sm font-black text-sky-400">{game.minPlaytime}~{game.maxPlaytime}분</span>
                </div>
              </div>

              {/* Publisher & Tags */}
              <div className="text-xs text-slate-400 space-y-1.5 pt-1">
                {game.publisherKr && (
                  <div>
                    <span className="font-bold text-slate-300">한국어판 발매:</span> {game.publisherKr} {game.publisherEn ? `(${game.publisherEn})` : ''}
                  </div>
                )}
                {game.mechanics && game.mechanics.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {game.mechanics.map((m, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[11px] border border-slate-700">
                        {m}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Cost Per Play Analysis & Stats (Owner/Admin Only) or Clean Play Stat (Visitor) */}
          {showPrice ? (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/30 to-slate-900 border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Coins className="w-4 h-4" />
                  <span>플레이당 비용(가성비) & 구매 정보</span>
                </h4>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-bold"
                >
                  구매가 변경하기
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-bold">소장 구매가</span>
                  <span className="text-base font-black text-white">
                    {price ? `${price.toLocaleString()}원` : '미입력 (수정에서 입력 가능)'}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-bold">총 플레이 횟수</span>
                  <span className="text-base font-black text-indigo-400">{playCount}회</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/40">
                  <span className="text-[10px] text-amber-400 block font-bold">플레이 1회당 비용</span>
                  <span className="text-base font-black text-amber-300">
                    {price ? `${costPerPlay?.toLocaleString()}원 / 회` : '-'}
                  </span>
                </div>
              </div>
              {price && playCount > 0 && (
                <p className="text-[11px] text-slate-400 flex items-center gap-1">
                  <Calculator className="w-3.5 h-3.5 text-amber-400" />
                  <span>산출 공식: 구매가 {price.toLocaleString()}원 ÷ {playCount}회 플레이 = <strong>회당 {costPerPlay?.toLocaleString()}원</strong></span>
                </p>
              )}
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <Trophy className="w-4 h-4" />
                <span>플레이 통계 요약</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-bold">누적 플레이</span>
                  <span className="text-base font-black text-indigo-400">{playCount}회</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-bold">권장 인원</span>
                  <span className="text-base font-black text-slate-200">
                    {game.minPlayers === game.maxPlayers ? `${game.minPlayers}인` : `${game.minPlayers}~${game.maxPlayers}인`}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-400 block font-bold">평균 플레이타임</span>
                  <span className="text-base font-black text-slate-200">{game.minPlaytime}~{game.maxPlaytime}분</span>
                </div>
              </div>
            </div>
          )}

          {/* Funding & Shipping Status (펀딩 / 선주문 배송 추적) */}
          {(game.edition?.includes('펀딩') || game.shippingDate || game.resalePrice || game.shippingHistory) && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Truck className="w-4 h-4" />
                  <span>펀딩 & 배송 / 중고 관리 정보</span>
                </span>
                {game.deliveryStatus && (
                  <span className={`px-2 py-0.5 rounded-full text-xs font-black border ${
                    game.deliveryStatus === '도착'
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                      : 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                  }`}>
                    배송 {game.deliveryStatus}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-bold">판본 및 구매처</span>
                  <span className="text-xs font-black text-white">
                    {game.edition || '일반판'} {game.purchaseStore ? `(${game.purchaseStore})` : ''}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-bold">배송 예정일</span>
                  <span className="text-xs font-black text-cyan-300">
                    {game.shippingDate || '수령 완료'}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block font-bold">중고 판매(방출)가</span>
                  <span className="text-xs font-black text-amber-300">
                    {game.resalePrice ? `${game.resalePrice.toLocaleString()}원` : '-'}
                  </span>
                </div>
              </div>

              {game.shippingHistory && (
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
                  <span className="text-slate-400 font-bold block text-[10px] mb-0.5">배송 지연/변경 히스토리:</span>
                  <span className="font-mono text-cyan-400/90">{game.shippingHistory}</span>
                </div>
              )}
            </div>
          )}

          {/* Web Reference Manual & Rules (AutoManual 연동 허브) */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-slate-900 border border-emerald-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                📖 보드게임 규칙 & 참조표 (AutoManual)
              </span>
              <span className="text-[11px] font-bold text-slate-400">
                {refInfo.hasDedicatedManual ? (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-black">
                    ★ 전용 참조표 탑재
                  </span>
                ) : (
                  <span>참조표 모음 허브</span>
                )}
              </span>
            </div>

            {refInfo.hasDedicatedManual ? (
              <div className="space-y-2.5">
                {refInfo.description && (
                  <p className="text-xs text-slate-300">
                    ✨ <strong className="text-emerald-300">{refInfo.title}</strong>: {refInfo.description}
                  </p>
                )}
                <div className={`grid grid-cols-1 ${refInfo.aidUrl ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} gap-2`}>
                  <a
                    href={refInfo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-emerald-950/70 hover:bg-emerald-600/90 border border-emerald-500/40 text-emerald-200 hover:text-white flex items-center justify-between text-xs font-bold transition-all group shadow-sm"
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                      <div className="text-left">
                        <div className="text-white font-extrabold">웹 규칙 & 상세 참조표</div>
                        <div className="text-[10px] text-emerald-300/80 font-normal">에라타·FAQ 및 메모 지원</div>
                      </div>
                    </span>
                    <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                  </a>

                  {refInfo.aidUrl && (
                    <a
                      href={refInfo.aidUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-slate-800/90 hover:bg-teal-600/90 border border-slate-700 hover:border-teal-500/40 text-slate-200 hover:text-white flex items-center justify-between text-xs font-bold transition-all group shadow-sm"
                    >
                      <span className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-teal-400 group-hover:text-white" />
                        <div className="text-left">
                          <div className="text-white font-extrabold">인쇄용 에이드 (A4)</div>
                          <div className="text-[10px] text-slate-400 group-hover:text-white/80 font-normal">출력 최적화 2단 요약본</div>
                        </div>
                      </span>
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white" />
                    </a>
                  )}

                  <a
                    href={refInfo.hubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-between text-xs font-bold transition-all group shadow-sm"
                  >
                    <span className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-sky-400" />
                      <div className="text-left">
                        <div className="text-white font-extrabold">전체 참조표 허브</div>
                        <div className="text-[10px] text-slate-400 font-normal">다른 게임 참조표 둘러보기</div>
                      </div>
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400" />
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-xs text-slate-400">
                  아직 이 게임의 전용 웹 참조표는 등록되지 않았습니다. 전체 참조표 허브에서 관련 자료를 검색하거나 둘러볼 수 있습니다.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={refInfo.hubSearchUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-emerald-600/80 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-between text-xs font-bold transition-colors group"
                  >
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-emerald-400 group-hover:text-white" />
                      <span>참조표 허브에서 &quot;{game.titleKr}&quot; 검색</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
                  </a>

                  <a
                    href={refInfo.hubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-between text-xs font-bold transition-colors group"
                  >
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-teal-400" />
                      <span>보드게임 전체 참조표 모음</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* BoardLife Direct Links (한국 보드게임 포털 연동 허브) */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-950/40 to-indigo-950/40 border border-sky-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                🇰🇷 보드라이프 (BoardLife) 데이터 & 커뮤니티 연동
              </span>
              <span className="text-[11px] text-slate-400">
                {game.boardlifeId ? `보드라이프 직행 #${game.boardlifeId}` : '검색 직행'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <a
                href={blLinks.infoUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-between text-xs font-bold transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-sky-400" />
                  <span>게임 상세정보</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400" />
              </a>

              <a
                href={blLinks.rulesUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-between text-xs font-bold transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  <Package className="w-4 h-4 text-emerald-400" />
                  <span>한글 룰북/자료실</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
              </a>

              <a
                href={blLinks.usedMarketUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-between text-xs font-bold transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-amber-400" />
                  <span>중고장터 실시간 시세</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
              </a>

              <a
                href={blLinks.tipsUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-between text-xs font-bold transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-indigo-400" />
                  <span>공략 & 팁 후기</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400" />
              </a>
            </div>
          </div>

          {/* BoardGameGeek Direct Links (BGG 글로벌 딥링크 허브) */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/30 to-slate-900 border border-amber-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                🌐 BoardGameGeek (BGG) 공식 데이터 & 포럼 직행
              </span>
              <span className="text-[11px] text-slate-400">
                {game.bggId ? `BGG Thing #${game.bggId}` : '검색 직행'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              <a
                href={bggLinks.detailUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-between text-xs font-bold transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-amber-400" />
                  <span>BGG 메인</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
              </a>

              <a
                href={bggLinks.filesUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-between text-xs font-bold transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>자료실(Files)</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400" />
              </a>

              <a
                href={bggLinks.forumUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-between text-xs font-bold transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-indigo-400" />
                  <span>룰 포럼</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400" />
              </a>

              <a
                href={bggLinks.marketUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-between text-xs font-bold transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span>긱마켓 시세</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
              </a>

              <a
                href={bggLinks.videosUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 hover:text-white flex items-center justify-between text-xs font-bold transition-colors group col-span-2 sm:col-span-1"
              >
                <span className="flex items-center gap-1.5">
                  <Package className="w-4 h-4 text-rose-400" />
                  <span>룰 영상</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-rose-400" />
              </a>
            </div>
          </div>

          {/* My Play History & Stats for this Game */}
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>나의 플레이 전적 및 통계</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">총 플레이</span>
                <span className="text-base font-black text-indigo-400">{stats?.playCount || 0}회</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">내 승률</span>
                <span className="text-base font-black text-emerald-400">{stats?.userWinRate || 0}% ({stats?.userWins || 0}승)</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">최고 점수</span>
                <span className="text-base font-black text-amber-400">{stats?.highScore ?? '-'}점</span>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">평균 점수</span>
                <span className="text-base font-black text-slate-200">{stats?.averageScore ?? '-'}점</span>
              </div>
            </div>
          </div>

          {/* Sleeve Specs & Equipment Manager */}
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>카드 슬리브(프로텍터) & 컴포넌트 정보</span>
            </h4>

            {sleeves && sleeves.length > 0 ? (
              <div className="space-y-2">
                {sleeves.map((slv, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleSleeveEquipped(idx)}
                        className={`p-1.5 rounded-lg border flex items-center gap-1 font-bold ${
                          slv.hasSleeves
                            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                            : 'bg-slate-800 border-slate-700 text-slate-400'
                        }`}
                      >
                        {slv.hasSleeves ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                        <span>{slv.hasSleeves ? '착용 완료' : '미착용'}</span>
                      </button>
                      <span className="font-bold text-white">{slv.size}</span>
                      <span className="text-slate-400">({slv.count}장)</span>
                      {slv.notes && <span className="text-[11px] text-slate-500">- {slv.notes}</span>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500">등록된 슬리브 정보가 없습니다.</p>
            )}

            {game.organizer && (
              <div className="text-xs text-slate-300 pt-2 border-t border-slate-700/40">
                <span className="font-bold text-indigo-400">오거나이저/인서트:</span> {game.organizer}
              </div>
            )}
          </div>

          {/* Edit Mode Inputs */}
          {isEditing && showPrice && (
            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/40 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">보유 정보 및 구매가 수정</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">컬렉션 상태</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as GameStatus)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                  >
                    <option value="owned">보유중 (Owned)</option>
                    <option value="wishlist">위시리스트 (Wishlist)</option>
                    <option value="played">플레이해봄 (Played)</option>
                    <option value="fortrade">방출대기 (For Trade)</option>
                    <option value="preordered">예약구매 (Preordered)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-400 block mb-1">내 평점 (1~10)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="1"
                    max="10"
                    value={userRating || ''}
                    onChange={(e) => setUserRating(e.target.value ? Number(e.target.value) : undefined)}
                    placeholder="예: 9.5"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="text-xs text-amber-400 font-bold block mb-1">💰 실제 구매 가격 (원) *</label>
                  <input
                    type="number"
                    step="1000"
                    value={purchasePrice || ''}
                    onChange={(e) => setPurchasePrice(e.target.value ? Number(e.target.value) : undefined)}
                    placeholder="예: 65000"
                    className="w-full bg-slate-900 border border-amber-500/60 rounded-xl px-3 py-2 text-xs text-white focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
              </div>

              {/* Image & BGG ID mapping */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-indigo-400" />
                    <span>썸네일 & BGG 매핑 관리</span>
                  </span>
                  <span className="text-[10px] text-slate-500">사진이 잘못되었거나 안 나올 때 갱신</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">BGG 게임 ID</label>
                    <div className="flex gap-1.5">
                      <input
                        type="number"
                        value={bggIdInput || ''}
                        onChange={(e) => setBggIdInput(e.target.value ? Number(e.target.value) : undefined)}
                        placeholder="예: 116954"
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                      />
                      <button
                        type="button"
                        onClick={handleRefreshBggImage}
                        disabled={isRefreshingBgg}
                        title="BGG에서 최신 썸네일과 정보를 다시 가져옵니다"
                        className="px-2.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/40 text-xs font-bold flex items-center gap-1 shrink-0 disabled:opacity-50"
                      >
                        {isRefreshingBgg ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
                        <span>BGG 갱신</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">직접 이미지 URL 지정</label>
                    <input
                      type="url"
                      value={customImageUrl}
                      onChange={(e) => setCustomImageUrl(e.target.value)}
                      placeholder="https://... (이미지 주소 붙여넣기)"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">오거나이저 / 인서트</label>
                <input
                  type="text"
                  value={organizer}
                  onChange={(e) => setOrganizer(e.target.value)}
                  placeholder="예: 럭키식스 원목 오거나이저"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">메모 & 비고</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="확장팩 소장 여부나 특이사항 기록..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs text-emerald-400 font-bold block mb-1">
                  📖 규칙 참조표 URL 직접 지정 (선택)
                </label>
                <input
                  type="url"
                  value={manualUrlInput}
                  onChange={(e) => setManualUrlInput(e.target.value)}
                  placeholder="예: https://kl74382-hub.github.io/BG/RockHard1977.html (미입력 시 자동 매칭)"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white"
                >
                  취소
                </button>
                <button
                  type="button"
                  onClick={handleSaveEdit}
                  className="px-4 py-1.5 rounded-lg bg-indigo-600 text-white font-bold text-xs shadow"
                >
                  저장하기
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/95 flex items-center justify-between sticky bottom-0">
          <div className="text-xs text-slate-400">
            {game.bggId && <span>BGG ID: <strong>{game.bggId}</strong></span>}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenLogPlay(game.id);
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 flex items-center gap-2 active:scale-95 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>이 게임 플레이 기록하기</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
