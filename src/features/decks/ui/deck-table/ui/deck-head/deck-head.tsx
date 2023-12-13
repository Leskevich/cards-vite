import { TableHead, TableHeadCell, TableRow } from '@/shared/ui'

export const DeckHead = () => {
  return (
    <TableHead>
      <TableRow>
        <TableHeadCell>Name</TableHeadCell>
        <TableHeadCell>Cards</TableHeadCell>
        <TableHeadCell>Last Updated</TableHeadCell>
        <TableHeadCell>Created by</TableHeadCell>
        <TableHeadCell></TableHeadCell>
      </TableRow>
    </TableHead>
  )
}
