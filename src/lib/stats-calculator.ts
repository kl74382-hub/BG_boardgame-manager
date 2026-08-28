import { Game, Play, Player } from '@/types';

// Calculate H-Index given an array of play counts
export function calculateHIndex(playCounts: number[]): number {
  if (!playCounts || playCounts.length === 0) return 0;
  const sorted = [...playCounts].sort((a, b) => b - a);
  let h = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }
  return h;
}

export interface GamePlayStats {
  gameId: string;
  gameTitleKr: string;
  gameTitleEn: string;
  thumbnail?: string;
  playCount: number;
  totalDurationMinutes: number;
  userPlays: number;
  userWins: number;
  userWinRate: number;
  highScore?: number;
  averageScore?: number;
  lastPlayedDate?: string;
  costPerPlay?: number;
  purchasePrice?: number;
}

// Calculate play statistics per game
export function calculateGameStatsMap(games: Game[], plays: Play[], currentUserId: string = 'player-me'): Map<string, GamePlayStats> {
  const map = new Map<string, GamePlayStats>();

  games.forEach(g => {
    map.set(g.id, {
      gameId: g.id,
      gameTitleKr: g.titleKr,
      gameTitleEn: g.titleEn,
      thumbnail: g.thumbnail || g.image,
      playCount: 0,
      totalDurationMinutes: 0,
      userPlays: 0,
      userWins: 0,
      userWinRate: 0,
      purchasePrice: g.purchasePrice,
      costPerPlay: g.purchasePrice,
    });
  });

  const scoresByGame = new Map<string, number[]>();

  plays.forEach(play => {
    let stat = map.get(play.gameId);
    if (!stat) {
      stat = {
        gameId: play.gameId,
        gameTitleKr: play.gameTitleKr || '알 수 없는 게임',
        gameTitleEn: play.gameTitleEn || 'Unknown Game',
        thumbnail: play.gameImage,
        playCount: 0,
        totalDurationMinutes: 0,
        userPlays: 0,
        userWins: 0,
        userWinRate: 0,
      };
      map.set(play.gameId, stat);
    }

    stat.playCount += 1;
    stat.totalDurationMinutes += play.durationMinutes || 0;
    if (!stat.lastPlayedDate || play.date > stat.lastPlayedDate) {
      stat.lastPlayedDate = play.date;
    }

    // Check current user participation and scores
    const userScore = play.playerScores.find(ps => ps.playerId === currentUserId);
    if (userScore) {
      stat.userPlays += 1;
      if (userScore.winner || (play.isCoop && play.coopWon)) {
        stat.userWins += 1;
      }
      if (userScore.score !== undefined) {
        if (!scoresByGame.has(play.gameId)) scoresByGame.set(play.gameId, []);
        scoresByGame.get(play.gameId)!.push(userScore.score);
      }
    }
  });

  // Post process averages & cost per play
  map.forEach((stat, gameId) => {
    if (stat.userPlays > 0) {
      stat.userWinRate = Math.round((stat.userWins / stat.userPlays) * 100);
    }
    const scores = scoresByGame.get(gameId);
    if (scores && scores.length > 0) {
      stat.highScore = Math.max(...scores);
      stat.averageScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    }
    if (stat.purchasePrice && stat.playCount > 0) {
      stat.costPerPlay = Math.round(stat.purchasePrice / stat.playCount);
    }
  });

  return map;
}

export interface PlayerStats {
  player: Player;
  totalPlays: number;
  totalWins: number;
  winRate: number;
  headToHeadWithUser?: {
    totalSharedPlays: number;
    userWins: number;
    playerWins: number;
    userWinRateAgainst: number;
  };
}

