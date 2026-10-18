import { db } from './db';
import { supabase, isSupabaseConfigured } from './supabase';
import { Game, Play } from '@/types';

export interface SyncResult {
  success: boolean;
  uploadedGames: number;
  uploadedPlays: number;
  error?: string;
}

/**
 * Upload all local Dexie games and plays to the current user's Supabase account.
 */
export async function syncLocalDataToSupabase(userId: string): Promise<SyncResult> {
  if (!isSupabaseConfigured) {
    return {
      success: false,
      uploadedGames: 0,
      uploadedPlays: 0,
      error: 'Supabase 환경변수가 설정되지 않아 로컬 모드로 동작 중입니다.',
    };
  }

  try {
    const localGames = await db.games.toArray();
    const localPlays = await db.plays.toArray();

    // Map local games to Supabase user_games schema
    const gamesToInsert = localGames.map((g) => ({
      user_id: userId,
      bgg_id: g.bggId || null,
      boardlife_id: g.boardlifeId || null,
      title_kr: g.titleKr,
      title_en: g.titleEn,
      year_published: g.yearPublished || null,
      image: g.image || null,
      thumbnail: g.thumbnail || null,
      min_players: g.minPlayers,
      max_players: g.maxPlayers,
      best_players: g.bestPlayers || null,
      min_playtime: g.minPlaytime,
      max_playtime: g.maxPlaytime,
      weight: g.weight || null,
      bgg_rating: g.bggRating || null,
      bgg_rank: g.bggRank || null,
      categories: g.categories || [],
      mechanics: g.mechanics || [],
      designers: g.designers || [],
      publisher_kr: g.publisherKr || null,
      publisher_en: g.publisherEn || null,
      edition: g.edition || null,
      status: g.status,
      user_rating: g.userRating || null,
      purchase_price: g.purchasePrice || null,
      purchase_price_raw: g.purchasePriceRaw || null,
      resale_price: g.resalePrice || null,
      delivery_status: g.deliveryStatus || null,
      shipping_date: g.shippingDate || null,
      shipping_history: g.shippingHistory || null,
      purchase_date: g.purchaseDate || null,
      purchase_store: g.purchaseStore || null,
      sleeves: g.sleeves || null,
      organizer: typeof g.organizer === 'string' ? g.organizer : null,
      notes: g.notes || null,
      links: g.links || null,
      is_expansion: Boolean(g.isExpansion),
      base_game_id: g.baseGameId || null,
      favorite: Boolean(g.favorite),
      is_public: true,
    }));

    // Batch upsert games in chunks of 50
    const chunkSize = 50;
    for (let i = 0; i < gamesToInsert.length; i += chunkSize) {
      const chunk = gamesToInsert.slice(i, i + chunkSize);
      const { error } = await supabase.from('user_games').upsert(chunk, {
        onConflict: 'user_id, title_kr',
        ignoreDuplicates: false,
      });
      if (error) {
        console.warn('Batch game upload warning:', error);
      }
    }

    // Map local plays to user_plays
    const playsToInsert = localPlays.map((p) => ({
      user_id: userId,
      bgg_play_id: p.bggPlayId || null,
      game_title_kr: p.gameTitleKr || null,
      game_title_en: p.gameTitleEn || null,
      game_image: p.gameImage || null,
      expansion_ids: p.expansionIds || [],
      date: p.date,
      start_time: p.startTime || null,
      duration_minutes: p.durationMinutes || 0,
      location_name: p.locationName || null,
      is_coop: Boolean(p.isCoop),
      coop_won: p.coopWon ?? null,
      is_solo: Boolean(p.isSolo),
      incomplete: Boolean(p.incomplete),
      rounds: p.rounds || null,
      player_scores: p.playerScores || [],
      notes: p.notes || null,
      rating: p.rating || null,
      synced_to_bgg: Boolean(p.syncedToBgg),
      is_public: true,
    }));

    for (let i = 0; i < playsToInsert.length; i += chunkSize) {
      const chunk = playsToInsert.slice(i, i + chunkSize);
      const { error } = await supabase.from('user_plays').insert(chunk);
      if (error) {
        console.warn('Batch play upload warning:', error);
      }
    }

    return {
      success: true,
      uploadedGames: localGames.length,
      uploadedPlays: localPlays.length,
    };
  } catch (err: any) {
    return {
      success: false,
      uploadedGames: 0,
      uploadedPlays: 0,
      error: err.message || '데이터 클라우드 동기화 중 오류가 발생했습니다.',
    };
  }
}
