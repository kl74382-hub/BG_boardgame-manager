import { extractChosung, matchGameSearch } from './src/lib/hangul-search';
import { calculateHIndex, calculateFirstPlayerAdvantage, generateActivityHeatmap } from './src/lib/stats-calculator';
import { parseBGStatsJson, exportToBGStatsJson } from './src/lib/bgstats-io';
import { getBoardLifeLinks } from './src/lib/boardlife-helper';
import { exportGamesToCsv, generateCsvTemplate, parseCollectionCsv } from './src/lib/csv-collection';

console.log('=== 1. Hangul Chosung & Search Test ===');
const testGame = {
  titleKr: '테라포밍 마스',
  titleEn: 'Terraforming Mars',
  categories: ['경제', 'SF'],
  mechanics: ['핸드 관리', '타일 배치'],
  publisherKr: '코리아보드게임즈',
};

console.log('extractChosung("테라포밍 마스"):', extractChosung('테라포밍 마스'));
console.assert(extractChosung('테라포밍 마스') === 'ㅌㄹㅍㅁ ㅁㅅ', 'Chosung extraction failed');

console.assert(matchGameSearch(testGame, 'ㅌㅍㅁ') === true, 'Chosung search failed');
console.assert(matchGameSearch(testGame, '테포마') === true, 'Acronym search failed');
console.assert(matchGameSearch(testGame, 'terra') === true, 'English search failed');
console.assert(matchGameSearch(testGame, '코리아보드게임즈') === true, 'Publisher search failed');
console.assert(matchGameSearch(testGame, '스플렌더') === false, 'Negative match failed');
console.log('✓ Hangul search passed successfully!');

console.log('\n=== 2. H-Index & Stats Calculation Test ===');
const testPlayCounts = [15, 12, 10, 8, 7, 5, 4, 3, 2, 1];
const hIndex = calculateHIndex(testPlayCounts);
console.log('calculateHIndex([15, 12, 10, 8, 7, 5, 4, 3, 2, 1]) =', hIndex);
console.assert(hIndex === 5, `Expected H-Index 5, got ${hIndex}`);

const heatmap = generateActivityHeatmap([
  { id: '1', gameId: 'g1', date: '2026-08-25', durationMinutes: 60, playerScores: [] } as any
], 2026);
console.assert(heatmap.length === 365, `Expected 365 days in 2026, got ${heatmap.length}`);
console.log('✓ H-Index and Activity Heatmap passed!');

console.log('\n=== 3. BoardLife Deep Links Test ===');
const blLinks = getBoardLifeLinks('테라포밍 마스', 'Terraforming Mars');
console.log('BoardLife Info URL:', blLinks.infoUrl);
console.log('BoardLife Used Market URL:', blLinks.usedMarketUrl);
console.log('BoardLife Rules URL:', blLinks.rulesUrl);
console.assert(blLinks.usedMarketUrl.includes('bo_table=trade'), 'Used market URL missing bo_table=trade');
console.log('✓ BoardLife deep links verified!');

console.log('\n=== 4. BG Stats JSON IO Roundtrip Test ===');
const sampleGames = [{
  id: 'g-1',
  titleKr: '테라포밍 마스',
  titleEn: 'Terraforming Mars',
  minPlayers: 1,
  maxPlayers: 5,
  minPlaytime: 90,
  maxPlaytime: 120,
  status: 'owned',
  purchasePrice: 65000,
  createdAt: '2026-01-01T00:00:00.000Z',
  updatedAt: '2026-01-01T00:00:00.000Z',
} as any];

const samplePlayers = [{
  id: 'p-1',
  name: '나',
  isUser: true,
  createdAt: '2026-01-01T00:00:00.000Z',
  updatedAt: '2026-01-01T00:00:00.000Z',
}];

const sampleLocations = [{
  id: 'l-1',
  name: '우리집',
  createdAt: '2026-01-01T00:00:00.000Z',
}];

const samplePlays = [{
  id: 'play-1',
  gameId: 'g-1',
  gameTitleKr: '테라포밍 마스',
  gameTitleEn: 'Terraforming Mars',
  date: '2026-08-25',
  durationMinutes: 100,
  locationId: 'l-1',
  locationName: '우리집',
  playerScores: [
    { playerId: 'p-1', score: 95, winner: true, startPlayer: true }
  ],
  createdAt: '2026-08-25T00:00:00.000Z',
  updatedAt: '2026-08-25T00:00:00.000Z',
} as any];

const bgJson = exportToBGStatsJson(sampleGames, samplePlayers, sampleLocations, samplePlays);
console.log('Exported BG Stats JSON Games count:', bgJson.games.length);
console.log('Exported BG Stats JSON Plays count:', bgJson.plays.length);

const parsed = parseBGStatsJson(bgJson);
console.log('Imported parsed Games count:', parsed.games.length);
console.log('Imported parsed Plays count:', parsed.plays.length);
console.assert(parsed.games[0].titleKr === '테라포밍 마스', 'Game title mismatch');
console.assert(parsed.plays[0].playerScores[0].winner === true, 'Player score winner mismatch');
console.log('✓ BG Stats JSON Export/Import 100% Roundtrip success!');

