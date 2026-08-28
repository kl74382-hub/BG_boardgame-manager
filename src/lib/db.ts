import Dexie, { type EntityTable } from 'dexie';
import { Game, Play, Player, Location, Challenge, AppSettings } from '@/types';
import { SEED_GAMES, SEED_PLAYERS, SEED_LOCATIONS, SEED_PLAYS, SEED_CHALLENGES } from './seed-data';

export class BGDatabase extends Dexie {
  games!: EntityTable<Game, 'id'>;
  plays!: EntityTable<Play, 'id'>;
  players!: EntityTable<Player, 'id'>;
  locations!: EntityTable<Location, 'id'>;
  challenges!: EntityTable<Challenge, 'id'>;

  constructor() {
    super('BGStatsProDB');
    this.version(1).stores({
      games: 'id, bggId, titleKr, titleEn, status, weight, bggRating, bggRank, favorite, createdAt',
      plays: 'id, gameId, date, durationMinutes, locationId, isCoop, isSolo, createdAt',
      players: 'id, name, isUser, createdAt',
      locations: 'id, name, createdAt',
      challenges: 'id, type, year, createdAt',
    });
  }
}

export const db = new BGDatabase();

const DEFAULT_SETTINGS: AppSettings = {
  userName: 'Nana',
  bggUsername: 'Bitnara',
  bggApiToken: '',
  autoSyncBgg: false,
  theme: 'dark',
  currency: 'KRW',
  hIndexYearly: false,
};

export function getStoredSettings(): AppSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const saved = localStorage.getItem('bg_stats_settings');
    if (!saved) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
  } catch (e) {
    return DEFAULT_SETTINGS;
  }
}

export function saveStoredSettings(settings: AppSettings) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('bg_stats_settings', JSON.stringify(settings));
}

const SEED_VERSION_KEY = 'bg_seed_version_2026_full';

// Seed the database if empty or upgrade from old 10-game dummy seed
export async function ensureSeedData() {
  if (typeof window === 'undefined') return;

  const gameCount = await db.games.count();
  const currentSeedVersion = localStorage.getItem(SEED_VERSION_KEY);

  // If empty or user had the old 10-game placeholder data
  if (gameCount === 0 || (!currentSeedVersion && gameCount <= 10)) {
    await resetDatabaseToSeed();
    localStorage.setItem(SEED_VERSION_KEY, 'v2_full');
    console.log(`Database seeded with user dataset (${SEED_GAMES.length} games, ${SEED_PLAYS.length} plays, ${SEED_PLAYERS.length} players).`);
  }
}

// Clear and reset to initial seed data
export async function resetDatabaseToSeed() {
  await db.transaction('rw', db.games, db.players, db.locations, db.plays, db.challenges, async () => {
    await db.games.clear();
    await db.players.clear();
    await db.locations.clear();
    await db.plays.clear();
    await db.challenges.clear();

    await db.games.bulkAdd(SEED_GAMES);
    await db.players.bulkAdd(SEED_PLAYERS);
    await db.locations.bulkAdd(SEED_LOCATIONS);
    await db.plays.bulkAdd(SEED_PLAYS);
    await db.challenges.bulkAdd(SEED_CHALLENGES);
  });
}
