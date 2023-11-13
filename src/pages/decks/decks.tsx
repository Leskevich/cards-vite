import { useGetPackQuery } from './decksApi'

import { Delete, Edit, PlayCircle } from '@/shared/assets'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/shared/ui'

export const Decks = () => {
  const { data, isLoading } = useGetPackQuery({ name: 'asasac' })

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
            <TableHeadCell></TableHeadCell>
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
                <TableCell>
                  <PlayCircle />
                  <Edit />
                  <Delete />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
