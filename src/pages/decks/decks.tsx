import { useGetPackQuery } from './decksApi'

import { Delete, Edit, PlayCircle } from '@/assets/icons'
import { MenuHeader } from '@/components/drop-down-menu/menu-header'
import { Button, Dropdown, DropdownItemWithIcon } from '@/components/ui'
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
  const trigger = <Button>open</Button>

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
      <div>
        <MenuHeader name={'scds'} email={'scdsc'} />
        <Dropdown align={'center'} trigger={trigger}>
          <DropdownItemWithIcon icon={<Edit />} text="Изменить" onSelect={() => {}} />
          <DropdownItemWithIcon icon={<Edit />} text="Удалить" onSelect={() => {}} />
          <DropdownItemWithIcon icon={<Edit />} text="Удалить" onSelect={() => {}} />
          <DropdownItemWithIcon icon={<Edit />} text="Удалить" onSelect={() => {}} />
          <DropdownItemWithIcon icon={<Edit />} text="Удалить" onSelect={() => {}} />
        </Dropdown>
      </div>
    </div>
  )
}
