import { NextRequest, NextResponse } from 'next/server';
import { searchBGG } from '@/lib/bgg-client';
import { checkBggRateLimit, extractBggToken } from '@/lib/bgg-api-security';

export async function GET(request: NextRequest) {
  const rateLimited = checkBggRateLimit(request);
  if (rateLimited) return rateLimited;

  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query')?.trim();
  const token = extractBggToken(request);

  if (!query || query.length > 100) {
    return NextResponse.json({ error: 'Valid query parameter is required' }, { status: 400 });
  }

  try {
    const results = await searchBGG(query, token);
    return NextResponse.json({ results });
  } catch (error) {
    console.error('BGG search route error:', error);
    return NextResponse.json({ error: 'Failed to search BGG' }, { status: 500 });
  }
}
