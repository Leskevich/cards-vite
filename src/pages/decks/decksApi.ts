import { baseApi } from '@/shared/api'

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getPack: builder.query<ResponseGetDecks, DecksParams>({
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

export const { useGetPackQuery, useCreateDeckMutation } = decksApi
export type Pagination = {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalItems: number
}

type Author = {
  id: string
  name: string
}

type Items = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number | null
  cover?: string
  rating: number
  isDeleted?: boolean | null
  isBlocked?: boolean | null
  created: string
  updated: string
  cardsCount: number
  author: Author
}

export type ResponseGetDecks = {
  maxCardsCount: number
  pagination: Pagination
  items: Items[]
}
export type DecksParams = {
  minCardsCount?: string
  maxCardsCount?: string
  name?: string
  authorId?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
} | void
