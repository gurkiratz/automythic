// app/api/adventures/route.ts
import { NextResponse } from 'next/server'

// In-memory storage (replace with database in production)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const adventureStore: Record<string, any> = {}

export async function POST(request: Request) {
  try {
    const { slug, gameData } = await request.json()
    adventureStore[slug] = gameData // Store the generated GameData
    return NextResponse.json({ slug }, { status: 201 })
  } catch (error) {
    console.error('Error storing adventure:', error)
    return NextResponse.json(
      { error: 'Failed to create adventure' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  if (!slug || !adventureStore[slug]) {
    return NextResponse.json({ error: 'Adventure not found' }, { status: 404 })
  }
  return NextResponse.json(adventureStore[slug])
}
