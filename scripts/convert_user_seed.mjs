import fs from 'fs';
import { parseBGStatsJson } from '../src/lib/bgstats-io.ts';

// Read user_bgstats.json
const rawData = JSON.parse(fs.readFileSync('./user_bgstats.json', 'utf8'));

const { games, players, locations, plays } = parseBGStatsJson(rawData);

// Ensure Nana is marked as primary user and avatar
const updatedPlayers = players.map(p => {
  if (p.name === 'Nana' || p.isUser) {
    return { ...p, isUser: true, avatar: '👑' };
  }
  return p;
});

console.log(`Parsed ${games.length} games, ${updatedPlayers.length} players, ${locations.length} locations, ${plays.length} plays`);

// Build top 10 challenge from most played games
const gamePlayCounts = new Map();
plays.forEach(p => {
  gamePlayCounts.set(p.gameId, (gamePlayCounts.get(p.gameId) || 0) + 1);
});
const top10GameIds = Array.from(gamePlayCounts.entries())
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10)
  .map(([gId]) => gId);

const challenges = [
  {
    id: 'challenge-2026-10x10',
    title: '2026년 10x10 챌린지',
    type: '10x10',
    targetPlaysPerGame: 10,
    year: 2026,
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    gameIds: top10GameIds.length >= 5 ? top10GameIds : games.slice(0, 10).map(g => g.id),
    completed: false,
    createdAt: new Date().toISOString(),
  }
];

const fileContent = `import { Game, Play, Player, Location, Challenge } from '@/types';

export const SEED_PLAYERS: Player[] = ${JSON.stringify(updatedPlayers, null, 2)};

export const SEED_LOCATIONS: Location[] = ${JSON.stringify(locations, null, 2)};

export const SEED_GAMES: Game[] = ${JSON.stringify(games, null, 2)};

export const SEED_PLAYS: Play[] = ${JSON.stringify(plays, null, 2)};

export const SEED_CHALLENGES: Challenge[] = ${JSON.stringify(challenges, null, 2)};
`;

fs.writeFileSync('./src/lib/seed-data.ts', fileContent, 'utf8');
console.log('Successfully updated src/lib/seed-data.ts with user dataset!');
