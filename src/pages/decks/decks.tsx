import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/shared/assets'
import { useGetDecksQuery } from '@/shared/services/decks-api'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/shared/ui'

export const Decks = () => {
  const { data, isLoading } = useGetDecksQuery({ name: 'asasac' })

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
                  <PlayCircleIcon />
                  <EditIcon />
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
