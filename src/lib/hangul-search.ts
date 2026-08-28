// Korean Hangul Chosung (Initial Consonants) & Bilingual Search Utilities

const CHOSUNG_LIST = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

const HANGUL_START = 0xAC00; // '가'
const HANGUL_END = 0xD7A3;   // '힣'

// Extract Chosung string from Korean text
export function extractChosung(text: string): string {
  if (!text) return '';
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if (code >= HANGUL_START && code <= HANGUL_END) {
      const chosungIndex = Math.floor((code - HANGUL_START) / (21 * 28));
      result += CHOSUNG_LIST[chosungIndex];
    } else {
      result += text[i];
    }
  }
  return result;
}

// Popular Korean Board Game Nicknames & Abbreviations mapping
export const KOREAN_ACRONYMS: Record<string, string> = {
  '테포마': '테라포밍 마스',
  'ㅌㅍㅁ': '테라포밍 마스',
  '세듀': '7 원더스 듀얼',
  'ㅅㄷ': '7 원더스 듀얼',
  '아크노바': '아크 노바',
  'ㅇㅋㄴㅂ': '아크 노바',
  '브버': '브라스: 버밍엄',
  'ㅂㅂ': '브라스: 버밍엄',
  '듄': '듄: 임페리움',
  'ㄷ': '듄: 임페리움',
  '다여': '다윈의 여정',
  'ㄷㅇ': '다윈의 여정',
  '그웨트': '그레이트 웨스턴 트레일',
  'ㄱㅇㅌ': '그레이트 웨스턴 트레일',
  '버건디': '버건디의 성',
  'ㅂㄱㄷ': '버건디의 성',
  '글룸': '글룸헤이븐',
  'ㄱㄹ': '글룸헤이븐',
  '사자턱': '글룸헤이븐: 사자의 턱',
  'ㅅㅈㅌ': '글룸헤이븐: 사자의 턱',
  '정령섬': '스피릿 아일랜드',
  'ㅈㄹㅅ': '스피릿 아일랜드',
  '아딱': '아컴호러 카드게임',
  'ㅇㄸ': '아컴호러 카드게임',
  '광기': '광기의 저택',
  'ㄱㄱ': '광기의 저택',
  '가이아': '가이아 프로젝트',
  'ㄱㅇㅇ': '가이아 프로젝트',
  '하오크': '하트 오브 크라운',
  'ㅎㅇㅋ': '하트 오브 크라운',
  '클랭크': '클랭크!',
  'ㅋㄹㅋ': '클랭크!',
  '아르낙': '아르낙의 잊혀진 유적',
  'ㅇㄹㄴ': '아르낙의 잊혀진 유적',
  '스플렌더': '스플렌더',
  'ㅅㅍㄹㄷ': '스플렌더',
  '카스카디아': '카스카디아',
  'ㅋㅅㅋㄷㅇ': '카스카디아',
  '윙스팬': '윙스팬',
  'ㅇㅅㅍ': '윙스팬',
};

// Check if query is purely Korean Chosung characters
export function isChosungOnly(query: string): boolean {
  if (!query) return false;
  const cleaned = query.replace(/\s+/g, '');
  return cleaned.split('').every(ch => CHOSUNG_LIST.includes(ch));
}

// Subsequence check helper (e.g. query "ㅌㅍㅁ" matches "ㅌㄹㅍㅁㅁㅅ")
function isSubsequence(query: string, target: string): boolean {
  let qIdx = 0;
  for (let tIdx = 0; tIdx < target.length && qIdx < query.length; tIdx++) {
    if (query[qIdx] === target[tIdx]) {
      qIdx++;
    }
  }
  return qIdx === query.length;
}

// Main matching function: matches Korean Title, English Title, Chosung, Acronyms, and Categories
export function matchGameSearch(
  game: { titleKr: string; titleEn: string; categories?: string[]; mechanics?: string[]; publisherKr?: string },
  query: string
): boolean {
  if (!query || !query.trim()) return true;

  const normalizedQuery = query.trim().toLowerCase().replace(/\s+/g, '');
  const krTitleNormalized = game.titleKr.toLowerCase().replace(/\s+/g, '');
  const enTitleNormalized = game.titleEn.toLowerCase().replace(/\s+/g, '');
  
  // 1. Direct text substring match
  if (krTitleNormalized.includes(normalizedQuery) || enTitleNormalized.includes(normalizedQuery)) {
    return true;
  }

  // 2. Acronym check
  const mappedQuery = KOREAN_ACRONYMS[normalizedQuery];
  if (mappedQuery && (krTitleNormalized.includes(mappedQuery.replace(/\s+/g, '').toLowerCase()) || enTitleNormalized.includes(mappedQuery.replace(/\s+/g, '').toLowerCase()))) {
    return true;
  }

  // 3. Chosung match (full substring or subsequence)
  if (isChosungOnly(query)) {
    const krChosung = extractChosung(game.titleKr).replace(/\s+/g, '');
    if (krChosung.includes(normalizedQuery) || isSubsequence(normalizedQuery, krChosung)) {
      return true;
    }
  }

  // 4. Publisher / Category / Mechanic match
  if (game.publisherKr && game.publisherKr.toLowerCase().replace(/\s+/g, '').includes(normalizedQuery)) {
    return true;
  }
  if (game.categories && game.categories.some(c => c.toLowerCase().replace(/\s+/g, '').includes(normalizedQuery))) {
    return true;
  }
  if (game.mechanics && game.mechanics.some(m => m.toLowerCase().replace(/\s+/g, '').includes(normalizedQuery))) {
    return true;
  }

  return false;
}