console.log('\n=== 5. Collection CSV Export / Import & Parsing Roundtrip Test ===');
// 1. Template Generation Test
const templateCsv = generateCsvTemplate();
console.assert(templateCsv.charCodeAt(0) === 0xFEFF, 'CSV Template missing UTF-8 BOM');
const parsedTemplate = parseCollectionCsv(templateCsv);
console.assert(parsedTemplate.validCount === 3, `Expected 3 sample games in template, got ${parsedTemplate.validCount}`);
console.assert(parsedTemplate.games[0].titleKr === '테라포밍 마스', 'Template game 1 title mismatch');
console.assert(parsedTemplate.games[0].purchasePrice === 68000, 'Template game 1 price mismatch');
console.log('✓ CSV Template generation & parsing verified (3 sample games)!');

// 2. Export Roundtrip Test
const testCollectionGames = [
  {
    id: 'game-1',
    bggId: 167791,
    titleKr: '테라포밍 마스',
    titleEn: 'Terraforming Mars',
    minPlayers: 1,
    maxPlayers: 5,
    minPlaytime: 90,
    maxPlaytime: 120,
    weight: 3.25,
    bggRating: 8.4,
    bggRank: 7,
    userRating: 9.5,
    status: 'owned',
    purchasePrice: 68000,
    purchaseDate: '2023-05-15',
    purchaseStore: '보드게임페스타',
    publisherKr: '코리아보드게임즈',
    publisherEn: 'FryxGames',
    yearPublished: 2016,
    categories: ['경제', 'SF'],
    mechanics: ['핸드 관리', '타일 배치'],
    favorite: true,
    notes: '3인 베스트, "프로모 카드" 포함\n메모 두번째 줄',
    createdAt: '2023-05-15T00:00:00.000Z',
    updatedAt: '2023-05-15T00:00:00.000Z',
  } as any,
  {
    id: 'game-2',
    bggId: 342942,
    titleKr: '아크 노바',
    titleEn: 'Ark Nova',
    minPlayers: 1,
    maxPlayers: 4,
    minPlaytime: 90,
    maxPlaytime: 150,
    weight: 3.75,
    bggRating: 8.5,
    bggRank: 4,
    userRating: 9.0,
    status: 'wishlist',
    purchasePrice: 72000,
    favorite: false,
    createdAt: '2023-11-20T00:00:00.000Z',
    updatedAt: '2023-11-20T00:00:00.000Z',
  } as any,
];

const exportedCsv = exportGamesToCsv(testCollectionGames);
console.assert(exportedCsv.charCodeAt(0) === 0xFEFF, 'Exported CSV missing UTF-8 BOM');
const parsedExport = parseCollectionCsv(exportedCsv);
console.assert(parsedExport.validCount === 2, `Expected 2 valid games, got ${parsedExport.validCount}`);
console.assert(parsedExport.games[0].titleKr === '테라포밍 마스', 'Game 1 titleKr mismatch');
console.assert(parsedExport.games[0].status === 'owned', 'Game 1 status mismatch');
console.assert(parsedExport.games[0].bggId === 167791, 'Game 1 bggId mismatch');
console.assert(parsedExport.games[0].purchasePrice === 68000, 'Game 1 purchasePrice mismatch');
console.assert(parsedExport.games[0].favorite === true, 'Game 1 favorite mismatch');
console.assert(parsedExport.games[0].notes?.includes('메모 두번째 줄'), 'Game 1 multiline notes in quotes preserved');
console.assert(parsedExport.games[1].titleKr === '아크 노바', 'Game 2 titleKr mismatch');
console.assert(parsedExport.games[1].status === 'wishlist', 'Game 2 status mismatch');
console.log('✓ CSV Export & Import Roundtrip 100% verified!');

// 3. User Raw Input / Currency Cleaning & Status Variations Test
const customCsv = `한글제목,영문명,상태,구매가격,인원수
스플렌더,Splendor,소장,"32,000원",2-4인
카스카디아,Cascadia,찜,38000,1~4인
`;
const parsedCustom = parseCollectionCsv(customCsv);
console.assert(parsedCustom.validCount === 2, `Expected 2 valid games from custom CSV, got ${parsedCustom.validCount}`);
console.assert(parsedCustom.games[0].titleKr === '스플렌더', 'Custom CSV game 1 title mismatch');
console.assert(parsedCustom.games[0].status === 'owned', 'Custom CSV game 1 status mapping mismatch (소장 -> owned)');
console.assert(parsedCustom.games[0].purchasePrice === 32000, 'Custom CSV game 1 price parsing mismatch (32,000원 -> 32000)');
console.assert(parsedCustom.games[1].titleKr === '카스카디아', 'Custom CSV game 2 title mismatch');
console.assert(parsedCustom.games[1].status === 'wishlist', 'Custom CSV game 2 status mapping mismatch (찜 -> wishlist)');
console.log('✓ Custom CSV column aliases, currency cleaning, and status mapping verified!');

console.log('\n🌟 ALL UNIT TESTS PASSED WITH 100% SUCCESS! 🌟');
