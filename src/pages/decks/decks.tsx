import { useGetPackQuery } from './decksApi'

export const Decks = () => {
  const { data, isLoading } = useGetPackQuery({})

  if (isLoading) return <>...loading</>

  return <div>{data?.items.map(res => <div key={res.id}>{res.name}</div>)}</div>
}
