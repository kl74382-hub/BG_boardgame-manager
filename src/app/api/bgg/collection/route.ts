import { NextRequest, NextResponse } from 'next/server';
import { fetchBGGUserCollection } from '@/lib/bgg-client';
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
    const items = await fetchBGGUserCollection(username, token);
    return NextResponse.json({ items });
  } catch (error) {
    console.error('BGG collection route error:', error);
    return NextResponse.json({ error: 'Failed to fetch BGG collection' }, { status: 500 });
  }
}
