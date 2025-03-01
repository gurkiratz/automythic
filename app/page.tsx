'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { HeroParallax } from '@/components/ui/hero-parallax'

// Sample product data for the HeroParallax component
const products = [
  {
    title: "Dragon's Lair Adventure",
    link: '/adventures/dragons-lair',
    thumbnail:
      'https://images.unsplash.com/photo-1560942485-b2a11cc13456?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Enchanted Forest Quest',
    link: '/adventures/enchanted-forest',
    thumbnail:
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Mystic Mountain Challenge',
    link: '/adventures/mystic-mountain',
    thumbnail:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Underwater Kingdom',
    link: '/adventures/underwater-kingdom',
    thumbnail:
      'https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Desert Nomad Journey',
    link: '/adventures/desert-nomad',
    thumbnail:
      'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Celestial Odyssey',
    link: '/adventures/celestial-odyssey',
    thumbnail:
      'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Volcanic Expedition',
    link: '/adventures/volcanic-expedition',
    thumbnail:
      'https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Arctic Survival',
    link: '/adventures/arctic-survival',
    thumbnail:
      'https://images.unsplash.com/photo-1517783999520-f068d7431a60?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Jungle Expedition',
    link: '/adventures/jungle-expedition',
    thumbnail:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Medieval Kingdom',
    link: '/adventures/medieval-kingdom',
    thumbnail:
      'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Cyberpunk City',
    link: '/adventures/cyberpunk-city',
    thumbnail:
      'https://images.unsplash.com/photo-1480044965905-02098d419e96?q=80&w=1000&auto=format&fit=crop',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white">
      {/* Hero Parallax Section */}
      <HeroParallax products={products} />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Features
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BentoGrid>
            <BentoGridItem
              className="col-span-1 md:col-span-2 bg-gradient-to-br from-purple-800/80 to-purple-900/80 border-purple-700/50"
              title="AI Game Generation"
              description="Create unique RPG adventures with advanced AI storytelling that adapts to your choices and preferences. Our AI generates immersive worlds with complex characters and engaging storylines."
              icon={
                <div className="p-3 rounded-full bg-purple-500/20 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-300"
                  >
                    <path d="M12 2v8" />
                    <path d="m4.93 10.93 1.41 1.41" />
                    <path d="M2 18h2" />
                    <path d="M20 18h2" />
                    <path d="m19.07 10.93-1.41 1.41" />
                    <path d="M22 22H2" />
                    <path d="m16 6-4 4-4-4" />
                    <path d="M16 18a4 4 0 0 0-8 0" />
                  </svg>
                </div>
              }
            />
            <BentoGridItem
              className="col-span-1 bg-gradient-to-br from-cyan-800/80 to-cyan-900/80 border-cyan-700/50"
              title="Blockchain Integration"
              description="Own your characters and items as NFTs on NEAR blockchain with true digital ownership. Trade, sell, or use your assets across multiple games in the ecosystem."
              icon={
                <div className="p-3 rounded-full bg-cyan-500/20 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-300"
                  >
                    <rect width="16" height="20" x="4" y="2" rx="2" />
                    <path d="M16 2v4" />
                    <path d="M8 2v4" />
                    <path d="M4 10h16" />
                    <path d="m9 16 3-3 3 3" />
                    <path d="M12 13v6" />
                  </svg>
                </div>
              }
            />
            <BentoGridItem
              className="col-span-1 bg-gradient-to-br from-indigo-800/80 to-indigo-900/80 border-indigo-700/50"
              title="Community Driven"
              description="Share and play adventures created by the community. Rate stories, collaborate with other creators, and build upon existing worlds."
              icon={
                <div className="p-3 rounded-full bg-indigo-500/20 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-300"
                  >
                    <path d="M17 7.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z" />
                    <path d="M7 7.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z" />
                    <path d="M17 7.5V7a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4v.5" />
                    <path d="M17 16.5V17a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-.5" />
                  </svg>
                </div>
              }
            />
            <BentoGridItem
              className="col-span-1 md:col-span-2 bg-gradient-to-br from-amber-800/80 to-amber-900/80 border-amber-700/50"
              title="Cross-Platform Play"
              description="Play your adventures on any device, anywhere. Seamlessly switch between desktop, mobile, and tablet without losing progress."
              icon={
                <div className="p-3 rounded-full bg-amber-500/20 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-300"
                  >
                    <rect width="16" height="12" x="4" y="2" rx="2" />
                    <path d="M2 14h20" />
                    <path d="M6 18h12" />
                    <path d="M9 22h6" />
                  </svg>
                </div>
              }
            />
            <BentoGridItem
              className="col-span-1 bg-gradient-to-br from-emerald-800/80 to-emerald-900/80 border-emerald-700/50"
              title="Monetization Options"
              description="Earn rewards by creating popular adventures or selling unique in-game items. Build your reputation as a master storyteller."
              icon={
                <div className="p-3 rounded-full bg-emerald-500/20 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-emerald-300"
                  >
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 6v12" />
                    <path d="M8 10h8" />
                  </svg>
                </div>
              }
            />
          </BentoGrid>
        </motion.div>
      </section>

      {/* Game Showcase */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Adventures
        </h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {[1, 2, 3].map((_, index) => (
              <CarouselItem key={index}>
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <div className="aspect-video relative bg-gray-700 rounded-lg mb-4">
                      <Image
                        src={`/game-preview-${index + 1}.jpg`}
                        alt={`Game preview ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Epic Adventure {index + 1}
                    </h3>
                    <p className="text-gray-400">
                      Embark on a legendary journey through mystical realms
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of players creating and experiencing unique
            adventures
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
          >
            Play Now
          </Button>
        </motion.div>
      </section>
    </div>
  )
}
