import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type DeckParamsType = {
  itemsPerPage?: number
  currentPage?: number
  orderBy?: string
  authorId?: string
  name?: string
  maxCardsCount?: string
  minCardsCount?: string
}
export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

const slice = createSlice({
  name: 'deck',
  initialState: {
    paramsDeck: {
      itemsPerPage: 5 as number,
      currentPage: 1 as number,
      orderBy: '' as string | null,
      authorId: '' as string,
      name: '' as string,
      maxCardsCount: '' as string,
      minCardsCount: '0' as string,
    },
    sortDeck: null as Sort,
    sliderValue: [0] as number[],
    perPageOptions: ['5', '10', '15'] as string[],
  },
  reducers: {
    setDeckParams: (state, action: PayloadAction<Omit<DeckParamsType, 'orderBy'>>) => {
      state.paramsDeck = { ...state.paramsDeck, ...action.payload }
    },
    setSliderValue: (state, action: PayloadAction<number[]>) => {
      state.sliderValue = action.payload
    },
    setSortDeck: (state, action: PayloadAction<Sort>) => {
      state.sortDeck = action.payload
      state.paramsDeck.orderBy = action.payload
        ? `${action.payload.key}-${action.payload.direction}`
        : null
    },
    clearDecksParams: (state, action: PayloadAction<{ maxCardsCount: number }>) => {
      state.paramsDeck = {
        itemsPerPage: 5,
        currentPage: 1,
        orderBy: '',
        name: '',
        authorId: '',
        minCardsCount: '0',
        maxCardsCount: '',
      }
      state.sliderValue = [0, action.payload.maxCardsCount]
    },
  },
})

export const deckAction = slice.actions
export const decksSlice = slice.reducer
