import s from './deck-sort-bar.module.scss'

import { deckAction } from '@/pages/decks/model'
import { Clear } from '@/shared/assets'
import { useActions, useAppSelector } from '@/shared/lib'
import { useAuthMeQuery } from '@/shared/services'
import { Button, Slider, Tabs, TextField } from '@/shared/ui'

export const DeckSortBar = () => {
  const name = useAppSelector(state => state.decks.paramsDeck.name)
  const authorId = useAppSelector(state => state.decks.paramsDeck.authorId)
  const minCardsCount = useAppSelector(state => state.decks.paramsDeck.minCardsCount)
  const maxCardsCount = useAppSelector(state => state.decks.paramsDeck.maxCardsCount)

  const { data: meData } = useAuthMeQuery()
  const { setDeckParams } = useActions(deckAction)

  return (
    <div className={s.container}>
      <TextField
        type={'search'}
        className={s.searchField}
        value={name}
        onValueChange={name => {
          setDeckParams({ name })
        }}
      />
      <Tabs
        tabs={[
          { value: meData?.id!, title: 'My Cards' },
          { value: '', title: 'All Cards' },
        ]}
        value={authorId}
        onValueChange={authorId => {
          setDeckParams({ authorId })
        }}
      />
      <Slider
        className={s.slider}
        minValue={+minCardsCount}
        maxValue={+maxCardsCount}
        onValueCommit={values => {
          setDeckParams({ minCardsCount: String(values[0]), maxCardsCount: String(values[1]) })
        }}
      />
      <Button variant={'secondary'}>
        <Clear width={16} />
        Clear Filter
      </Button>
    </div>
  )
}
