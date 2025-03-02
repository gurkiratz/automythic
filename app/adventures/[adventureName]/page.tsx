'use client'

import { use, useEffect, useState } from 'react'
import { dragonLairGame, hauntedHollowGame } from '@/lib/game-data'
import GameStart from './GameStart'

export default function AdventurePage({
  params,
}: {
  params: Promise<{ adventureName: string }>
}) {
  const { adventureName } = use(params)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [gameData, setGameData] = useState<any>(null) // Adjust type based on your GameData
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        if (adventureName === 'dragons-lair') {
          setGameData(dragonLairGame)
        } else if (adventureName === 'haunted-hollow') {
          setGameData(hauntedHollowGame)
        } else {
          const res = await fetch(`/api/adventures?slug=${adventureName}`)
          if (!res.ok) throw new Error('Adventure not found')
          const data = await res.json()
          setGameData(data)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchGameData()
  }, [adventureName])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-400">Loading adventure...</p>
      </div>
    )
  }

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
