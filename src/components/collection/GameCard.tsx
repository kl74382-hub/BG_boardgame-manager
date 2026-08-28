'use client';

import React from 'react';
import { 
  Star, 
  Users, 
  Clock, 
  Flame, 
  ShieldCheck, 
  Coins, 
  ExternalLink,
  Heart,
  MoreVertical
} from 'lucide-react';
import { Game } from '@/types';
import { getBoardLifeLinks } from '@/lib/boardlife-helper';

interface GameCardProps {
  game: Game;
  playCount?: number;
  costPerPlay?: number;
  onClick?: () => void;
  onToggleFavorite?: (gameId: string) => void;
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  playCount = 0,
  costPerPlay,
  onClick,
  onToggleFavorite,
}) => {
  const blLinks = getBoardLifeLinks(game.titleKr, game.titleEn);

  // Complexity / Weight label
  const getWeightBadge = (weight?: number) => {
    if (!weight) return null;
    if (weight < 2.0) return <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">입문 {weight}</span>;
    if (weight < 3.0) return <span className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 font-bold text-[10px]">초중급 {weight}</span>;
    if (weight < 3.8) return <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold text-[10px]">중상급 {weight}</span>;
    return <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold text-[10px]">헤비 {weight}</span>;
  };

  // Status label
  const getStatusBadge = () => {
    switch (game.status) {
      case 'owned': return <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 text-[10px] font-bold">보유중</span>;
      case 'wishlist': return <span className="px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-400 text-[10px] font-bold">위시리스트</span>;
      case 'played': return <span className="px-1.5 py-0.5 rounded bg-slate-700 text-slate-300 text-[10px] font-bold">플레이해봄</span>;
      case 'fortrade': return <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px] font-bold">방출대기</span>;
      case 'preordered': return <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-[10px] font-bold">예약구매</span>;
      default: return null;
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 hover:border-indigo-500/50 rounded-2xl overflow-hidden transition-all shadow-lg hover:shadow-indigo-500/10 cursor-pointer group flex flex-col justify-between"
    >
      <div>
        {/* Card Cover & Badges */}
        <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
          {game.image || game.thumbnail ? (
            <img
              src={game.image || game.thumbnail}
              alt={game.titleKr}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl">🎲</div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

          {/* Top Overlays */}
          <div className="absolute top-2 left-2 flex items-center gap-1.5">
            {getStatusBadge()}
            {game.bggRank && (
              <span className="px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-amber-300 text-[10px] font-bold border border-amber-500/30">
                #{game.bggRank}
              </span>
            )}
          </div>

          {/* Favorite heart */}
          {onToggleFavorite && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(game.id);
              }}
              className={`absolute top-2 right-2 p-1.5 rounded-full backdrop-blur-md transition-colors ${
                game.favorite ? 'bg-rose-500/80 text-white' : 'bg-black/40 text-slate-300 hover:text-white'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${game.favorite ? 'fill-current' : ''}`} />
            </button>
          )}

          {/* Bottom Overlays inside cover */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-1 text-amber-400 font-bold">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{game.userRating ? `${game.userRating} (내평점)` : game.bggRating ? `${game.bggRating} (BGG)` : '-'}</span>
            </div>
            {getWeightBadge(game.weight)}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-3.5 space-y-2">
          {/* Titles */}
          <div>
            <h4 className="font-bold text-sm text-white group-hover:text-indigo-400 transition-colors line-clamp-1">
              {game.titleKr}
            </h4>
            <p className="text-[11px] text-slate-400 truncate">
              {game.titleEn} {game.yearPublished ? `(${game.yearPublished})` : ''}
            </p>
          </div>

          {/* Player count & playtime */}
          <div className="flex items-center gap-2.5 text-[11px] text-slate-300 pt-1 border-t border-slate-700/50">
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3 text-slate-400" />
              {game.minPlayers === game.maxPlayers ? `${game.minPlayers}인` : `${game.minPlayers}~${game.maxPlayers}인`}
              {game.bestPlayers && <span className="text-indigo-400 font-semibold">({game.bestPlayers}인추천)</span>}
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              {game.minPlaytime === game.maxPlaytime ? `${game.minPlaytime}분` : `${game.minPlaytime}~${game.maxPlaytime}분`}
            </span>
          </div>

          {/* Sleeves & Publisher info */}
          {(game.sleeves?.length || game.publisherKr) && (
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              {game.publisherKr && <span className="truncate max-w-[110px]">{game.publisherKr}</span>}
              {game.sleeves && game.sleeves.length > 0 && (
                <span className="flex items-center gap-0.5 text-sky-400 font-medium">
                  <ShieldCheck className="w-3 h-3" />
                  {game.sleeves[0].size} ({game.sleeves[0].count}장)
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom KPI Bar (Play count & Cost per play) */}
      <div className="px-3.5 py-2 bg-slate-900/60 border-t border-slate-700/60 flex items-center justify-between text-[11px]">
        <span className="text-slate-300 font-semibold">
          플레이 <strong className="text-indigo-400">{playCount}</strong>회
        </span>
        {costPerPlay !== undefined && (
          <span className="text-amber-400/90 font-medium flex items-center gap-1">
            <Coins className="w-3 h-3" />
            {costPerPlay.toLocaleString()}원/회
          </span>
        )}
      </div>

    </div>
  );
};
