import { deckAction } from '../../model/deck-slice'

import s from './deck-pagination.module.scss'

import { useDecks } from '@/features/decks/lib/use-decks.ts'
import { useActions, useAppSelector } from '@/shared/lib'
import { Pagination } from '@/shared/ui'

export const DeckPagination = () => {
  const { data } = useDecks()
  const { setDeckParams } = useActions(deckAction)

  const page = useAppSelector(state => state.decks.paramsDeck.currentPage)
  const perPage = useAppSelector(state => String(state.decks.paramsDeck.itemsPerPage))

  const perPageOptions = useAppSelector(state => state.decks.perPageOptions)

  return (
    <div className={s.container}>
      <Pagination
        count={data?.pagination.totalPages!}
        page={page!}
        onChange={currentPage => {
          setDeckParams({ currentPage })
        }}
        showPerPageSelect={{
          perPage: perPage,
          setPerPage: itemsPerPage => {
            setDeckParams({ itemsPerPage: +itemsPerPage })
          },
          perPageOptions: perPageOptions,
        }}
      />
    </div>
  )
}
