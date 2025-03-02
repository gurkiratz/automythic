'use client'
import { NetworkId } from '@/config'

import { NearContext, Wallet } from '@/wallets/near'
import { useEffect, useState } from 'react'

const wallet = new Wallet({ networkId: NetworkId, createAccessKeyFor: '' })

export const NearProvider = ({ children }: { children: React.ReactNode }) => {
  const [signedAccountId, setSignedAccountId] = useState('')

  useEffect(() => {
    wallet.startUp(setSignedAccountId)
  }, [])

  return (
    <NearContext.Provider value={{ signedAccountId, wallet }}>
      {children}
    </NearContext.Provider>
  )
}
