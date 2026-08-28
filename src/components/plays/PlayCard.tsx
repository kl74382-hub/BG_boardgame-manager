'use client';

import React from 'react';
import { 
  Trophy, 
  Clock, 
  MapPin, 
  Calendar, 
  Users, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Copy, 
  ExternalLink,
  Star
} from 'lucide-react';
import { Play, Player, Game } from '@/types';
import { getBoardLifeLinks } from '@/lib/boardlife-helper';

interface PlayCardProps {
  play: Play;
  players: Player[];
  game?: Game;
  onEdit?: (play: Play) => void;
  onDelete?: (playId: string) => void;
  onClone?: (play: Play) => void;
}

export const PlayCard: React.FC<PlayCardProps> = ({
  play,
  players,
  game,
  onEdit,
  onDelete,
  onClone,
}) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const blLinks = getBoardLifeLinks(play.gameTitleKr || '', play.gameTitleEn);

  return (
    <div className="bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600/80 rounded-2xl p-4 transition-all shadow-md group relative">
      
      {/* Top Bar: Game info & date */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          {/* Game Thumbnail */}
          {play.gameImage ? (
            <img
              src={play.gameImage}
              alt=""
              className="w-12 h-12 object-cover rounded-xl shadow-md border border-slate-700/80 flex-shrink-0"
            />
          ) : (
            <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-xl flex-shrink-0">
              🎲
            </div>
          )}

          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-base text-white group-hover:text-indigo-400 transition-colors leading-tight">
                {play.gameTitleKr || '보드게임'}
              </h4>
              {play.rating && (
                <span className="flex items-center text-amber-400 text-xs font-bold">
                  ★ {play.rating}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{play.gameTitleEn}</p>
          </div>
        </div>

        {/* Action Menu Toggle */}
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors"
          >
            <MoreVertical className="w-4 h-4" />
          </button>

          {showMenu && (
            <div 
              className="absolute right-0 top-8 w-40 bg-slate-900 border border-slate-700 rounded-xl shadow-xl py-1 z-20 text-xs"
              onMouseLeave={() => setShowMenu(false)}
            >
              {onEdit && (
                <button
                  onClick={() => { setShowMenu(false); onEdit(play); }}
                  className="w-full px-3 py-2 text-left text-slate-300 hover:text-white hover:bg-slate-800 flex items-center gap-2"
                >
                  <Edit className="w-3.5 h-3.5" />
                  <span>기록 수정</span>
                </button>
              )}
              {onClone && (
                <button
                  onClick={() => { setShowMenu(false); onClone(play); }}
                  className="w-full px-3 py-2 text-left text-slate-300 hover:text-white hover:bg-slate-800 flex items-center gap-2"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>같은 멤버로 복제</span>
                </button>
              )}
              <a
                href={blLinks.infoUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full px-3 py-2 text-left text-indigo-400 hover:bg-slate-800 flex items-center gap-2"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>보드라이프 정보</span>
              </a>
              {onDelete && (
                <button
                  onClick={() => { setShowMenu(false); onDelete(play.id); }}
                  className="w-full px-3 py-2 text-left text-rose-400 hover:bg-slate-800 flex items-center gap-2"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>기록 삭제</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Session Metadata Badges */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-3 pb-3 border-b border-slate-700/50">
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5 text-slate-500" />
          {play.date}
        </span>
        <span className="text-slate-600">•</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-slate-500" />
          {play.durationMinutes}분
        </span>
        {play.locationName && (
          <>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 truncate max-w-[150px]">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              {play.locationName}
            </span>
          </>
        )}
        {play.isCoop && (
          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
            play.coopWon ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
          }`}>
            협력: {play.coopWon ? '승리' : '패배'}
          </span>
        )}
        {play.syncedToBgg && (
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            BGG
          </span>
        )}
      </div>

      {/* Player Scores & Winners Grid */}
      <div className="space-y-1.5">
        {play.playerScores.map((ps, idx) => {
          const player = players.find(p => p.id === ps.playerId);
          return (
            <div
              key={idx}
              className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                ps.winner && !play.isCoop
                  ? 'bg-amber-500/15 border border-amber-500/30 text-amber-200 font-semibold'
                  : 'bg-slate-900/60 text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                {ps.winner && !play.isCoop && (
                  <Trophy className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                )}
                {ps.startPlayer && (
                  <span className="text-[9px] px-1 py-0.2 rounded bg-sky-500/20 text-sky-400 font-bold">
                    선
                  </span>
                )}
                <span className="truncate max-w-[120px]">
                  {player?.name || '플레이어'} {player?.isUser ? '(나)' : ''}
                </span>
                {ps.role && (
                  <span className="text-[11px] text-slate-400 truncate max-w-[100px]">
                    ({ps.role})
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {ps.score !== undefined && (
                  <span className="font-bold text-slate-100">
                    {ps.score} <span className="text-[10px] text-slate-400 font-normal">점</span>
                  </span>
                )}
                {ps.newPlayer && (
                  <span className="text-[9px] px-1 rounded bg-indigo-500/20 text-indigo-300">
                    첫플
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Notes / Comments preview */}
      {play.notes && (
        <p className="text-xs text-slate-400 mt-2.5 pt-2 border-t border-slate-700/30 italic line-clamp-2">
          &quot;{play.notes}&quot;
        </p>
      )}

    </div>
  );
};