// Calculate individual and head-to-head player stats
export function calculateAllPlayerStats(players: Player[], plays: Play[], currentUserId: string = 'player-me'): PlayerStats[] {
  return players.map(player => {
    let totalPlays = 0;
    let totalWins = 0;
    let sharedPlays = 0;
    let userWinsInShared = 0;
    let playerWinsInShared = 0;

    plays.forEach(play => {
      const ps = play.playerScores.find(p => p.playerId === player.id);
      const userPs = play.playerScores.find(p => p.playerId === currentUserId);

      if (ps) {
        totalPlays += 1;
        if (ps.winner || (play.isCoop && play.coopWon)) {
          totalWins += 1;
        }

        if (userPs && player.id !== currentUserId) {
          sharedPlays += 1;
          if (userPs.winner) userWinsInShared += 1;
          if (ps.winner) playerWinsInShared += 1;
        }
      }
    });

    const winRate = totalPlays > 0 ? Math.round((totalWins / totalPlays) * 100) : 0;
    const userWinRateAgainst = sharedPlays > 0 ? Math.round((userWinsInShared / sharedPlays) * 100) : 0;

    return {
      player,
      totalPlays,
      totalWins,
      winRate,
      headToHeadWithUser: player.id !== currentUserId ? {
        totalSharedPlays: sharedPlays,
        userWins: userWinsInShared,
        playerWins: playerWinsInShared,
        userWinRateAgainst,
      } : undefined,
    };
  });
}

// Calculate First Player Advantage in competitive plays
export function calculateFirstPlayerAdvantage(plays: Play[]): {
  firstPlayerPlays: number;
  firstPlayerWins: number;
  firstPlayerWinRate: number;
  nonFirstPlayerWinRate: number;
} {
  let firstPlayerPlays = 0;
  let firstPlayerWins = 0;
  let totalCompetitivePlays = 0;

  plays.forEach(play => {
    if (play.isCoop || play.isSolo || play.playerScores.length < 2) return;

    const startP = play.playerScores.find(ps => ps.startPlayer);
    if (startP) {
      firstPlayerPlays += 1;
      totalCompetitivePlays += 1;
      if (startP.winner) {
        firstPlayerWins += 1;
      }
    }
  });

  const firstPlayerWinRate = firstPlayerPlays > 0 ? Math.round((firstPlayerWins / firstPlayerPlays) * 100) : 0;
  const nonFirstPlayerWinRate = firstPlayerPlays > 0 ? 100 - firstPlayerWinRate : 0;

  return {
    firstPlayerPlays,
    firstPlayerWins,
    firstPlayerWinRate,
    nonFirstPlayerWinRate,
  };
}

// Generate 365 days Activity Grass Data for the given year
export function generateActivityHeatmap(plays: Play[], year: number = new Date().getFullYear()): { date: string; count: number; level: number }[] {
  const countsByDate = new Map<string, number>();

  plays.forEach(play => {
    if (play.date && play.date.startsWith(String(year))) {
      countsByDate.set(play.date, (countsByDate.get(play.date) || 0) + 1);
    }
  });

  const result: { date: string; count: number; level: number }[] = [];
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().substring(0, 10);
    const count = countsByDate.get(dateStr) || 0;
    let level = 0;
    if (count === 1) level = 1;
    else if (count === 2) level = 2;
    else if (count >= 3 && count < 5) level = 3;
    else if (count >= 5) level = 4;

    result.push({ date: dateStr, count, level });
  }

  return result;
}

// Aggregate Mechanics and Categories play frequency
export function calculateMechanismsAndCategories(games: Game[], plays: Play[]): {
  topMechanics: { name: string; count: number }[];
  topCategories: { name: string; count: number }[];
} {
  const gameMap = new Map<string, Game>();
  games.forEach(g => gameMap.set(g.id, g));

  const mechanicCounts = new Map<string, number>();
  const categoryCounts = new Map<string, number>();

  plays.forEach(play => {
    const game = gameMap.get(play.gameId);
    if (!game) return;

    (game.mechanics || []).forEach(m => {
      mechanicCounts.set(m, (mechanicCounts.get(m) || 0) + 1);
    });
    (game.categories || []).forEach(c => {
      categoryCounts.set(c, (categoryCounts.get(c) || 0) + 1);
    });
  });

  const topMechanics = Array.from(mechanicCounts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  const topCategories = Array.from(categoryCounts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return { topMechanics, topCategories };
}
