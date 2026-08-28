import { XMLParser } from 'fast-xml-parser';
import { Game, GameStatus, Play } from '@/types';

const BGG_API_BASE = 'https://boardgamegeek.com/xmlapi2';

export interface BGGSearchResult {
  bggId: number;
  titleEn: string;
  yearPublished?: number;
  type: string;
}

export interface BGGGameDetails {
  bggId: number;
  titleEn: string;
  yearPublished?: number;
  image?: string;
  thumbnail?: string;
  minPlayers: number;
  maxPlayers: number;
  bestPlayers?: string;
  minPlaytime: number;
  maxPlaytime: number;
  playingTime: number;
  weight?: number;
  bggRating?: number;
  bggRank?: number;
  categories: string[];
  mechanics: string[];
  designers: string[];
  publishers: string[];
  description?: string;
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  parseAttributeValue: true,
});

export async function searchBGG(query: string, token?: string): Promise<BGGSearchResult[]> {
  try {
    const url = `${BGG_API_BASE}/search?query=${encodeURIComponent(query)}&type=boardgame,boardgameexpansion`;
    const headers: Record<string, string> = {
      'User-Agent': 'BGStatsKorea/1.0',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(url, { headers });
    if (!res.ok) {
      console.warn(`BGG search returned status ${res.status}`);
      return [];
    }

    const xml = await res.text();
    const data = parser.parse(xml);

    if (!data.items || !data.items.item) {
      return [];
    }

    const items = Array.isArray(data.items.item) ? data.items.item : [data.items.item];
    return items.map((item: any) => {
      let name = '';
      if (Array.isArray(item.name)) {
        const primary = item.name.find((n: any) => n['@_type'] === 'primary');
        name = primary ? primary['@_value'] : item.name[0]['@_value'];
      } else if (item.name) {
        name = item.name['@_value'];
      }

      return {
        bggId: Number(item['@_id']),
        titleEn: name || 'Unknown Game',
        yearPublished: item.yearpublished ? Number(item.yearpublished['@_value']) : undefined,
        type: item['@_type'] || 'boardgame',
      };
    });
  } catch (error) {
    console.error('Error searching BGG:', error);
    return [];
  }
}

export async function fetchBGGGameDetails(bggId: number, token?: string): Promise<BGGGameDetails | null> {
  try {
    const url = `${BGG_API_BASE}/thing?id=${bggId}&stats=1`;
    const headers: Record<string, string> = {
      'User-Agent': 'BGStatsKorea/1.0',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(url, { headers });
    if (!res.ok) return null;

    const xml = await res.text();
    const data = parser.parse(xml);
    if (!data.items || !data.items.item) return null;

    const item = Array.isArray(data.items.item) ? data.items.item[0] : data.items.item;

    // Names
    let titleEn = 'Unknown';
    if (Array.isArray(item.name)) {
      const primary = item.name.find((n: any) => n['@_type'] === 'primary');
      titleEn = primary ? primary['@_value'] : item.name[0]['@_value'];
    } else if (item.name) {
      titleEn = item.name['@_value'];
    }

    // Links (Categories, Mechanics, Designers, Publishers)
    const categories: string[] = [];
    const mechanics: string[] = [];
    const designers: string[] = [];
    const publishers: string[] = [];

    if (item.link) {
      const links = Array.isArray(item.link) ? item.link : [item.link];
      for (const link of links) {
        const type = link['@_type'];
        const val = link['@_value'];
        if (type === 'boardgamecategory') categories.push(val);
        else if (type === 'boardgamemechanic') mechanics.push(val);
        else if (type === 'boardgamedesigner') designers.push(val);
        else if (type === 'boardgamepublisher') publishers.push(val);
      }
    }

    // Stats
    let weight: number | undefined;
    let bggRating: number | undefined;
    let bggRank: number | undefined;

    if (item.statistics && item.statistics.ratings) {
      const ratings = item.statistics.ratings;
      if (ratings.averageweight) weight = parseFloat(Number(ratings.averageweight['@_value']).toFixed(2));
      if (ratings.average) bggRating = parseFloat(Number(ratings.average['@_value']).toFixed(2));

      if (ratings.ranks && ratings.ranks.rank) {
        const ranks = Array.isArray(ratings.ranks.rank) ? ratings.ranks.rank : [ratings.ranks.rank];
        const overallRank = ranks.find((r: any) => r['@_name'] === 'boardgame');
        if (overallRank && overallRank['@_value'] && !isNaN(Number(overallRank['@_value']))) {
          bggRank = Number(overallRank['@_value']);
        }
      }
    }

    // Best player count estimation from poll
    let bestPlayers: string | undefined;
    if (item.poll) {
      const polls = Array.isArray(item.poll) ? item.poll : [item.poll];
      const playerPoll = polls.find((p: any) => p['@_name'] === 'suggested_numplayers');
      if (playerPoll && playerPoll.results) {
        let maxBestVotes = -1;
        let bestNum = '';
        const results = Array.isArray(playerPoll.results) ? playerPoll.results : [playerPoll.results];
        for (const resItem of results) {
          const num = resItem['@_numplayers'];
          if (resItem.result) {
            const votes = Array.isArray(resItem.result) ? resItem.result : [resItem.result];
            const bestVoteObj = votes.find((v: any) => v['@_value'] === 'Best');
            const bestVotes = bestVoteObj ? Number(bestVoteObj['@_numvotes']) || 0 : 0;
            if (bestVotes > maxBestVotes && bestVotes > 0) {
              maxBestVotes = bestVotes;
              bestNum = num;
            }
          }
        }
        if (bestNum) bestPlayers = bestNum;
      }
    }

    return {
      bggId,
      titleEn,
      yearPublished: item.yearpublished ? Number(item.yearpublished['@_value']) : undefined,
      image: item.image || undefined,
      thumbnail: item.thumbnail || undefined,
      minPlayers: item.minplayers ? Number(item.minplayers['@_value']) : 1,
      maxPlayers: item.maxplayers ? Number(item.maxplayers['@_value']) : 4,
      bestPlayers,
      minPlaytime: item.minplaytime ? Number(item.minplaytime['@_value']) : 30,
      maxPlaytime: item.maxplaytime ? Number(item.maxplaytime['@_value']) : 60,
      playingTime: item.playingtime ? Number(item.playingtime['@_value']) : 45,
      weight,
      bggRating,
      bggRank,
      categories,
      mechanics,
      designers,
      publishers,
      description: item.description || '',
    };
  } catch (error) {
    console.error(`Error fetching BGG details for id ${bggId}:`, error);
    return null;
  }
}

export async function fetchBGGUserCollection(username: string, token?: string): Promise<Partial<Game>[]> {
  try {
    const url = `${BGG_API_BASE}/collection?username=${encodeURIComponent(username)}&stats=1`;
    const headers: Record<string, string> = {
      'User-Agent': 'BGStatsKorea/1.0',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    // Handle BGG HTTP 202 Retry queue
    let res = await fetch(url, { headers });
    let attempts = 0;
    while (res.status === 202 && attempts < 3) {
      attempts++;
      console.log(`BGG collection queue in progress, retrying in 2 seconds... (attempt ${attempts})`);
      await new Promise(resolve => setTimeout(resolve, 2500));
      res = await fetch(url, { headers });
    }

    if (!res.ok) return [];

    const xml = await res.text();
    const data = parser.parse(xml);
    if (!data.items || !data.items.item) return [];

    const items = Array.isArray(data.items.item) ? data.items.item : [data.items.item];

    return items.map((item: any) => {
      let status: GameStatus = 'played';
      if (item.status) {
        if (item.status['@_own'] === 1 || item.status['@_own'] === '1') status = 'owned';
        else if (item.status['@_wishlist'] === 1 || item.status['@_wishlist'] === '1') status = 'wishlist';
        else if (item.status['@_fortrade'] === 1 || item.status['@_fortrade'] === '1') status = 'fortrade';
        else if (item.status['@_preordered'] === 1 || item.status['@_preordered'] === '1') status = 'preordered';
        else if (item.status['@_prevowned'] === 1 || item.status['@_prevowned'] === '1') status = 'prevowned';
        else if (item.status['@_wanttoplay'] === 1 || item.status['@_wanttoplay'] === '1') status = 'wishlist';
      }

      let userRating: number | undefined;
      if (item.stats && item.stats.rating && item.stats.rating['@_value'] !== 'N/A') {
        const r = Number(item.stats.rating['@_value']);
        if (!isNaN(r) && r > 0) userRating = r;
      }

      let bggRating: number | undefined;
      let bggRank: number | undefined;
      let weight: number | undefined;

      if (item.stats && item.stats.rating) {
        const ratingObj = item.stats.rating;
        if (ratingObj.average && ratingObj.average['@_value']) {
          bggRating = parseFloat(Number(ratingObj.average['@_value']).toFixed(2));
        }
        if (ratingObj.ranks && ratingObj.ranks.rank) {
          const ranks = Array.isArray(ratingObj.ranks.rank) ? ratingObj.ranks.rank : [ratingObj.ranks.rank];
          const mainRank = ranks.find((r: any) => r['@_name'] === 'boardgame');
          if (mainRank && mainRank['@_value'] && !isNaN(Number(mainRank['@_value']))) {
            bggRank = Number(mainRank['@_value']);
          }
        }
      }

      const nameStr = typeof item.name === 'string' ? item.name : item.name?.['#text'] || 'Unknown';

      return {
        bggId: Number(item['@_objectid']),
        titleEn: nameStr,
        titleKr: nameStr,
        yearPublished: item.yearpublished ? Number(item.yearpublished) : undefined,
        image: item.image || undefined,
        thumbnail: item.thumbnail || undefined,
        status,
        userRating,
        bggRating,
        bggRank,
        minPlayers: item.stats?.['@_minplayers'] ? Number(item.stats['@_minplayers']) : 1,
        maxPlayers: item.stats?.['@_maxplayers'] ? Number(item.stats['@_maxplayers']) : 4,
        minPlaytime: item.stats?.['@_minplaytime'] ? Number(item.stats['@_minplaytime']) : 30,
        maxPlaytime: item.stats?.['@_maxplaytime'] ? Number(item.stats['@_maxplaytime']) : 60,
      };
    });
  } catch (error) {
    console.error('Error fetching BGG user collection:', error);
    return [];
  }
}

// Fetch user play records from BGG
export async function fetchBGGUserPlays(username: string, token?: string): Promise<Partial<Play>[]> {
  try {
    const url = `${BGG_API_BASE}/plays?username=${encodeURIComponent(username)}`;
    const headers: Record<string, string> = {
      'User-Agent': 'BGStatsKorea/1.0',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(url, { headers });
    if (!res.ok) return [];

    const xml = await res.text();
    const data = parser.parse(xml);
    if (!data.plays || !data.plays.play) return [];

    const playsList = Array.isArray(data.plays.play) ? data.plays.play : [data.plays.play];

    return playsList.map((item: any) => {
      const bggPlayId = Number(item['@_id']);
      const playDate = item['@_date'] || new Date().toISOString().substring(0, 10);
      const duration = item['@_length'] ? Number(item['@_length']) : 45;
      const location = item['@_location'] || undefined;
      const comments = item.comments || undefined;

      const itemObj = item.item;
      const bggGameId = itemObj ? Number(itemObj['@_objectid']) : undefined;
      const gameName = itemObj ? itemObj['@_name'] : 'Board Game';

      const playerScores: any[] = [];
      if (item.players && item.players.player) {
        const pList = Array.isArray(item.players.player) ? item.players.player : [item.players.player];
        pList.forEach((p: any) => {
          playerScores.push({
            name: p['@_name'] || p['@_username'] || 'Player',
            score: p['@_score'] ? parseFloat(p['@_score']) : undefined,
            winner: p['@_win'] === '1' || p['@_win'] === 1,
            startPlayer: p['@_startplayer'] === '1' || p['@_startplayer'] === 1,
            role: p['@_color'] || undefined,
            newPlayer: p['@_new'] === '1' || p['@_new'] === 1,
          });
        });
      }

      return {
        bggPlayId,
        date: playDate,
        durationMinutes: duration,
        locationName: location,
        notes: comments,
        syncedToBgg: true,
        gameTitleKr: gameName,
        gameTitleEn: gameName,
        playerScores,
      };
    });
  } catch (error) {
    console.error('Error fetching BGG user plays:', error);
    return [];
  }
}
