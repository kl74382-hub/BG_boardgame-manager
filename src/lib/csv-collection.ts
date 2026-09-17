import { Game, GameStatus } from '@/types';
import { db } from './db';

// Standard Column Headers for Korean Board Game Collection CSV
export const CSV_COLUMNS = [
  { key: 'titleKr', label: '한글명', required: true, example: '테라포밍 마스' },
  { key: 'titleEn', label: '영문명', required: false, example: 'Terraforming Mars' },
  { key: 'status', label: '상태', required: false, example: '보유중' },
  { key: 'bggId', label: 'BGG번호', required: false, example: '167791' },
  { key: 'minPlayers', label: '최소인원', required: false, example: '1' },
  { key: 'maxPlayers', label: '최대인원', required: false, example: '5' },
  { key: 'minPlaytime', label: '최소시간(분)', required: false, example: '90' },
  { key: 'maxPlaytime', label: '최대시간(분)', required: false, example: '120' },
  { key: 'weight', label: '난이도(웨이트)', required: false, example: '3.25' },
  { key: 'bggRating', label: 'BGG평점', required: false, example: '8.4' },
  { key: 'bggRank', label: 'BGG순위', required: false, example: '7' },
  { key: 'userRating', label: '내평점(1-10)', required: false, example: '9.0' },
  { key: 'purchasePrice', label: '구매가(원)', required: false, example: '68000' },
  { key: 'purchaseDate', label: '구매일(YYYY-MM-DD)', required: false, example: '2023-05-15' },
  { key: 'purchaseStore', label: '구매처', required: false, example: '보드게임페스타' },
  { key: 'publisherKr', label: '한국발매사', required: false, example: '코리아보드게임즈' },
  { key: 'publisherEn', label: '원발매사', required: false, example: 'FryxGames' },
  { key: 'yearPublished', label: '출시년도', required: false, example: '2016' },
  { key: 'categories', label: '카테고리', required: false, example: '경제; SF; 산업/제조' },
  { key: 'mechanics', label: '메커니즘', required: false, example: '핸드 관리; 타일 배치' },
  { key: 'favorite', label: '즐겨찾기(Y/N)', required: false, example: 'Y' },
  { key: 'notes', label: '메모', required: false, example: '3인 추천, 헬라스 확장 포함' },
] as const;

export type CSVColumnKey = typeof CSV_COLUMNS[number]['key'];

// Korean status to GameStatus mapping
export const STATUS_KOREAN_MAP: Record<string, GameStatus> = {
  '보유': 'owned',
  '보유중': 'owned',
  '소장': 'owned',
  '소장중': 'owned',
  'owned': 'owned',
  '위시': 'wishlist',
  '위시리스트': 'wishlist',
  '찜': 'wishlist',
  '구매예정': 'wishlist',
  'wishlist': 'wishlist',
  '해본게임': 'played',
  '해봄': 'played',
  '플레이': 'played',
  'played': 'played',
  '방출': 'fortrade',
  '교환': 'fortrade',
  '방출/교환': 'fortrade',
  '판매': 'fortrade',
  '판매중': 'fortrade',
  'fortrade': 'fortrade',
  '선주문': 'preordered',
  '예약': 'preordered',
  '펀딩': 'preordered',
  'preordered': 'preordered',
  '이전보유': 'prevowned',
  '과거소장': 'prevowned',
  '방출완료': 'prevowned',
  'prevowned': 'prevowned',
};

// Reverse status to friendly Korean label
export const STATUS_LABEL_MAP: Record<GameStatus, string> = {
  owned: '보유중',
  wishlist: '위시리스트',
  played: '해본게임',
  fortrade: '방출/교환',
  preordered: '선주문',
  prevowned: '이전보유',
};

