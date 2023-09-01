import { useGetPackQuery } from './decksApi'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table'

export const Decks = () => {
  const { data, isLoading } = useGetPackQuery()

  if (isLoading) return <>...loading</>

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created by</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items.map(el => {
            return (
              <TableRow key={el.id}>
                <TableCell>{el.name}</TableCell>
                <TableCell>{el.cardsCount}</TableCell>
                <TableCell>{el.updated}</TableCell>
                <TableCell>{el.created}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
