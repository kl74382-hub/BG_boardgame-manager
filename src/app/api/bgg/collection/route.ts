import { NextRequest, NextResponse } from 'next/server';
import { fetchBGGUserCollection } from '@/lib/bgg-client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  const token = searchParams.get('token') || undefined;

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  try {
    const items = await fetchBGGUserCollection(username, token);
    return NextResponse.json({ items });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch BGG collection' }, { status: 500 });
  }
}
