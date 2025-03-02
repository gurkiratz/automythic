'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextGenerateEffect } from '@/components/text-generate-effect'
import type { Character } from '@/lib/types'

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
    <Card className="bg-background/60 p-6 mb-8">
      <TextGenerateEffect
        words={text}
        className="font-normal"
        filter={false}
        duration={0.8}
      />
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
          src={
            character.image ||
            'https://images.unsplash.com/photo-1562230778-25514c8237f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
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
    <motion.div
      whileHover={{ scale: 1.03 }} // Subtle scale-up on hover
      whileTap={{ scale: 0.97 }} // Slight press effect
      initial={{ opacity: 0, y: 10 }} // Gentle entrance
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }} // Smooth spring animation
      className="w-full"
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        variant="default" // Cleaner, less heavy than "default"
        className="w-full px-4 py-3 text-base font-medium text-white  border-2  rounded-lg hover:bg-indigo-500/10 border-none transition-colors duration-200 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed"
      >
        <div className="flex items-center justify-between w-full">
          <span className="text-left">{text}</span>
          <motion.span
            animate={{ x: [0, 3, 0] }} // Subtle arrow nudge
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="ml-2 text-indigo-300"
          >
            →
          </motion.span>
        </div>
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
