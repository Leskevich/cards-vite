import { useGetPackQuery } from './decksApi'

import { Typography } from '@/components/ui'
import { Table, TableHead, TableHeadCell } from '@/components/ui/table'

export const Decks = () => {
  const { data, isLoading } = useGetPackQuery()

  if (isLoading) return <>...loading</>

  return (
    <div>
      <Table>
        <TableHead>
          <TableHeadCell>
            <Typography variant={'subtitle2'}>Name</Typography>
          </TableHeadCell>
          <TableHeadCell>
            <Typography variant={'subtitle2'}>Cards</Typography>
          </TableHeadCell>
          <TableHeadCell>
            <Typography variant={'subtitle2'}>Last Updated</Typography>
          </TableHeadCell>
          <TableHeadCell>
            <Typography variant={'subtitle2'}>Created by</Typography>
          </TableHeadCell>
        </TableHead>
      </Table>
    </div>
  )
}
