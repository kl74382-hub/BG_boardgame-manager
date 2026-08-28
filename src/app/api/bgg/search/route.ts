import { NextRequest, NextResponse } from 'next/server';
import { searchBGG } from '@/lib/bgg-client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const token = searchParams.get('token') || undefined;

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    const results = await searchBGG(query, token);
    return NextResponse.json({ results });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to search BGG' }, { status: 500 });
  }
}
