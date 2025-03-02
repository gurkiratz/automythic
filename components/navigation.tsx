'use client'

import { useContext, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Sword } from 'lucide-react' // Sword as a thematic icon
import Link from 'next/link'
import { NearContext } from '@/wallets/near'
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { signedAccountId, wallet } = useContext(NearContext)
  const [action, setAction] = useState<() => void | undefined>(
    () => wallet?.signIn
  )
  const [label, setLabel] = useState('Loading...')

  // Update action and label based on wallet state
  useEffect(() => {
    if (!wallet) {
      setLabel('Wallet Unavailable')
      setAction(() => undefined)
      return
    }

    if (signedAccountId) {
      setAction(() => wallet.signOut)
      setLabel(signedAccountId)
    } else {
      setAction(() => wallet.signIn)
      setLabel('Connect Wallet')
    }
  }, [signedAccountId, wallet])
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Sword className="h-8 w-8 text-purple-400" />{' '}
              {/* Thematic icon */}
              <span className="font-bold text-xl text-white">
                Automythic AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/adventures/dragons-lair"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Dragon&apos;s Lair
            </Link>
            <Link href="/adventures/new">
              <Button variant="outline" className="border-indigo-400/50">
                Create Adventure
              </Button>
            </Link>
            <Button
              onClick={action}
              variant="outline"
              className="bg-purple-300 text-black hover:bg-purple-400 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!wallet}
            >
              (Logout) {label}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-b border-gray-800">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              href="/adventures/dragons-lair"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800"
            >
              Dragon&apos;s Lair
            </Link>
            <Link
              href="/adventures/new"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              <Button variant="outline" className="w-full border-indigo-400/50">
                Create Adventure
              </Button>
            </Link>
            <div className="px-3 py-2">
              <Button
                onClick={action}
                variant="outline"
                className="bg-purple-300 w-full text-black hover:bg-purple-400 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!wallet}
              >
                (Logout) {label}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
