'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { dragonLairGame } from './game-data'
import { Background, Narration, Dialogue, Choice, ReturnHome } from '../game-ui'

export default function DragonsLair() {
  const [currentScene, setCurrentScene] = useState(dragonLairGame.initialScene)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleChoice = (nextSceneId: string) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentScene(nextSceneId)
      setIsTransitioning(false)
    }, 500)
  }

  const scene = dragonLairGame.scenes[currentScene]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <Background src={scene?.background} />

      {/* Game Content */}
      <div className="relative z-10 container mx-auto max-w-3xl px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={scene?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Game Title */}
            <h1 className="text-3xl font-bold text-center text-purple-400 mb-8">
              {dragonLairGame.title}
            </h1>

            {/* Narration */}
            <Narration text={scene?.narration} />

            {/* Character Dialogues */}
            <div className="space-y-4 mb-8">
              {scene?.dialogues.map((dialogue, index) => {
                const character =
                  dragonLairGame.characters[dialogue.characterId]
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
