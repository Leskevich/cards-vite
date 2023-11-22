import {
  ResponseGetDecks,
  baseApi,
  DecksParams,
  CreateDeckParams,
  DecksType,
} from '@/shared/services'

const deckApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<ResponseGetDecks, DecksParams>({
      query: params => {
        return { url: 'v1/decks', method: 'GET', params: params ?? {} }
      },
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<DecksType, CreateDeckParams>({
      query: ({ name }) => ({ url: 'v1/decks', method: 'POST', body: { name } }),
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const { useGetDecksQuery, useCreateDeckMutation } = deckApi
