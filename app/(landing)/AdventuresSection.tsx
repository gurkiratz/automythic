'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Mock data for adventure previews
const adventurePreviews = [
  {
    title: "Dragon's Lair",
    description:
      'Face the ancient dragon Vermithrax in a cavern of glittering treasure and dark secrets.',
    image:
      'https://images.unsplash.com/photo-1608924066819-930edc42986a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'dragons-lair',
  },
  {
    title: 'Haunted Hollow',
    description:
      'Explore a cursed forest where shadows whisper and every choice could be your last.',
    image:
      'https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'haunted-hollow',
  },
  {
    title: 'Starship Odyssey',
    description:
      'Navigate a derelict spaceship orbiting a dying star, uncovering alien mysteries.',
    image:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    slug: 'starship-odyssey',
  },
]

export function AdventureCarousel() {
  return (
    <Carousel className="w-full max-w-4xl mx-auto my-12">
      <CarouselContent>
        {adventurePreviews.map((adventure, index) => (
          <CarouselItem key={index}>
            <Card className="bg-gray-900/80 border-gray-800 shadow-lg hover:shadow-indigo-500/20 transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                {/* Image */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={adventure.image}
                    alt={`${adventure.title} preview`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Title and Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">
                    {adventure.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {adventure.description}
                  </p>
                </div>

                {/* Play Button */}
                <Link href={`/adventures/${adventure.slug}`}>
                  <Button
                    variant="outline"
                    className="mt-2 border-indigo-400/50 text-foreground hover:border-indigo-500 transition-colors"
                  >
                    Play Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-gray-800/50 hover:bg-gray-700 text-white border-none" />
      <CarouselNext className="bg-gray-800/50 hover:bg-gray-700 text-white border-none" />
    </Carousel>
  )
}
