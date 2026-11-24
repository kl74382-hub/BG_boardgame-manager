import { NextRequest, NextResponse } from 'next/server';
import { fetchBGGUserPlays } from '@/lib/bgg-client';
import { checkBggRateLimit, extractBggToken, isValidBggUsername } from '@/lib/bgg-api-security';

export async function GET(request: NextRequest) {
  const rateLimited = checkBggRateLimit(request);
  if (rateLimited) return rateLimited;

  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username')?.trim();
  const token = extractBggToken(request);

  if (!username || !isValidBggUsername(username)) {
    return NextResponse.json({ error: 'Valid username is required' }, { status: 400 });
  }

  try {
    const plays = await fetchBGGUserPlays(username, token);
    return NextResponse.json({ plays });
  } catch (error) {
    console.error('BGG plays route error:', error);
    return NextResponse.json({ error: 'Failed to fetch BGG plays' }, { status: 500 });
  }
}
