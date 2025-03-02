'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

// import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { HeroParallax } from '@/components/ui/hero-parallax'
import { FeaturesSection } from '@/components/features-section'
import { AdventureCarousel } from './AdventuresSection'
import Footer from './Footer'

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
          className="bg-black/30 backdrop-blur-sm rounded-xl p-6"
        >
          <FeaturesSection />
        </motion.div>
      </section>

      {/* Game Showcase */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Adventures
        </h2>
        <div>
          <AdventureCarousel />
        </div>
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

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
