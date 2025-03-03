'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Background, Narration, Dialogue, Choice, ReturnHome } from '../game-ui'
import { GameData } from '@/lib/types'

export default function GameStart({ gameData }: { gameData: GameData }) {
  const [currentScene, setCurrentScene] = useState(gameData.initialScene)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleChoice = (nextSceneId: string) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentScene(nextSceneId)
      setIsTransitioning(false)
    }, 500)
  }

  const scene = gameData.scenes[currentScene]

  if (!gameData) {
    return <div>No Adventure with this name available</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background Image */}
      <Background
        src={
          scene?.background ||
          'https://images.unsplash.com/photo-1558515437-596fa8694e7c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      />

      {/* Game Content */}
      <div className="relative z-10 container mx-auto max-w-4xl px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={scene?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-2xl p-8"
          >
            {/* Game Title */}
            <h1 className="text-4xl md:text-5xl font-black text-center text-orange-600 mb-8 tracking-tight uppercase drop-shadow-[0_4px_4px_rgba(234,88,12,0.6)]">
              {gameData.title}
            </h1>

            {/* Narration */}
            <Narration text={scene?.narration} />

            {/* Character Dialogues */}
            <div className="space-y-6 mb-8">
              {scene?.dialogues.map((dialogue, index) => {
                const character = gameData.characters[dialogue.characterId]
                return (
                  <Dialogue
                    key={index}
                    character={character}
                    text={dialogue.text}
                    index={index}
                  />
                )
              })}
            </div>

            {/* Choices */}
            <div className="flex flex-col gap-4 mt-8">
              {scene?.choices.map((choice) => (
                <Choice
                  key={choice.id}
                  text={choice.text}
                  onClick={() => handleChoice(choice.nextSceneId)}
                  disabled={isTransitioning}
                />
              ))}
            </div>

            {/* Return to Home */}
            <ReturnHome show={!!scene?.isEnding} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
