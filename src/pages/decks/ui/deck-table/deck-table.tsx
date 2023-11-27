import { DeckBody } from './deck-body'
import { DeckHead } from './deck-head'
import s from './deck-tabl.module.scss'

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

import { Table } from '@/shared/ui'
