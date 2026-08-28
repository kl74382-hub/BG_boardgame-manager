import fs from 'fs';

const rawJson = JSON.parse(fs.readFileSync('C:/Users/kl743/.gemini/antigravity/brain/41b31ab1-e4c0-4eb0-ade7-f6357a3e56b1/.user_uploaded/media_1787907687747.json', 'utf8'));

// Copy to project
fs.copyFileSync('C:/Users/kl743/.gemini/antigravity/brain/41b31ab1-e4c0-4eb0-ade7-f6357a3e56b1/.user_uploaded/media_1787907687747.json', './public/user_bgstats.json');

const meRefId = rawJson.userInfo?.meRefId || 52;
const rawPlayers = rawJson.players || [];
const rawLocations = rawJson.locations || [];
const rawGames = rawJson.games || [];
const rawPlays = rawJson.plays || [];

const playerMap = new Map();
const locationMap = new Map();
const gameMap = new Map();

// 1. Players
const players = rawPlayers.map(p => {
  const isMe = p.id === meRefId || p.name === 'Nana' || p.name === '나';
  const playerObj = {
    id: `player-${p.id}`,
    name: p.name || '알 수 없음',
    isUser: isMe,
    avatar: isMe ? '👑' : '🎲',
    bggUsername: p.bggUsername || (isMe ? 'Bitnara' : undefined),
    createdAt: p.modificationDate ? p.modificationDate.replace(' ', 'T') + '.000Z' : new Date().toISOString(),
    updatedAt: p.modificationDate ? p.modificationDate.replace(' ', 'T') + '.000Z' : new Date().toISOString(),
  };
  playerMap.set(p.id, playerObj);
  return playerObj;
});

// 2. Locations
const locations = rawLocations.map(l => {
  const locObj = {
    id: `loc-${l.id}`,
    name: l.name,
    createdAt: l.modificationDate ? l.modificationDate.replace(' ', 'T') + '.000Z' : new Date().toISOString(),
  };
  locationMap.set(l.id, locObj);
  return locObj;
});

// 3. Games
const games = rawGames.map(g => {
  let status = 'played';
  let purchasePrice;
  let organizer;
  let sleeves = [];

  if (g.copies && g.copies.length > 0) {
    const copy = g.copies[0];
    if (copy.statusOwned) status = 'owned';
    else if (copy.statusWishlist || copy.statusWantToBuy || copy.statusWantToPlay) status = 'wishlist';
    else if (copy.statusForTrade) status = 'fortrade';
    else if (copy.statusPreordered) status = 'preordered';
    else if (copy.statusPrevOwned) status = 'prevowned';

    if (copy.metaData) {
      try {
        const meta = typeof copy.metaData === 'string' ? JSON.parse(copy.metaData) : copy.metaData;
        if (meta.PricePaid && !isNaN(Number(meta.PricePaid))) {
          purchasePrice = Number(meta.PricePaid);
        }
      } catch (e) {}
    }
  }

  const titleEn = g.bggName || g.name;
  const titleKr = g.name || g.bggName;

  let userRating;
  if (g.rating && !isNaN(Number(g.rating))) {
    userRating = parseFloat((Number(g.rating) / 10).toFixed(1));
  }

  const gameObj = {
    id: `game-${g.id}`,
    bggId: g.bggId || undefined,
    titleKr: titleKr,
    titleEn: titleEn,
    yearPublished: g.bggYear || undefined,
    image: g.urlImage || undefined,
    thumbnail: g.urlThumb || undefined,
    minPlayers: g.minPlayerCount || 1,
    maxPlayers: g.maxPlayerCount || 4,
    minPlaytime: g.minPlayTime || 30,
    maxPlaytime: g.maxPlayTime || 60,
    bggRating: userRating, // initial estimate or rating
    userRating: userRating,
    status,
    purchasePrice,
    organizer,
    designers: g.designers ? g.designers.split(', ') : [],
    createdAt: g.modificationDate ? g.modificationDate.replace(' ', 'T') + '.000Z' : new Date().toISOString(),
    updatedAt: g.modificationDate ? g.modificationDate.replace(' ', 'T') + '.000Z' : new Date().toISOString(),
  };
  gameMap.set(g.id, gameObj);
  return gameObj;
});

// 4. Plays
const plays = rawPlays.map(p => {
  const game = gameMap.get(p.gameRefId);
  const location = locationMap.get(p.locationRefId);

  const playerScores = (p.playerScores || []).map(ps => {
    const player = playerMap.get(ps.playerRefId);
    return {
      playerId: player?.id || `player-${ps.playerRefId}`,
      name: player?.name || '알 수 없음',
      score: ps.score !== null && ps.score !== undefined && ps.score !== '' && !isNaN(Number(ps.score)) 
        ? Number(ps.score) 
        : undefined,
      winner: ps.winner === true || ps.winner === 'true' || ps.winner === 1,
      startPlayer: ps.startPlayer === true || ps.startPlayer === 'true' || ps.startPlayer === 1,
      role: ps.role || undefined,
      newPlayer: ps.newPlayer === true || ps.newPlayer === 'true' || ps.newPlayer === 1,
    };
  });

  return {
    id: `play-${p.uuid || p.id || Math.random().toString()}`,
    gameId: game?.id || `game-${p.gameRefId}`,
    gameTitleKr: game?.titleKr || '보드게임',
    gameTitleEn: game?.titleEn || 'Board Game',
    gameImage: game?.thumbnail || game?.image,
    date: p.playDate ? p.playDate.substring(0, 10) : new Date().toISOString().substring(0, 10),
    durationMinutes: p.durationMin || 45,
    locationId: location?.id,
    locationName: location?.name,
    notes: p.comments,
    playerScores,
    createdAt: p.entryDate ? p.entryDate.replace(' ', 'T') + '.000Z' : new Date().toISOString(),
    updatedAt: p.modificationDate ? p.modificationDate.replace(' ', 'T') + '.000Z' : new Date().toISOString(),
  };
});

// 5. Challenges (10x10 challenge based on top 10 most played games)
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

export const SEED_PLAYERS: Player[] = ${JSON.stringify(players, null, 2)};

export const SEED_LOCATIONS: Location[] = ${JSON.stringify(locations, null, 2)};

export const SEED_GAMES: Game[] = ${JSON.stringify(games, null, 2)};

export const SEED_PLAYS: Play[] = ${JSON.stringify(plays, null, 2)};

export const SEED_CHALLENGES: Challenge[] = ${JSON.stringify(challenges, null, 2)};
`;

fs.writeFileSync('./src/lib/seed-data.ts', fileContent, 'utf8');

console.log(`🎉 COMPLETE! Converted:
- Games: ${games.length}
- Plays: ${plays.length}
- Players: ${players.length}
- Locations: ${locations.length}`);
