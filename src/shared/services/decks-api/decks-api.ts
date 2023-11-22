import { DecksParams, ResponseGetDecks } from './decks-api-types.ts'

import { baseApi } from '@/shared/services'

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<ResponseGetDecks, DecksParams>({
      query: params => {
        return { url: 'v1/decks', method: 'GET', params: params ?? {} }
      },
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<any, { name: string }>({
      query: ({ name }) => ({ url: 'v1/decks', method: 'POST', body: { name } }),
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const { useGetDecksQuery, useCreateDeckMutation } = decksApi
