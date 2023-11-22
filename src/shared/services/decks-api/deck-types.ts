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

export type DecksType = {
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
  items: DecksType[]
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

export type CreateDeckParams = {
  name: string
  isPrivate?: boolean
  cover?: string
}
