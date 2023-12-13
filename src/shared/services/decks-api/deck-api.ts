import {
  ResponseGetDecks,
  baseApi,
  DecksParams,
  CreateDeckParams,
  DecksType,
  UpdateDeckParams,
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
    removeDeck: builder.mutation<DecksType, { id: string }>({
      query: ({ id }) => ({ url: `v1/decks/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Decks'],
    }),
    editDeck: builder.mutation<DecksType, UpdateDeckParams>({
      query: ({ id, ...body }) => ({ url: `v1/decks/${id}`, method: 'PATCH', body }),
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const {
  useGetDecksQuery,
  useCreateDeckMutation,
  useRemoveDeckMutation,
  useEditDeckMutation,
} = deckApi
