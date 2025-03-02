'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Character } from './game-data'

type BackgroundProps = {
  src: string
}

export function Background({ src }: BackgroundProps) {
  return (
    <motion.div
      className="fixed inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src={src}
        alt="Scene Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
    </motion.div>
  )
}

type NarrationProps = {
  text: string
}

export function Narration({ text }: NarrationProps) {
  return (
    <Card className="bg-black/80 p-6 mb-8">
      <p className="text-lg italic text-gray-300">{text}</p>
    </Card>
  )
}

type DialogueProps = {
  character: Character
  text: string
  index: number
}

export function Dialogue({ character, text, index }: DialogueProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className="flex items-start space-x-4"
    >
      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-purple-400 font-bold">{character.name}</h3>
        <p className="text-gray-300">{text}</p>
      </div>
    </motion.div>
  )
}

type ChoiceProps = {
  text: string
  onClick: () => void
  disabled: boolean
}

export function Choice({ text, onClick, disabled }: ChoiceProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button
        onClick={onClick}
        variant="default"
        size="lg"
        className="w-full text-left bg-purple-600 hover:bg-purple-700"
        disabled={disabled}
      >
        {text}
      </Button>
    </motion.div>
  )
}

type ReturnHomeProps = {
  show: boolean
}

export function ReturnHome({ show }: ReturnHomeProps) {
  if (!show) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-8 text-center"
    >
      <Link href="/">
        <Button variant="outline" className="text-purple-400 border-purple-400">
          Return to Home
        </Button>
      </Link>
    </motion.div>
  )
}
