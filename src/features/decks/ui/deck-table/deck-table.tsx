import s from './deck-tabl.module.scss'
import { DeckBody, DeckHead } from './ui'

import { Table } from '@/shared/ui'

export const DeckTable = () => {
  return (
    <div className={s.container}>
      <Table className={s.table}>
        <DeckHead />
        <DeckBody />
      </Table>
    </div>
  )
}
