'use client'

import { useState, useContext } from 'react'
import { NearContext } from '@/wallets/near'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { toast } from 'sonner'
import Image from 'next/image'

// Mock shop items
const shopItems = [
  {
    id: 'char-1',
    type: 'character',
    name: 'Luna the Shadow Thief',
    description: 'A stealthy rogue with a knack for secrets.',
    price: 5, // NEAR tokens
    image:
      'https://images.unsplash.com/photo-1630534325760-4ea18f6227c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'scene-1',
    type: 'scene',
    name: 'Mystic Cavern',
    description: 'A glowing cave filled with ancient runes.',
    price: 3,
    image:
      'https://images.unsplash.com/photo-1688725906759-ee2576b3d2c9?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'anim-1',
    type: 'animation',
    name: 'Spectral Fade',
    description: 'A ghostly fade effect for your choices.',
    price: 2,
    image:
      'https://images.unsplash.com/photo-1614852207293-8ddd724da274?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'char-2',
    type: 'character',
    name: 'Zorak the Fire Mage',
    description: 'A fiery sorcerer with explosive power.',
    price: 6,
    image:
      'https://images.unsplash.com/photo-1623199971727-c59b8c11fdfd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function ShopPage() {
  const { signedAccountId, wallet } = useContext(NearContext)
  const [isPurchasing, setIsPurchasing] = useState<string | null>(null)

  const handlePurchase = async (itemId: string, price: number) => {
    if (!signedAccountId || !wallet) {
      toast('Error', { description: 'Please connect your NEAR wallet first.' })
      return
    }

    setIsPurchasing(itemId)
    try {
      // Placeholder for NEAR transaction (replace with real contract call)
      // Example: wallet.signAndSendTransaction({
      //   receiverId: "shop-contract.near",
      //   actions: [{ type: "FunctionCall", methodName: "buy_item", args: { item_id: itemId }, amount: price }],
      // });
      console.log(`Purchasing ${itemId} for ${price} NEAR tokens...`)

      // Simulate success
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Mock delay
      toast('Success', {
        description: `You’ve bought ${
          shopItems.find((i) => i.id === itemId)?.name
        }!`,
      })
    } catch (error) {
      console.error('Purchase error:', error)
      toast('Error', { description: 'Purchase failed. Try again.' })
    } finally {
      setIsPurchasing(null)
    }
  }

  return (
    <div className="min-h-[80vh] pt-24 bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-purple-400 text-center mb-8">
        Adventure Shop
      </h1>
      <p className="text-gray-400 text-center mb-12">
        Spend NEAR tokens to unlock characters, scenes, and animations!
      </p>

      {!signedAccountId ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-300 mb-4">
            Connect your wallet to browse the shop.
          </p>
          <Button
            variant="outline"
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
            onClick={() => wallet?.signIn()}
          >
            Connect NEAR Wallet
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {shopItems.map((item) => (
            <Card
              key={item.id}
              className="bg-gray-900/80 border-gray-800 hover:shadow-indigo-500/20 transition-shadow duration-300"
            >
              <CardHeader>
                <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-bold text-white">
                  {item.name}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {item.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-indigo-400 font-semibold">
                  {item.price} NEAR
                </span>
                <Button
                  onClick={() => handlePurchase(item.id, item.price)}
                  disabled={isPurchasing === item.id}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  {isPurchasing === item.id ? 'Buying...' : 'Buy Now'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
