import { Game, Play, UserProfile } from '@/types';

export const ADMIN_USER_ID = 'admin-nana';

/**
 * Returns true if the item belongs to the master owner (Nana / seed data).
 * Items without a userId or with userId === 'admin-nana' belong to the owner.
 */
export function isOwnerItem(item: { userId?: string }): boolean {
  return !item.userId || item.userId === ADMIN_USER_ID;
}

/**
 * Filters games based on the currently logged-in user.
 * - Admin: sees owner's 421 games + any games created by admin.
 * - Guest: sees owner's public games (showcase mode).
 * - Normal User (role === 'user'): sees ONLY games created by that user (userId === user.id).
 *
 * @param viewMode Optional override for normal user to browse owner's showcase collection ('my' | 'showcase')
 */
export function filterGamesForUser(
  games: Game[],
  user: UserProfile | null,
  viewMode: 'my' | 'showcase' = 'my'
): Game[] {
  if (!user) {
    // Guest: sees owner's games
    return games.filter((g) => isOwnerItem(g) && g.isPublic !== false);
  }

  if (user.role === 'admin') {
    // Admin sees owner games and admin-created games
    return games.filter((g) => isOwnerItem(g) || g.userId === user.id);
  }

  // Normal user
  if (viewMode === 'showcase') {
    // User explicitly chose to view owner's master collection
    return games.filter((g) => isOwnerItem(g) && g.isPublic !== false);
  }

  // Default: User only sees their own games!
  return games.filter((g) => g.userId === user.id);
}

/**
 * Filters plays based on the currently logged-in user.
 * - Admin: sees owner's plays + admin plays.
 * - Guest: sees owner's plays.
 * - Normal User: sees ONLY plays created by that user (userId === user.id).
 */
export function filterPlaysForUser(
  plays: Play[],
  user: UserProfile | null,
  viewMode: 'my' | 'showcase' = 'my'
): Play[] {
  if (!user) {
    return plays.filter((p) => isOwnerItem(p));
  }

  if (user.role === 'admin') {
    return plays.filter((p) => isOwnerItem(p) || p.userId === user.id);
  }

  if (viewMode === 'showcase') {
    return plays.filter((p) => isOwnerItem(p));
  }

  return plays.filter((p) => p.userId === user.id);
}
