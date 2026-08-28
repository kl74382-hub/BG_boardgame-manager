import fs from 'fs';
import readline from 'readline';

const fileStream = fs.createReadStream('C:/Users/kl743/.gemini/antigravity/brain/41b31ab1-e4c0-4eb0-ade7-f6357a3e56b1/.system_generated/logs/transcript_full.jsonl');
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

let targetUserJson = null;

for await (const line of rl) {
  if (line.includes('"tags":') && line.includes('"Bitnara"')) {
    try {
      const parsedLine = JSON.parse(line);
      const content = parsedLine.content || '';
      const tagsIdx = content.indexOf('{"tags":');
      if (tagsIdx !== -1) {
        const jsonCandidate = content.substring(tagsIdx);
        targetUserJson = JSON.parse(jsonCandidate);
      }
    } catch (e) {
      // If content is not wrapped in JSON or direct
    }
  }
}

if (!targetUserJson) {
  // Let's search raw line
  const rawAll = fs.readFileSync('C:/Users/kl743/.gemini/antigravity/brain/41b31ab1-e4c0-4eb0-ade7-f6357a3e56b1/.system_generated/logs/transcript_full.jsonl', 'utf8');
  const bitnaraIdx = rawAll.lastIndexOf('Bitnara');
  const tagsIdx = rawAll.lastIndexOf('{"tags":', bitnaraIdx);
  const endIdx = rawAll.indexOf('}}', bitnaraIdx) + 2;
  const rawSub = rawAll.substring(tagsIdx, endIdx);
  // Unescape if needed
  try {
    targetUserJson = JSON.parse(rawSub);
  } catch (e) {
    try {
      targetUserJson = JSON.parse(rawSub.replace(/\\"/g, '"').replace(/\\\\/g, '\\'));
    } catch (e2) {
      console.error('Failed to parse raw substring:', e2);
      process.exit(1);
    }
  }
}

console.log(`Extracted: Games=${targetUserJson.games?.length}, Plays=${targetUserJson.plays?.length}, Players=${targetUserJson.players?.length}, Locations=${targetUserJson.locations?.length}`);

fs.writeFileSync('./user_bgstats.json', JSON.stringify(targetUserJson, null, 2), 'utf8');

function parseBGStats(json) {
  const meRefId = json.userInfo?.meRefId;
  const rawPlayers = json.players || [];
  const rawLocations = json.locations || [];
  const rawGames = json.games || [];
  const rawPlays = json.plays || [];

  const playerMap = new Map();
  const locationMap = new Map();
  const gameMap = new Map();

  const players = rawPlayers.map(p => {
    const isMe = p.id === meRefId || p.name === 'Nana' || p.name === '나';
    const playerObj = {
      id: `player-${p.id}`,
      name: p.name || '알 수 없음',
      isUser: isMe,
      avatar: isMe ? '👑' : '🎲',
      bggUsername: p.bggUsername || undefined,
      createdAt: p.modificationDate ? p.modificationDate.replace(' ', 'T') + '.000Z' : new Date().toISOString(),
      updatedAt: p.modificationDate ? p.modificationDate.replace(' ', 'T') + '.000Z' : new Date().toISOString(),
    };
    playerMap.set(p.id, playerObj);
    return playerObj;
  });

  const locations = rawLocations.map(l => {
    const locObj = {
      id: `loc-${l.id}`,
      name: l.name,
      createdAt: l.modificationDate ? l.modificationDate.replace(' ', 'T') + '.000Z' : new Date().toISOString(),
    };
    locationMap.set(l.id, locObj);
    return locObj;
  });

  const games = rawGames.map(g => {
    let status = 'played';
    let purchasePrice;
    let organizer;

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
      bggRating: g.rating ? parseFloat((g.rating / 10).toFixed(2)) : undefined,
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
        winner: ps.winner || false,
        startPlayer: ps.startPlayer || false,
        role: ps.role || undefined,
        newPlayer: ps.newPlayer || false,
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

  return { games, players, locations, plays };
}

const { games, players, locations, plays } = parseBGStats(targetUserJson);

// Top played games for 10x10 challenge
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
console.log(`✅ Success! Seed data updated with ${games.length} games, ${players.length} players, ${locations.length} locations, and ${plays.length} plays!`);
