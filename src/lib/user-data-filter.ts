import { Game, Play, UserProfile } from '@/types';
import { getRegisteredAccounts } from '@/contexts/AuthContext';

export const ADMIN_USER_ID = 'admin-nana';

export interface PublicUserProfile {
  id: string;
  nickname: string;
  role: 'admin' | 'user';
  avatarUrl?: string;
}

/**
 * Returns true if the item belongs to the master owner (Nana / seed data).
 * Items without a userId or with userId === 'admin-nana' belong to the owner.
 */
export function isOwnerItem(item: { userId?: string }): boolean {
  return !item.userId || item.userId === ADMIN_USER_ID;
}

/**
 * Returns a list of public user profiles for browsing/sharing.
 */
export function getPublicUserList(): PublicUserProfile[] {
  const accounts = getRegisteredAccounts();
  return accounts.map((acc) => ({
    id: acc.id,
    nickname: acc.nickname,
    role: acc.role,
    avatarUrl: acc.avatarUrl || (acc.role === 'admin' ? '👑' : '🎲'),
  }));
}

/**
 * Looks up a public user by ID.
 */
export function getPublicUserById(userId: string): PublicUserProfile | undefined {
  if (userId === ADMIN_USER_ID || userId === 'showcase') {
    return {
      id: ADMIN_USER_ID,
      nickname: 'Nana (소유자/관리자)',
      role: 'admin',
      avatarUrl: '👑',
    };
  }
  const accounts = getPublicUserList();
  return accounts.find((u) => u.id === userId);
}

/**
 * Filters games based on the currently viewed target user or logged-in user.
 * - targetUserId explicitly provided:
 *   - 'my': current user's games
 *   - 'admin-nana' | 'showcase': owner's master games
 *   - other userId: games owned by that specific user
 * - No targetUserId provided:
 *   - Admin sees owner + admin games
 *   - Guest sees owner games
 *   - Normal user sees only their own games
 */
export function filterGamesForUser(
  games: Game[],
  currentUser: UserProfile | null,
  targetUserId?: string | null
): Game[] {
  // 1. Explicit targetUserId specified
  if (targetUserId) {
    if (targetUserId === 'my') {
      if (!currentUser) return games.filter((g) => isOwnerItem(g) && g.isPublic !== false);
      if (currentUser.role === 'admin') return games.filter((g) => isOwnerItem(g) || g.userId === currentUser.id);
      return games.filter((g) => g.userId === currentUser.id);
    }
    if (targetUserId === ADMIN_USER_ID || targetUserId === 'showcase') {
      return games.filter((g) => isOwnerItem(g) && g.isPublic !== false);
    }
    // Specific third-party user
    return games.filter((g) => g.userId === targetUserId && g.isPublic !== false);
  }

  // 2. Default view without explicit target
  if (!currentUser) {
    // Guest: sees owner's games
    return games.filter((g) => isOwnerItem(g) && g.isPublic !== false);
  }

  if (currentUser.role === 'admin') {
    return games.filter((g) => isOwnerItem(g) || g.userId === currentUser.id);
  }

  // Normal user default: only their own games!
  return games.filter((g) => g.userId === currentUser.id);
}

/**
 * Filters plays based on the currently viewed target user or logged-in user.
 */
export function filterPlaysForUser(
  plays: Play[],
  currentUser: UserProfile | null,
  targetUserId?: string | null
): Play[] {
  // 1. Explicit targetUserId specified
  if (targetUserId) {
    if (targetUserId === 'my') {
      if (!currentUser) return plays.filter((p) => isOwnerItem(p));
      if (currentUser.role === 'admin') return plays.filter((p) => isOwnerItem(p) || p.userId === currentUser.id);
      return plays.filter((p) => p.userId === currentUser.id);
    }
    if (targetUserId === ADMIN_USER_ID || targetUserId === 'showcase') {
      return plays.filter((p) => isOwnerItem(p));
    }
    return plays.filter((p) => p.userId === targetUserId);
  }

  // 2. Default view without explicit target
  if (!currentUser) {
    return plays.filter((p) => isOwnerItem(p));
  }

  if (currentUser.role === 'admin') {
    return plays.filter((p) => isOwnerItem(p) || p.userId === currentUser.id);
  }

  return plays.filter((p) => p.userId === currentUser.id);
}
