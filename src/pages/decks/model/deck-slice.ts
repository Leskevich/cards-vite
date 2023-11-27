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
      maxCardsCount: '100' as string,
      minCardsCount: '0' as string,
    },
    perPageOptions: ['5', '10', '15'] as string[],
  },
  reducers: {
    setDeckParams: (state, action: PayloadAction<DeckParamsType>) => {
      state.paramsDeck = { ...state.paramsDeck, ...action.payload }
    },
  },
})

export const deckAction = slice.actions
export const decksSlice = slice.reducer
