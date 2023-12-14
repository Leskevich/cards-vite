import { deckAction } from '@/features/decks/model'
import { useActions, useAppSelector } from '@/shared/lib'
import { HeaderTable } from '@/shared/ui'
import { Column } from '@/shared/ui/table'

export const DeckHead = () => {
  const columns: Column[] = [
    {
      key: 'name',
      title: 'Name',
      sortable: true,
    },
    {
      key: 'cardsCount',
      title: 'Cards',
      sortable: true,
    },
    {
      key: 'updated',
      title: 'Last Updated',
      sortable: true,
    },
    {
      key: 'author.name',
      title: 'Author',
      sortable: true,
    },
    {
      key: 'actions',
      title: '',
    },
  ]
  const { setSortDeck } = useActions(deckAction)

  const sort = useAppSelector(state => state.decks.sortDeck)

  return <HeaderTable sort={sort} onSort={setSortDeck} columns={columns} />
}
