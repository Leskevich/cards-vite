import { useDecks } from '@/features/decks/lib/use-decks.ts'
import { DeckAdd } from '@/features/decks/ui/deck-add'
import { DeckPagination } from '@/features/decks/ui/deck-pagination'
import { DeckSortBar } from '@/features/decks/ui/deck-sort-bar'
import { DeckTable } from '@/features/decks/ui/deck-table'

export const DecksPage = () => {
  const { isLoading } = useDecks()

  if (isLoading) return <div>Loading</div>

  return (
    <div>
      <DeckAdd />
      <DeckSortBar />
      <DeckTable />
      <DeckPagination />
    </div>
  )
}
