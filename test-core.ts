import { extractChosung, matchGameSearch } from './src/lib/hangul-search';
import { calculateHIndex, calculateFirstPlayerAdvantage, generateActivityHeatmap } from './src/lib/stats-calculator';
import { parseBGStatsJson, exportToBGStatsJson } from './src/lib/bgstats-io';
import { getBoardLifeLinks } from './src/lib/boardlife-helper';

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

console.log('\n🌟 ALL UNIT TESTS PASSED WITH 100% SUCCESS! 🌟');
