import { NextRequest, NextResponse } from 'next/server';
import { fetchBGGUserPlays } from '@/lib/bgg-client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  const token = searchParams.get('token') || undefined;

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  try {
    const plays = await fetchBGGUserPlays(username, token);
    return NextResponse.json({ plays });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch BGG plays' }, { status: 500 });
  }
}
