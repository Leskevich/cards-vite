import { useGetDecksQuery } from '@/shared/services'

export const UseDecks = () => {
  const { data, isLoading } = useGetDecksQuery()

  return { data, isLoading }
}
