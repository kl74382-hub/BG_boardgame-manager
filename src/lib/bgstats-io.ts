import { Game, Play, Player, Location, BGStatsExportRoot, BGStatsExportGame, BGStatsExportPlayer, BGStatsExportLocation, BGStatsExportPlay } from '@/types';

// Convert BG Stats JSON backup to our App database objects
export function parseBGStatsJson(jsonData: any): {
  games: Game[];
  players: Player[];
  locations: Location[];
  plays: Play[];
} {
  const games: Game[] = [];
  const players: Player[] = [];
  const locations: Location[] = [];
  const plays: Play[] = [];

  // Mapping from BG Stats integer IDs to UUIDs
  const gameIdMap = new Map<number, string>();
  const playerIdMap = new Map<number, string>();
  const locationIdMap = new Map<number, string>();

  // 1. Parse Players
  if (Array.isArray(jsonData.players)) {
    jsonData.players.forEach((p: BGStatsExportPlayer) => {
      const id = p.uuid || `player-${p.id}`;
      gameIdMap.set(p.id, id);
      playerIdMap.set(p.id, id);

      const isUser = jsonData.userInfo?.mePlayerRefId === p.id;

      players.push({
        id,
        name: p.name || '알 수 없는 플레이어',
        isUser,
        bggUsername: p.bggUsername || undefined,
        avatar: isUser ? '👑' : '🎲',
        createdAt: p.modificationDate || new Date().toISOString(),
        updatedAt: p.modificationDate || new Date().toISOString(),
      });
    });
  }

  // 2. Parse Locations
  if (Array.isArray(jsonData.locations)) {
    jsonData.locations.forEach((loc: BGStatsExportLocation) => {
      const id = loc.uuid || `loc-${loc.id}`;
      locationIdMap.set(loc.id, id);

      locations.push({
        id,
        name: loc.name || '알 수 없는 장소',
        createdAt: loc.modificationDate || new Date().toISOString(),
      });
    });
  }

  // 3. Parse Games
  if (Array.isArray(jsonData.games)) {
    jsonData.games.forEach((g: BGStatsExportGame) => {
      const id = g.uuid || `game-${g.id}`;
      gameIdMap.set(g.id, id);

      // Check purchase price from copies if present
      let purchasePrice: number | undefined;
      if (g.copies && g.copies.length > 0 && g.copies[0].pricePaid) {
        const parsed = parseFloat(g.copies[0].pricePaid);
        if (!isNaN(parsed)) purchasePrice = parsed;
      }

      games.push({
        id,
        bggId: g.bggId ? Number(g.bggId) : undefined,
        titleKr: g.name || '제목 없음',
        titleEn: g.name || 'Untitled',
        image: g.image || undefined,
        thumbnail: g.thumbnail || undefined,
        minPlayers: g.minPlayers || 1,
        maxPlayers: g.maxPlayers || 4,
        minPlaytime: g.minPlayTime || 30,
        maxPlaytime: g.maxPlayTime || 60,
        status: 'owned',
        userRating: g.rating ? Number(g.rating) : undefined,
        purchasePrice,
        isExpansion: g.isExpansion === 1,
        createdAt: g.modificationDate || new Date().toISOString(),
        updatedAt: g.modificationDate || new Date().toISOString(),
      });
    });
  }

  // 4. Parse Plays
  if (Array.isArray(jsonData.plays)) {
    jsonData.plays.forEach((play: BGStatsExportPlay) => {
      const id = play.uuid || `play-${play.id}`;
      const gameUuid = gameIdMap.get(play.gameRefId);
      if (!gameUuid) return; // Skip orphaned plays

      const matchingGame = games.find(g => g.id === gameUuid);
      const locUuid = play.locationRefId ? locationIdMap.get(play.locationRefId) : undefined;
      const matchingLoc = locations.find(l => l.id === locUuid);

      const playerScores = (play.playerScores || []).map((ps) => {
        const playerUuid = playerIdMap.get(ps.playerRefId) || `player-${ps.playerRefId}`;
        const scoreNum = ps.score ? parseFloat(ps.score) : undefined;
        return {
          playerId: playerUuid,
          role: ps.role || undefined,
          startPlayer: Boolean(ps.startPlayer),
          score: isNaN(Number(scoreNum)) ? undefined : scoreNum,
          rank: ps.rank ? Number(ps.rank) : undefined,
          winner: Boolean(ps.winner),
          newPlayer: Boolean(ps.newPlayer),
        };
      });

      // Cooperative play check
      const isCoop = play.scoringSetting === 2; // In BG Stats, 2 often denotes coop
      const coopWon = isCoop ? play.nemesisWon === 0 : undefined;

      plays.push({
        id,
        bggPlayId: play.bggId ? Number(play.bggId) : undefined,
        gameId: gameUuid,
        gameTitleKr: matchingGame?.titleKr || '게임',
        gameTitleEn: matchingGame?.titleEn || 'Game',
        gameImage: matchingGame?.thumbnail || matchingGame?.image,
        date: play.playDate ? play.playDate.substring(0, 10) : new Date().toISOString().substring(0, 10),
        durationMinutes: play.durationMin || 45,
        locationId: locUuid,
        locationName: matchingLoc?.name,
        isCoop,
        coopWon,
        isSolo: playerScores.length === 1,
        playerScores,
        notes: play.comments || undefined,
        rating: play.rating ? Number(play.rating) : undefined,
        syncedToBgg: Boolean(play.bggId),
        createdAt: play.modificationDate || new Date().toISOString(),
        updatedAt: play.modificationDate || new Date().toISOString(),
      });
    });
  }

  return { games, players, locations, plays };
}

