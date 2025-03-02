'use client'

import { WalletButton } from '@/components/WalletButton'
import { NearContext } from '@/wallets/near'
import { useContext } from 'react'

export default function AdventuresLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { signedAccountId } = useContext(NearContext)

  // Show login prompt if not signed in
  if (!signedAccountId) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold text-purple-400 mb-4">
          Please Connect Your Wallet
        </h1>
        <p className="text-gray-400 mb-6 text-center">
          You need to log in with your NEAR wallet to access adventures.
        </p>
        <WalletButton
          label="Connect to Continue"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2"
        />
      </div>
    )
  }

  return <div className="pt-12">{children}</div>
}
