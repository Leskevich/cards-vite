import { configureStore } from '@reduxjs/toolkit'

import { decksSlice } from '@/features/decks/model/deck-slice'
import { baseApi } from '@/shared/services'

export const store = configureStore({
  reducer: {
    decks: decksSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
