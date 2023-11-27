import { useDecks } from '@/pages/decks/lib/use-decks.ts'
import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/shared/assets'
import { TableBody, TableCell, TableRow } from '@/shared/ui'

export const DeckBody = () => {
  const { data } = useDecks()

  return (
    <TableBody>
      {data?.items.map(el => {
        return (
          <TableRow key={el.id}>
            <TableCell>{el.name}</TableCell>
            <TableCell>{el.cardsCount}</TableCell>
            <TableCell>{new Date(el.updated).toLocaleDateString()}</TableCell>
            <TableCell>{el.author.name}</TableCell>
            <TableCell>
              <PlayCircleIcon />
              <EditIcon />
              <DeleteIcon />
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}
