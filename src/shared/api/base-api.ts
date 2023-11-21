import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es',
  credentials: 'include',
})

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Me', 'Decks'],
  baseQuery: baseQuery,
  endpoints: () => ({}),
})
