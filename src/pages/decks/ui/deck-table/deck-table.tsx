import { UseDecks } from '@/pages/decks/lib/use-decks.ts'
import { DeckBody } from '@/pages/decks/ui/deck-table/deck-body.tsx'
import { DeckHead } from '@/pages/decks/ui/deck-table/deck-head.tsx'
import { Table } from '@/shared/ui'

export const DeckTable = () => {
  const { isLoading } = UseDecks()

  if (isLoading) return <div>Loading</div>

  return (
    <Table>
      <DeckHead />
      <DeckBody />
    </Table>
  )
}
