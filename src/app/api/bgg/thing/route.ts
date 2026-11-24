import { NextRequest, NextResponse } from 'next/server';
import { fetchBGGGameDetails } from '@/lib/bgg-client';
import { checkBggRateLimit, extractBggToken } from '@/lib/bgg-api-security';

export async function GET(request: NextRequest) {
  const rateLimited = checkBggRateLimit(request);
  if (rateLimited) return rateLimited;

  const { searchParams } = new URL(request.url);
  const idStr = searchParams.get('id');
  const token = extractBggToken(request);
  const idNum = idStr ? Number(idStr) : NaN;

  if (!idStr || !Number.isInteger(idNum) || idNum <= 0) {
    return NextResponse.json({ error: 'Valid BGG ID is required' }, { status: 400 });
  }

  try {
    const details = await fetchBGGGameDetails(idNum, token);
    if (!details) {
      return NextResponse.json({ error: 'Game not found on BGG' }, { status: 404 });
    }
    return NextResponse.json({ game: details });
  } catch (error) {
    console.error('BGG thing route error:', error);
    return NextResponse.json({ error: 'Failed to fetch BGG details' }, { status: 500 });
  }
}
