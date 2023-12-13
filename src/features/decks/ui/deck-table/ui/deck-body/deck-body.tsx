import { IconGroup } from './ui'

import { useDecks } from '@/features/decks/lib/use-decks.ts'
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
              <IconGroup deck={el} />
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}
