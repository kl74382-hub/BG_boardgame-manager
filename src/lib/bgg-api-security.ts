import { NextRequest, NextResponse } from 'next/server';

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 30;
const MAX_TRACKED_KEYS = 500;

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get('x-real-ip')?.trim();
  if (realIp) return realIp;
  return 'unknown';
}

/**
 * Basic sliding-window IP rate limiter for BGG proxy endpoints
 * to mitigate open-proxy abuse and upstream DoS.
 */
export function checkBggRateLimit(request: NextRequest): NextResponse | null {
  const now = Date.now();

  if (rateLimitStore.size > MAX_TRACKED_KEYS) {
    rateLimitStore.forEach((entry, key) => {
      if (entry.resetAt <= now) {
        rateLimitStore.delete(key);
      }
    });
  }

  const clientKey = getClientKey(request);
  const existing = rateLimitStore.get(clientKey);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(clientKey, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return null;
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfterSec = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));
    return NextResponse.json(
      { error: 'Too many requests. Please try again shortly.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(retryAfterSec),
        },
      }
    );
  }

  existing.count += 1;
  return null;
}

/**
 * Extracts BGG API token strictly from HTTP headers (X-BGG-Token or Authorization Bearer)
 * rather than URL query parameters so secrets are not leaked in access logs or browser history.
 */
export function extractBggToken(request: NextRequest): string | undefined {
  const headerToken = request.headers.get('x-bgg-token')?.trim();
  if (headerToken && headerToken.length <= 512 && !/[\r\n]/.test(headerToken)) {
    return headerToken;
  }

  const authHeader = request.headers.get('authorization')?.trim();
  if (authHeader && authHeader.toLowerCase().startsWith('bearer ')) {
    const bearer = authHeader.slice(7).trim();
    if (bearer && bearer.length <= 512 && !/[\r\n]/.test(bearer)) {
      return bearer;
    }
  }

  return undefined;
}

/**
 * Validates BGG username to prevent malformed query strings or abuse.
 */
export function isValidBggUsername(username: string): boolean {
  return /^[A-Za-z0-9_.\- ]{1,64}$/.test(username);
}
