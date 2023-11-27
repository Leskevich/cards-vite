import s from './deck-add.module.scss'

import { Button, Typography } from '@/shared/ui'
export const DeckAdd = () => {
  return (
    <div className={s.container}>
      <Typography variant={'large'}> Packs list</Typography>
      <Button>Add New Pack</Button>
    </div>
  )
}