// Header alias lookup map (lowercase -> standard key)
const HEADER_ALIAS_MAP: Record<string, CSVColumnKey> = {
  // titleKr
  '한글명': 'titleKr',
  '한글제목': 'titleKr',
  '게임명': 'titleKr',
  '게임이름': 'titleKr',
  '제목': 'titleKr',
  'titlekr': 'titleKr',
  'title_kr': 'titleKr',
  'title': 'titleKr',
  'name': 'titleKr',

  // titleEn
  '영문명': 'titleEn',
  '영문제목': 'titleEn',
  '영어명': 'titleEn',
  'titleen': 'titleEn',
  'title_en': 'titleEn',
  'engname': 'titleEn',

  // status
  '상태': 'status',
  '보유상태': 'status',
  '컬렉션상태': 'status',
  'status': 'status',

  // bggId
  'bgg번호': 'bggId',
  'bggid': 'bggId',
  'bgg_id': 'bggId',
  'bgg아이디': 'bggId',
  'bgg code': 'bggId',

  // minPlayers
  '최소인원': 'minPlayers',
  '최소 인원': 'minPlayers',
  'minplayers': 'minPlayers',
  'min_players': 'minPlayers',
  '최소플레이어': 'minPlayers',

  // maxPlayers
  '최대인원': 'maxPlayers',
  '최대 인원': 'maxPlayers',
  'maxplayers': 'maxPlayers',
  'max_players': 'maxPlayers',
  '최대플레이어': 'maxPlayers',

  // minPlaytime
  '최소시간': 'minPlaytime',
  '최소 시간': 'minPlaytime',
  '최소시간(분)': 'minPlaytime',
  'minplaytime': 'minPlaytime',
  'min_playtime': 'minPlaytime',

  // maxPlaytime
  '최대시간': 'maxPlaytime',
  '최대 시간': 'maxPlaytime',
  '최대시간(분)': 'maxPlaytime',
  '플레이시간': 'maxPlaytime',
  '플레이 시간': 'maxPlaytime',
  '소요시간': 'maxPlaytime',
  'maxplaytime': 'maxPlaytime',
  'max_playtime': 'maxPlaytime',

  // weight
  '난이도': 'weight',
  '웨이트': 'weight',
  '난이도(웨이트)': 'weight',
  'weight': 'weight',
  'complexity': 'weight',

  // bggRating
  'bgg평점': 'bggRating',
  'bggrating': 'bggRating',
  'bgg_rating': 'bggRating',
  '긱평점': 'bggRating',

  // bggRank
  'bgg순위': 'bggRank',
  'bggrank': 'bggRank',
  'bgg_rank': 'bggRank',
  '긱순위': 'bggRank',
  '순위': 'bggRank',

  // userRating
  '내평점': 'userRating',
  '개인평점': 'userRating',
  '내평점(1-10)': 'userRating',
  '평점': 'userRating',
  'userrating': 'userRating',
  'user_rating': 'userRating',
  'rating': 'userRating',

  // purchasePrice
  '구매가': 'purchasePrice',
  '구매가격': 'purchasePrice',
  '구매가(원)': 'purchasePrice',
  '가격': 'purchasePrice',
  '구입가': 'purchasePrice',
  'purchaseprice': 'purchasePrice',
  'purchase_price': 'purchasePrice',
  'price': 'purchasePrice',

  // purchaseDate
  '구매일': 'purchaseDate',
  '구매일자': 'purchaseDate',
  '구매일(yyyy-mm-dd)': 'purchaseDate',
  '구입일': 'purchaseDate',
  'purchasedate': 'purchaseDate',
  'purchase_date': 'purchaseDate',

  // purchaseStore
  '구매처': 'purchaseStore',
  '구입처': 'purchaseStore',
  '판매처': 'purchaseStore',
  'purchasestore': 'purchaseStore',
  'purchase_store': 'purchaseStore',

  // publisherKr
  '한국발매사': 'publisherKr',
  '국내발매사': 'publisherKr',
  '한글발매사': 'publisherKr',
  '발매사': 'publisherKr',
  '출판사': 'publisherKr',
  'publisherkr': 'publisherKr',
  'publisher_kr': 'publisherKr',

  // publisherEn
  '원발매사': 'publisherEn',
  '해외발매사': 'publisherEn',
  'publisheren': 'publisherEn',
  'publisher_en': 'publisherEn',

  // yearPublished
  '출시년도': 'yearPublished',
  '출시년': 'yearPublished',
  '발매년도': 'yearPublished',
  'yearpublished': 'yearPublished',
  'year_published': 'yearPublished',
  'year': 'yearPublished',

  // categories
  '카테고리': 'categories',
  '장르': 'categories',
  'categories': 'categories',
  'category': 'categories',

  // mechanics
  '메커니즘': 'mechanics',
  '시스템': 'mechanics',
  'mechanics': 'mechanics',
  'mechanic': 'mechanics',

  // favorite
  '즐겨찾기': 'favorite',
  '즐겨찾기(y/n)': 'favorite',
  'favorite': 'favorite',
  'fav': 'favorite',

  // notes
  '메모': 'notes',
  '비고': 'notes',
  '설명': 'notes',
  'notes': 'notes',
  'note': 'notes',
  'memo': 'notes',
};

