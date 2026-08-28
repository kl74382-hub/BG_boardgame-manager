import { NextRequest, NextResponse } from 'next/server';
import { fetchBGGGameDetails } from '@/lib/bgg-client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const idStr = searchParams.get('id');
  const token = searchParams.get('token') || undefined;

  if (!idStr || isNaN(Number(idStr))) {
    return NextResponse.json({ error: 'Valid BGG ID is required' }, { status: 400 });
  }

  try {
    const details = await fetchBGGGameDetails(Number(idStr), token);
    if (!details) {
      return NextResponse.json({ error: 'Game not found on BGG' }, { status: 404 });
    }
    return NextResponse.json({ game: details });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch BGG details' }, { status: 500 });
  }
}
