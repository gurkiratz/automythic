'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { toast } from 'sonner'

export default function NewAdventure() {
  const [formData, setFormData] = useState({
    name: '',
    theme: '',
    goal: '',
    characters: '',
    tone: '',
    choices: '',
    endings: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.theme || !formData.goal) {
      toast('Error', {
        description: 'Please fill in at least the name, theme, and goal.',
      })
      return
    }

    setIsSubmitting(true)
    try {
      const adventureSlug = formData.name
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')

      // Send data to API route
      const res = await fetch('/api/adventures', {
        method: 'POST',
        body: JSON.stringify({ ...formData, slug: adventureSlug }),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) throw new Error('Failed to create adventure')

      const { slug } = await res.json()
      toast('Success', {
        description: 'Your adventure has been created!',
      })
      router.push(`/adventures/${slug}`)
    } catch (error) {
      console.error(error)
      toast('Error', {
        description: 'Something went wrong. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-purple-400">
            Create a New Adventure
          </CardTitle>
          <CardDescription className="text-gray-400">
            Fill in the details to craft your unique story.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Adventure Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Adventure Name <span className="text-red-400">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Dragon's Lair"
                className="bg-gray-800 border-gray-700 text-white"
                disabled={isSubmitting}
              />
            </div>

            {/* Theme/Setting */}
            <div className="space-y-2">
              <Label htmlFor="theme" className="text-white">
                Theme or Setting <span className="text-red-400">*</span>
              </Label>
              <Input
                id="theme"
                name="theme"
                value={formData.theme}
                onChange={handleChange}
                placeholder="e.g., medieval fantasy, sci-fi space"
                className="bg-gray-800 border-gray-700 text-white"
                disabled={isSubmitting}
              />
            </div>

            {/* Main Goal */}
            <div className="space-y-2">
              <Label htmlFor="goal" className="text-white">
                Main Goal <span className="text-red-400">*</span>
              </Label>
              <Input
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                placeholder="e.g., find treasure, defeat a foe"
                className="bg-gray-800 border-gray-700 text-white"
                disabled={isSubmitting}
              />
            </div>

            {/* Key Characters */}
            <div className="space-y-2">
              <Label htmlFor="characters" className="text-white">
                Key Characters
              </Label>
              <Textarea
                id="characters"
                name="characters"
                value={formData.characters}
                onChange={handleChange}
                placeholder="e.g., Thorne the warrior, Elara the mage"
                className="bg-gray-800 border-gray-700 text-white"
                disabled={isSubmitting}
              />
            </div>

            {/* Tone and Difficulty */}
            <div className="space-y-2">
              <Label htmlFor="tone" className="text-white">
                Tone and Difficulty
              </Label>
              <Input
                id="tone"
                name="tone"
                value={formData.tone}
                onChange={handleChange}
                placeholder="e.g., serious and challenging"
                className="bg-gray-800 border-gray-700 text-white"
                disabled={isSubmitting}
              />
            </div>

            {/* Choice Style */}
            <div className="space-y-2">
              <Label htmlFor="choices" className="text-white">
                Choice Style (Optional)
              </Label>
              <Input
                id="choices"
                name="choices"
                value={formData.choices}
                onChange={handleChange}
                placeholder="e.g., moral dilemmas, exploration-focused"
                className="bg-gray-800 border-gray-700 text-white"
                disabled={isSubmitting}
              />
            </div>

            {/* Endings */}
            <div className="space-y-2">
              <Label htmlFor="endings" className="text-white">
                Endings (Optional)
              </Label>
              <Textarea
                id="endings"
                name="endings"
                value={formData.endings}
                onChange={handleChange}
                placeholder="e.g., 5: wealth, wisdom, curse, honor, alliance"
                className="bg-gray-800 border-gray-700 text-white"
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create Adventure'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