// Escape a CSV cell (RFC 4180)
function escapeCsvCell(val: any): string {
  if (val === null || val === undefined) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

/**
 * Export an array of Game items to CSV with UTF-8 BOM for Excel compatibility
 */
export function exportGamesToCsv(games: Game[]): string {
  // UTF-8 BOM prefix
  const BOM = '\uFEFF';

  // Headers
  const headerRow = CSV_COLUMNS.map(col => escapeCsvCell(col.label)).join(',');

  // Data rows
  const rows = games.map(game => {
    return [
      escapeCsvCell(game.titleKr || ''),
      escapeCsvCell(game.titleEn || ''),
      escapeCsvCell(STATUS_LABEL_MAP[game.status] || game.status || '보유중'),
      escapeCsvCell(game.bggId || ''),
      escapeCsvCell(game.minPlayers ?? 1),
      escapeCsvCell(game.maxPlayers ?? 4),
      escapeCsvCell(game.minPlaytime ?? 30),
      escapeCsvCell(game.maxPlaytime ?? 60),
      escapeCsvCell(game.weight ? Number(game.weight).toFixed(2) : ''),
      escapeCsvCell(game.bggRating ? Number(game.bggRating).toFixed(1) : ''),
      escapeCsvCell(game.bggRank || ''),
      escapeCsvCell(game.userRating ? Number(game.userRating).toFixed(1) : ''),
      escapeCsvCell(game.purchasePrice || ''),
      escapeCsvCell(game.purchaseDate || ''),
      escapeCsvCell(game.purchaseStore || ''),
      escapeCsvCell(game.publisherKr || ''),
      escapeCsvCell(game.publisherEn || ''),
      escapeCsvCell(game.yearPublished || ''),
      escapeCsvCell(Array.isArray(game.categories) ? game.categories.join('; ') : ''),
      escapeCsvCell(Array.isArray(game.mechanics) ? game.mechanics.join('; ') : ''),
      escapeCsvCell(game.favorite ? 'Y' : 'N'),
      escapeCsvCell(game.notes || ''),
    ].join(',');
  });

  return BOM + [headerRow, ...rows].join('\r\n');
}

/**
 * Generate a sample CSV template for users to download and fill out
 */
export function generateCsvTemplate(): string {
  const BOM = '\uFEFF';
  const headerRow = CSV_COLUMNS.map(col => escapeCsvCell(col.label)).join(',');

  const sampleRows = [
    [
      '테라포밍 마스',
      'Terraforming Mars',
      '보유중',
      '167791',
      '1',
      '5',
      '90',
      '120',
      '3.25',
      '8.4',
      '7',
      '9.5',
      '68000',
      '2023-05-15',
      '보드게임페스타',
      '코리아보드게임즈',
      'FryxGames',
      '2016',
      '경제; SF; 산업/제조',
      '핸드 관리; 타일 배치; 엔진 빌딩',
      'Y',
      '3인 베스트 플레이 추천, 헬라스 확장 포함',
    ],
    [
      '아크 노바',
      'Ark Nova',
      '보유중',
      '342942',
      '1',
      '4',
      '90',
      '150',
      '3.75',
      '8.5',
      '4',
      '9.0',
      '72000',
      '2023-11-20',
      '다이브다이스',
      '코리아보드게임즈',
      'Feuerland Spiele',
      '2021',
      '동물; 환경',
      '핸드 관리; 타일 배치; 세트 수집',
      'Y',
      '마린 월드 확장 보유',
    ],
    [
      '스플렌더',
      'Splendor',
      '보유중',
      '148228',
      '2',
      '4',
      '30',
      '30',
      '1.78',
      '7.4',
      '200',
      '8.0',
      '32000',
      '2022-08-10',
      '쿠팡',
      '코리아보드게임즈',
      'Space Cowboys',
      '2014',
      '경제; 중세',
      '엔진 빌딩; 오픈 드래프팅',
      'N',
      '가족/입문자용 필수 게임',
    ],
  ].map(row => row.map(escapeCsvCell).join(','));

  return BOM + [headerRow, ...sampleRows].join('\r\n');
}

/**
 * Standard RFC 4180 CSV parser supporting quoted values with newlines and escaped quotes
 */
export function parseRawCsv(text: string): string[][] {
  // Remove BOM if present
  let cleanText = text;
  if (cleanText.charCodeAt(0) === 0xFEFF) {
    cleanText = cleanText.slice(1);
  }

  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentCell = '';
  let inQuotes = false;
  let i = 0;

  while (i < cleanText.length) {
    const char = cleanText[i];
    const nextChar = cleanText[i + 1];

    if (inQuotes) {
      if (char === '"') {
        if (nextChar === '"') {
          // Escaped quote
          currentCell += '"';
          i += 2;
          continue;
        } else {
          // End of quotes
          inQuotes = false;
          i++;
          continue;
        }
      } else {
        currentCell += char;
        i++;
        continue;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
        i++;
        continue;
      } else if (char === ',') {
        currentRow.push(currentCell.trim());
        currentCell = '';
        i++;
        continue;
      } else if (char === '\r') {
        if (nextChar === '\n') {
          i++;
        }
        currentRow.push(currentCell.trim());
        rows.push(currentRow);
        currentRow = [];
        currentCell = '';
        i++;
        continue;
      } else if (char === '\n') {
        currentRow.push(currentCell.trim());
        rows.push(currentRow);
        currentRow = [];
        currentCell = '';
        i++;
        continue;
      } else {
        currentCell += char;
        i++;
      }
    }
  }

  // Push trailing cell & row if non-empty
  if (currentCell.length > 0 || currentRow.length > 0) {
    currentRow.push(currentCell.trim());
    rows.push(currentRow);
  }

  // Filter out empty rows (e.g. completely empty lines at end of file)
  return rows.filter(r => r.some(c => c.length > 0));
}

// Clean number strings (e.g. "65,000원" -> 65000, "90분" -> 90, "4명" -> 4)
function parseCleanNumber(val: string | undefined): number | undefined {
  if (!val) return undefined;
  const cleaned = val.replace(/,/g, '').replace(/[^\d.-]/g, '').trim();
  if (!cleaned) return undefined;
  const num = parseFloat(cleaned);
  return isNaN(num) ? undefined : num;
}

export interface ParsedCsvResult {
  games: Partial<Game>[];
  totalRows: number;
  validCount: number;
  errorCount: number;
  warnings: string[];
  errors: string[];
}

/**
 * Parse CSV text into Game objects with validation and helpful feedback
 */
export function parseCollectionCsv(csvText: string): ParsedCsvResult {
  const rawRows = parseRawCsv(csvText);

  if (rawRows.length === 0) {
    return {
      games: [],
      totalRows: 0,
      validCount: 0,
      errorCount: 0,
      warnings: [],
      errors: ['CSV 파일이 비어있습니다.'],
    };
  }

  const headerRow = rawRows[0];
  const dataRows = rawRows.slice(1);

  // Map header indices to CSVColumnKey
  const headerIndexMap = new Map<number, CSVColumnKey>();
  headerRow.forEach((h, idx) => {
    const normalized = h.toLowerCase().replace(/\s+/g, '');
    const mappedKey = HEADER_ALIAS_MAP[normalized] || HEADER_ALIAS_MAP[h.toLowerCase()];
    if (mappedKey) {
      headerIndexMap.set(idx, mappedKey);
    }
  });

  // Check if at least title column was found
  const hasTitleColumn = Array.from(headerIndexMap.values()).some(k => k === 'titleKr' || k === 'titleEn');
  if (!hasTitleColumn) {
    // If no header matched, maybe user provided raw CSV without header or unrecognized columns
    return {
      games: [],
      totalRows: dataRows.length,
      validCount: 0,
      errorCount: dataRows.length,
      warnings: [],
      errors: [
        '게임명(한글명 또는 영문명) 컬럼을 찾을 수 없습니다. 샘플 양식을 다운로드하여 컬럼명을 확인해 주세요.',
      ],
    };
  }

  const games: Partial<Game>[] = [];
  const warnings: string[] = [];
  const errors: string[] = [];

  dataRows.forEach((row, rowIdx) => {
    const lineNum = rowIdx + 2; // 1-based, +1 for header
    const rowObj: Partial<Record<CSVColumnKey, string>> = {};

    row.forEach((cellVal, colIdx) => {
      const key = headerIndexMap.get(colIdx);
      if (key) {
        rowObj[key] = cellVal;
      }
    });

    const titleKr = (rowObj.titleKr || '').trim();
    const titleEn = (rowObj.titleEn || '').trim();

    if (!titleKr && !titleEn) {
      warnings.push(`${lineNum}행: 게임명이 입력되지 않아 건너뛰었습니다.`);
      return;
    }

    // Determine status
    let status: GameStatus = 'owned';
    if (rowObj.status) {
      const cleanStatus = rowObj.status.trim().toLowerCase();
      if (STATUS_KOREAN_MAP[cleanStatus]) {
        status = STATUS_KOREAN_MAP[cleanStatus];
      }
    }

    // Min & Max Players
    const minPlayers = parseCleanNumber(rowObj.minPlayers) || 1;
    const maxPlayers = parseCleanNumber(rowObj.maxPlayers) || Math.max(minPlayers, 4);

    // Min & Max Playtime
    const minPlaytime = parseCleanNumber(rowObj.minPlaytime) || 30;
    const maxPlaytime = parseCleanNumber(rowObj.maxPlaytime) || Math.max(minPlaytime, 60);

    // Parse BGG ID
    const bggId = parseCleanNumber(rowObj.bggId);

    // Parse Ratings
    const weight = parseCleanNumber(rowObj.weight);
    const bggRating = parseCleanNumber(rowObj.bggRating);
    const bggRank = parseCleanNumber(rowObj.bggRank);
    const userRating = parseCleanNumber(rowObj.userRating);

    // Purchase info
    const purchasePrice = parseCleanNumber(rowObj.purchasePrice);
    const purchaseDate = rowObj.purchaseDate ? rowObj.purchaseDate.replace(/\./g, '-').replace(/\//g, '-') : undefined;
    const purchaseStore = rowObj.purchaseStore || undefined;

    // Categories & Mechanics (split by ; or ,)
    const categories = rowObj.categories
      ? rowObj.categories.split(/[;,]/).map(s => s.trim()).filter(Boolean)
      : [];
    const mechanics = rowObj.mechanics
      ? rowObj.mechanics.split(/[;,]/).map(s => s.trim()).filter(Boolean)
      : [];

    // Favorite flag
    const favVal = (rowObj.favorite || '').toLowerCase().trim();
    const favorite = favVal === 'y' || favVal === 'yes' || favVal === 'true' || favVal === '1' || favVal === 'o';

    const game: Partial<Game> = {
      titleKr: titleKr || titleEn,
      titleEn: titleEn || titleKr,
      status,
      bggId,
      minPlayers,
      maxPlayers,
      minPlaytime,
      maxPlaytime,
      weight,
      bggRating,
      bggRank,
      userRating,
      purchasePrice,
      purchaseDate,
      purchaseStore,
      publisherKr: rowObj.publisherKr?.trim() || undefined,
      publisherEn: rowObj.publisherEn?.trim() || undefined,
      yearPublished: parseCleanNumber(rowObj.yearPublished),
      categories,
      mechanics,
      favorite,
      notes: rowObj.notes?.trim() || undefined,
    };

    games.push(game);
  });

  return {
    games,
    totalRows: dataRows.length,
    validCount: games.length,
    errorCount: dataRows.length - games.length,
    warnings,
    errors,
  };
}

export type DuplicateMode = 'merge' | 'skip' | 'add';

export interface BatchImportStats {
  added: number;
  updated: number;
  skipped: number;
  total: number;
}

/**
 * Batch import parsed games into Dexie IndexedDB
 */
export async function batchImportGames(
  parsedGames: Partial<Game>[],
  mode: DuplicateMode = 'merge'
): Promise<BatchImportStats> {
  const existingGames = await db.games.toArray();
  
  // Build lookup maps for existing games: by bggId and by normalized Korean/English title
  const existingByBggId = new Map<number, Game>();
  const existingByTitleKr = new Map<string, Game>();

  existingGames.forEach(g => {
    if (g.bggId) existingByBggId.set(g.bggId, g);
    if (g.titleKr) existingByTitleKr.set(g.titleKr.trim().toLowerCase(), g);
    if (g.titleEn) existingByTitleKr.set(g.titleEn.trim().toLowerCase(), g);
  });

  const now = new Date().toISOString();
  let addedCount = 0;
  let updatedCount = 0;
  let skippedCount = 0;

  const toPut: Game[] = [];

  for (let i = 0; i < parsedGames.length; i++) {
    const item = parsedGames[i];
    const normTitleKr = (item.titleKr || '').trim().toLowerCase();
    const normTitleEn = (item.titleEn || '').trim().toLowerCase();

    // Check match
    const matched =
      (item.bggId ? existingByBggId.get(item.bggId) : undefined) ||
      (normTitleKr ? existingByTitleKr.get(normTitleKr) : undefined) ||
      (normTitleEn ? existingByTitleKr.get(normTitleEn) : undefined);

    if (matched) {
      if (mode === 'skip') {
        skippedCount++;
        continue;
      } else if (mode === 'merge') {
        // Update existing game with provided values
        const updatedGame: Game = {
          ...matched,
          ...Object.fromEntries(
            Object.entries(item).filter(([_, v]) => v !== undefined && v !== '')
          ),
          id: matched.id, // Preserve ID
          updatedAt: now,
        };
        toPut.push(updatedGame);
        updatedCount++;
        continue;
      }
      // If mode === 'add', proceed to add as new below
    }

    // Add new game
    const newId = `game-${Date.now()}-${i}`;
    const newGame: Game = {
      id: newId,
      titleKr: item.titleKr || item.titleEn || '게임명 없음',
      titleEn: item.titleEn || item.titleKr || 'Untitled',
      status: item.status || 'owned',
      bggId: item.bggId,
      minPlayers: item.minPlayers || 1,
      maxPlayers: item.maxPlayers || 4,
      minPlaytime: item.minPlaytime || 30,
      maxPlaytime: item.maxPlaytime || 60,
      weight: item.weight,
      bggRating: item.bggRating,
      bggRank: item.bggRank,
      userRating: item.userRating,
      purchasePrice: item.purchasePrice,
      purchaseDate: item.purchaseDate,
      purchaseStore: item.purchaseStore,
      publisherKr: item.publisherKr,
      publisherEn: item.publisherEn,
      yearPublished: item.yearPublished,
      categories: item.categories || [],
      mechanics: item.mechanics || [],
      favorite: item.favorite || false,
      notes: item.notes,
      createdAt: now,
      updatedAt: now,
    };

    toPut.push(newGame);
    addedCount++;

    // Update map to prevent duplicates within the same import batch
    if (newGame.bggId) existingByBggId.set(newGame.bggId, newGame);
    existingByTitleKr.set(newGame.titleKr.trim().toLowerCase(), newGame);
  }

  // Bulk put into Dexie
  if (toPut.length > 0) {
    await db.games.bulkPut(toPut);
  }

  return {
    added: addedCount,
    updated: updatedCount,
    skipped: skippedCount,
    total: parsedGames.length,
  };
}
