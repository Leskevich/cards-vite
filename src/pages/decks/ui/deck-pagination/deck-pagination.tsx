import { deckAction } from '../../model'

import s from './deck-pagination.module.scss'

import { useActions, useAppSelector } from '@/shared/lib'
import { Pagination } from '@/shared/ui'

type Props = {
  totalPages: number
}
export const DeckPagination = (props: Props) => {
  const { totalPages } = props
  const page = useAppSelector(state => state.decks.paramsDeck.currentPage)
  const perPage = useAppSelector(state => String(state.decks.paramsDeck.itemsPerPage))
  const perPageOptions = useAppSelector(state => state.decks.perPageOptions)
  const { setDeckParams } = useActions(deckAction)

  return (
    <div className={s.container}>
      <Pagination
        count={totalPages}
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
