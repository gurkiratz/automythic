'use client'

import { useContext, useEffect, useState } from 'react'
import { Button, ButtonProps } from '@/components/ui/button'
import { NearContext } from '@/wallets/near'
import { cn } from '@/lib/utils'

interface WalletButtonProps extends ButtonProps {
  label?: string // Custom label (e.g., "Play Now" or "Connect Wallet")
  truncateAccountId?: boolean // Option to shorten account ID
  className?: string
}

export function WalletButton({
  label: customLabel,
  truncateAccountId = true,
  className,
  ...props
}: WalletButtonProps) {
  const { signedAccountId, wallet } = useContext(NearContext)
  const [action, setAction] = useState<() => void | undefined>(
    () => wallet?.signIn
  )
  const [label, setLabel] = useState('Loading...')

  useEffect(() => {
    if (!wallet) {
      setLabel('Wallet Unavailable')
      setAction(() => undefined)
      return
    }

    if (signedAccountId) {
      setAction(() => wallet.signOut)
      const displayId = truncateAccountId
        ? `${signedAccountId.slice(0, 6)}...${signedAccountId.slice(-4)}`
        : signedAccountId
      setLabel(
        customLabel ? `${customLabel} (${displayId})` : `Logout (${displayId})`
      )
    } else {
      setAction(() => wallet.signIn)
      setLabel(customLabel || 'Connect Wallet')
    }
  }, [signedAccountId, wallet, customLabel, truncateAccountId])

  return (
    <Button
      onClick={action}
      variant="outline"
      className={cn(
        'bg-purple-300 text-black hover:bg-purple-400 disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      disabled={!wallet}
      {...props}
    >
      {label}
    </Button>
  )
}