// Export our App database objects to standard BG Stats JSON format
export function exportToBGStatsJson(
  games: Game[],
  players: Player[],
  locations: Location[],
  plays: Play[]
): BGStatsExportRoot {
  // Build reverse sequential IDs
  const gameToIdMap = new Map<string, number>();
  const playerToIdMap = new Map<string, number>();
  const locationToIdMap = new Map<string, number>();

  const exportGames: BGStatsExportGame[] = games.map((g, idx) => {
    const intId = idx + 1;
    gameToIdMap.set(g.id, intId);
    return {
      id: intId,
      uuid: g.id,
      bggId: g.bggId,
      name: g.titleKr || g.titleEn,
      image: g.image,
      thumbnail: g.thumbnail,
      minPlayers: g.minPlayers,
      maxPlayers: g.maxPlayers,
      minPlayTime: g.minPlaytime,
      maxPlayTime: g.maxPlaytime,
      isExpansion: g.isExpansion ? 1 : 0,
      rating: g.userRating,
      copies: g.purchasePrice ? [{ pricePaid: String(g.purchasePrice), currency: 'KRW' }] : undefined,
      modificationDate: g.updatedAt || new Date().toISOString(),
    };
  });

  let meRefId: number | undefined;
  const exportPlayers: BGStatsExportPlayer[] = players.map((p, idx) => {
    const intId = idx + 1;
    playerToIdMap.set(p.id, intId);
    if (p.isUser) meRefId = intId;
    return {
      id: intId,
      uuid: p.id,
      name: p.name,
      bggUsername: p.bggUsername,
      modificationDate: p.updatedAt || new Date().toISOString(),
    };
  });

  const exportLocations: BGStatsExportLocation[] = locations.map((l, idx) => {
    const intId = idx + 1;
    locationToIdMap.set(l.id, intId);
    return {
      id: intId,
      uuid: l.id,
      name: l.name,
      modificationDate: l.createdAt || new Date().toISOString(),
    };
  });

  const exportPlays: BGStatsExportPlay[] = plays.map((play, idx) => {
    const intId = idx + 1;
    const gameRefId = gameToIdMap.get(play.gameId) || 1;
    const locationRefId = play.locationId ? locationToIdMap.get(play.locationId) : undefined;

    const playerScores = play.playerScores.map(ps => ({
      playerRefId: playerToIdMap.get(ps.playerId) || 1,
      score: ps.score !== undefined ? String(ps.score) : undefined,
      winner: ps.winner ? 1 : 0,
      startPlayer: ps.startPlayer ? 1 : 0,
      newPlayer: ps.newPlayer ? 1 : 0,
      role: ps.role,
      rank: ps.rank,
    }));

    return {
      id: intId,
      uuid: play.id,
      gameRefId,
      playDate: play.date + ' 12:00:00',
      durationMin: play.durationMinutes,
      locationRefId,
      scoringSetting: play.isCoop ? 2 : 0,
      nemesisWon: play.isCoop && !play.coopWon ? 1 : 0,
      playerScores,
      comments: play.notes,
      rating: play.rating,
      bggId: play.bggPlayId,
      modificationDate: play.updatedAt || new Date().toISOString(),
    };
  });

  return {
    games: exportGames,
    players: exportPlayers,
    locations: exportLocations,
    plays: exportPlays,
    userInfo: meRefId ? { mePlayerRefId: meRefId } : undefined,
  };
}
