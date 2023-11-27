import { DeckAdd } from './deck-add'
import { DeckPagination } from './deck-pagination'
import { DeckSortBar } from './deck-sort-bar'
import { DeckTable } from './deck-table'

import { useDecks } from '@/pages/decks/lib/use-decks.ts'

export const DecksPage = () => {
  const { isLoading, data } = useDecks()

  if (isLoading) return <div>Loading</div>

  return (
    <div>
      <DeckAdd />
      <DeckSortBar />
      <DeckTable />
      <DeckPagination totalPages={data?.pagination.totalPages!} />
    </div>
  )
}
