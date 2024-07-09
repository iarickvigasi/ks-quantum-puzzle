import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to Puzzle for KS to verify you are KS
        </h1>
        <p className="leading-normal text-muted-foreground">
          Hello quantum traveler. This place is a way to get the decryption key for our Quantum Council Messages.
          This is intended only for KS.
          <br/>
          So if you are not KS please leave peacefully.
        </p>
      </div>
    </div>
  )
}
