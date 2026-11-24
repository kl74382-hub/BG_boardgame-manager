// Korean Hangul Chosung (Initial Consonants) & Bilingual Search Utilities

const CHOSUNG_LIST = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ',
  'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

const CHOSUNG_SET = new Set(CHOSUNG_LIST);

const HANGUL_START = 0xAC00; // '가'
const HANGUL_END = 0xD7A3;   // '힣'

// Extract Chosung for a single character
function extractCharChosung(ch: string): string {
  const code = ch.charCodeAt(0);
  if (code >= HANGUL_START && code <= HANGUL_END) {
    const chosungIndex = Math.floor((code - HANGUL_START) / (21 * 28));
    return CHOSUNG_LIST[chosungIndex];
  }
  return ch;
}

// Extract Chosung string from Korean text
export function extractChosung(text: string): string {
  if (!text) return '';
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += extractCharChosung(text[i]);
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
  if (!cleaned) return false;
  return cleaned.split('').every(ch => CHOSUNG_SET.has(ch));
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

// Check whether target matches query starting at startIdx, allowing Hangul Chosung chars
// in query to match full Hangul syllables with that initial consonant (e.g., "김ㅍ" matches "김파랑")
function matchMixedAtPosition(target: string, query: string, startIdx: number): boolean {
  if (startIdx + query.length > target.length) return false;
  for (let i = 0; i < query.length; i++) {
    const qChar = query[i];
    const tChar = target[startIdx + i];
    if (qChar === tChar) continue;
    if (CHOSUNG_SET.has(qChar) && extractCharChosung(tChar) === qChar) continue;
    return false;
  }
  return true;
}

function hasMixedSubstring(target: string, query: string): boolean {
  if (query.length > target.length) return false;
  for (let i = 0; i <= target.length - query.length; i++) {
    if (matchMixedAtPosition(target, query, i)) return true;
  }
  return false;
}

/**
 * Returns true if the score corresponds to a prefix / initial / acronym priority match.
 * Used to visually group or prioritize items starting with the typed letter/chosung.
 */
export function isPrefixPriorityScore(score: number): boolean {
  return score >= 80;
}

/**
 * Computes a priority relevance score for matching any text against a query.
 * Higher score = higher priority:
 *  - 100: Exact match
 *  -  95: Direct prefix match (e.g. "A" -> "Ark Nova", "아" -> "아크 노바")
 *  -  90: Chosung / mixed Hangul-Chosung prefix match (e.g. "ㄱ" -> "가이아", "김ㅍ" -> "김파랑")
 *  -  85: Word-initial prefix match from word 0 (e.g. "tm" -> "Terraforming Mars", "ㅌㅁ" -> "테라포밍 마스")
 *  -  82: Pure Chosung subsequence starting at index 0 (e.g. "ㅌㅍㅁ" -> "테라포밍 마스")
 *  -  70: Secondary word starts with query (e.g. "A" -> "Lost Ruins of Arnak")
 *  -  50: Direct substring match anywhere (e.g. "A" -> "Terraforming Mars")
 *  -  45: Chosung / mixed Hangul-Chosung contiguous substring anywhere
 *  -  35: Pure Chosung subsequence anywhere
 *  -   0: No match
 */
export function getTextSearchScore(text: string, query: string): number {
  if (!query || !query.trim()) return 1;
  if (!text || !text.trim()) return 0;

  const rawText = text.trim().toLowerCase();
  const rawQuery = query.trim().toLowerCase();
  const normText = rawText.replace(/\s+/g, '');
  const normQuery = rawQuery.replace(/\s+/g, '');

  if (!normQuery) return 1;

  // 1. Exact match
  if (rawText === rawQuery || normText === normQuery) {
    return 100;
  }

  // 2. Direct prefix match
  if (rawText.startsWith(rawQuery) || normText.startsWith(normQuery)) {
    return 95;
  }

  // 3. Chosung / mixed Hangul-Chosung prefix match at start
  if (matchMixedAtPosition(normText, normQuery, 0)) {
    return 90;
  }

  const words = rawText.split(/[\s:,\-·/()[\]!?.]+/).filter(Boolean);

  // 4. Word-initial prefix match starting from first word (for multi-word titles, query length >= 2)
  if (words.length > 1 && normQuery.length >= 2) {
    const wordInitials = words.map(w => extractCharChosung(w[0])).join('');
    if (wordInitials.startsWith(normQuery)) {
      return 85;
    }
  }

  const chosungOnly = isChosungOnly(normQuery);
  const textChosung = chosungOnly ? extractChosung(normText) : '';

  // 5. Pure Chosung subsequence starting at the very first character (e.g. "ㅌㅍㅁ" -> "ㅌㄹㅍㅁㅁㅅ")
  if (chosungOnly && textChosung.length > 0 && textChosung[0] === normQuery[0] && isSubsequence(normQuery, textChosung)) {
    return 82;
  }

  // 6. Any non-first word starts with query (direct or Chosung)
  if (words.length > 1) {
    for (let i = 1; i < words.length; i++) {
      const w = words[i];
      if (w.startsWith(rawQuery) || w.startsWith(normQuery) || matchMixedAtPosition(w, normQuery, 0)) {
        return 70;
      }
    }
  }

  // 7. Direct substring match anywhere
  if (normText.includes(normQuery)) {
    return 50;
  }

  // 8. Chosung / mixed contiguous substring match anywhere
  if (hasMixedSubstring(normText, normQuery)) {
    return 45;
  }

  // 9. Pure Chosung subsequence anywhere
  if (chosungOnly && isSubsequence(normQuery, textChosung)) {
    return 35;
  }

  return 0;
}

export function matchTextSearch(text: string, query: string): boolean {
  return getTextSearchScore(text, query) > 0;
}

// Priority scoring for games: scores Korean Title, English Title, Chosung, Acronyms, and Categories
export function getGameSearchScore(
  game: { titleKr: string; titleEn: string; categories?: string[]; mechanics?: string[]; publisherKr?: string | null },
  query: string
): number {
  if (!query || !query.trim()) return 1;

  const normalizedQuery = query.trim().toLowerCase().replace(/\s+/g, '');
  let bestScore = Math.max(
    getTextSearchScore(game.titleKr || '', query),
    getTextSearchScore(game.titleEn || '', query)
  );

  // Acronym check (e.g. "테포마", "ㅌㅍㅁ", "세듀", "아딱")
  const mappedQuery = KOREAN_ACRONYMS[normalizedQuery];
  if (mappedQuery) {
    const mappedNorm = mappedQuery.replace(/\s+/g, '').toLowerCase();
    const krTitleNormalized = (game.titleKr || '').toLowerCase().replace(/\s+/g, '');
    const enTitleNormalized = (game.titleEn || '').toLowerCase().replace(/\s+/g, '');
    if (krTitleNormalized.includes(mappedNorm) || enTitleNormalized.includes(mappedNorm)) {
      bestScore = Math.max(bestScore, 88);
    }
  }

  if (bestScore > 0) return bestScore;

  // Secondary metadata match (Publisher / Category / Mechanic)
  if (game.publisherKr && getTextSearchScore(game.publisherKr, query) > 0) {
    return 20;
  }
  if (game.categories && game.categories.some(c => getTextSearchScore(c, query) > 0)) {
    return 20;
  }
  if (game.mechanics && game.mechanics.some(m => getTextSearchScore(m, query) > 0)) {
    return 20;
  }

  return 0;
}

// Main matching function: matches Korean Title, English Title, Chosung, Acronyms, and Categories
export function matchGameSearch(
  game: { titleKr: string; titleEn: string; categories?: string[]; mechanics?: string[]; publisherKr?: string | null },
  query: string
): boolean {
  return getGameSearchScore(game, query) > 0;
}
