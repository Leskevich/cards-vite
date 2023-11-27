import { useAppSelector } from '@/shared/lib'
import { useGetDecksQuery } from '@/shared/services'

export const useDecks = () => {
  const deckParams = useAppSelector(state => state.decks.paramsDeck)
  const { data, isLoading } = useGetDecksQuery(deckParams)

  return { data, isLoading }
}
