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

const slice = createSlice({
  name: 'deck',
  initialState: {
    paramsDeck: {
      itemsPerPage: 5 as number,
      currentPage: 1 as number,
      orderBy: '' as string,
      authorId: '' as string,
      name: '' as string,
      maxCardsCount: '' as string,
      minCardsCount: '0' as string,
    },
    sliderValue: [0] as number[],
    perPageOptions: ['5', '10', '15'] as string[],
  },
  reducers: {
    setDeckParams: (state, action: PayloadAction<DeckParamsType>) => {
      state.paramsDeck = { ...state.paramsDeck, ...action.payload }
    },
    setSliderValue: (state, action: PayloadAction<number[]>) => {
      state.sliderValue = action.payload
    },
    clearDecksParams: (state, action: PayloadAction<{ maxCardsCount: number }>) => {
      state.paramsDeck = {
        itemsPerPage: state.paramsDeck.itemsPerPage,
        currentPage: state.paramsDeck.currentPage,
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
