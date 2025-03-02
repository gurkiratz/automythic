'use client'

import { use } from 'react'
import { dragonLairGame, hauntedHollowGame } from '@/lib/game-data'
import GameStart from './GameStart'

export default function AdventurePage({
  params,
}: {
  params: Promise<{ adventureName: string }>
}) {
  const { adventureName } = use(params)
  console.log(adventureName)

  // Map adventure name to game data
  const gameData =
    adventureName === 'dragons-lair'
      ? dragonLairGame
      : adventureName === 'haunted-hollow'
      ? hauntedHollowGame
      : null

  if (!gameData) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-3xl font-bold text-red-400 mb-8">
          Adventure Not Found
        </h1>
        <p className="text-center">
          No adventure named &quot;{adventureName}&quot; exists yet.
        </p>
      </div>
    )
  }

  return <GameStart gameData={gameData} />
}
