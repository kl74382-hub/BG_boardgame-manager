import { Game } from '@/types';

export const MANUAL_BASE_URL = 'https://kl74382-hub.github.io/BG';
export const MANUAL_HUB_URL = 'https://kl74382-hub.github.io/BG/';

export interface ManualEntry {
  id: string;
  title: string;
  subtitle?: string;
  file: string;
  aidFile?: string;
  matchTitles: string[];
  bggIds?: number[];
  boardlifeIds?: number[];
  description?: string;
}

export const KNOWN_MANUALS: ManualEntry[] = [
  {
    id: 'rock-hard-1977',
    title: 'Rock Hard: 1977 (록 하드: 1977)',
    subtitle: '매뉴얼 & 공식 에라타·FAQ 32선',
    file: 'RockHard1977.html',
    aidFile: 'RockHard_player_aid_v1.2_KO.html',
    matchTitles: ['록 하드: 1977', '록 하드', '록하드', 'rock hard: 1977', 'rock hard', 'rockhard'],
    bggIds: [402679],
    boardlifeIds: [19615],
    description: '3대 능력치, 3개 페이즈, 캔디 시스템, 공식 에라타 & 디자이너 FAQ 32선, 하우스 룰 & 메모',
  },
  {
    id: 'recall',
    title: 'Recall (리콜)',
    subtitle: '개인 참조표 v1.2',
    file: 'Recall.html',
    aidFile: 'Recall_player_aid_v1.2_KO.html',
    matchTitles: ['리콜', 'recall'],
    bggIds: [418217],
    description: '키카드 사용, 행동 상자(A~F), 리콜 및 생산, 개발 액션(건설/발굴), 이동 규칙, 하우스 룰 & 메모',
  },
];

export interface GameReferenceInfo {
  hasDedicatedManual: boolean;
  title: string;
  url: string;
  aidUrl?: string;
  hubUrl: string;
  hubSearchUrl: string;
  description?: string;
}

function cleanTitle(str?: string | null): string {
  if (!str) return '';
  return str.toLowerCase().replace(/[\s:_\-–—]/g, '');
}

export function getGameReferenceInfo(game: Game): GameReferenceInfo {
  // 1. Custom URL directly assigned to the game
  if (game.manualUrl && game.manualUrl.trim().length > 0) {
    const url = game.manualUrl.trim();
    return {
      hasDedicatedManual: true,
      title: `${game.titleKr} 전용 참조표`,
      url,
      hubUrl: MANUAL_HUB_URL,
      hubSearchUrl: `${MANUAL_HUB_URL}?q=${encodeURIComponent(game.titleKr)}`,
      description: '사용자 지정 전용 참조표 링크',
    };
  }

  // 2. Match against registered known manuals
  const normKr = cleanTitle(game.titleKr);
  const normEn = cleanTitle(game.titleEn);

  const matched = KNOWN_MANUALS.find((m) => {
    // Check ID match
    if (game.bggId && m.bggIds && m.bggIds.includes(game.bggId)) return true;
    if (game.boardlifeId && m.boardlifeIds && m.boardlifeIds.includes(game.boardlifeId)) return true;

    // Check title match
    return m.matchTitles.some((alias) => {
      const normAlias = cleanTitle(alias);
      if (!normAlias) return false;
      return (
        normKr.includes(normAlias) ||
        normAlias.includes(normKr) ||
        (normEn && (normEn.includes(normAlias) || normAlias.includes(normEn)))
      );
    });
  });

  if (matched) {
    return {
      hasDedicatedManual: true,
      title: matched.title,
      url: `${MANUAL_BASE_URL}/${matched.file}`,
      aidUrl: matched.aidFile ? `${MANUAL_BASE_URL}/${matched.aidFile}` : undefined,
      hubUrl: MANUAL_HUB_URL,
      hubSearchUrl: `${MANUAL_HUB_URL}?q=${encodeURIComponent(game.titleKr)}`,
      description: matched.description,
    };
  }

  // 3. Fallback: Reference Hub with query search
  return {
    hasDedicatedManual: false,
    title: '보드게임 참조표 모음',
    url: `${MANUAL_HUB_URL}?q=${encodeURIComponent(game.titleKr || game.titleEn || '')}`,
    hubUrl: MANUAL_HUB_URL,
    hubSearchUrl: `${MANUAL_HUB_URL}?q=${encodeURIComponent(game.titleKr || game.titleEn || '')}`,
    description: '참조표 허브에서 관련 규칙 및 참조표 검색',
  };
}
