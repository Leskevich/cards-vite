import { useEffect, useState } from 'react'

import { useDecks } from '../../lib/use-decks'
import { deckAction } from '../../model/deck-slice'

import s from './deck-sort-bar.module.scss'

import { Clear } from '@/shared/assets'
import { useActions, useAppSelector, useDebounce } from '@/shared/lib'
import { useAuthMeQuery } from '@/shared/services'
import { Button, Slider, Tabs, TextField } from '@/shared/ui'

export const DeckSortBar = () => {
  const { data: meData } = useAuthMeQuery()
  const { data: decksData } = useDecks()

  const [name, setName] = useState<string>('')
  const debounce = useDebounce(name, 500)

  useEffect(() => {
    setDeckParams({ name })
  }, [debounce])

  const authorId = useAppSelector(state => state.decks.paramsDeck.authorId)
  const sliderValue = useAppSelector(state => state.decks.sliderValue)

  const { setDeckParams, clearDecksParams, setSliderValue } = useActions(deckAction)

  return (
    <div className={s.container}>
      <TextField type={'search'} className={s.searchField} value={name} onValueChange={setName} />
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
        value={[sliderValue[0], sliderValue[1] ? sliderValue[1] : decksData?.maxCardsCount!]}
        min={0}
        max={decksData?.maxCardsCount}
        onValueChange={setSliderValue}
        onValueCommit={values => {
          setDeckParams({ minCardsCount: String(values[0]), maxCardsCount: String(values[1]) })
        }}
      />
      <Button
        onClick={() => clearDecksParams({ maxCardsCount: decksData?.maxCardsCount! })}
        variant={'secondary'}
      >
        <Clear width={16} />
        Clear Filter
      </Button>
    </div>
  )
}
