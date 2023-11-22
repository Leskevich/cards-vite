import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from '@/shared/services'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})
