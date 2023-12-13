import { useState } from 'react'

import s from './deck-add.module.scss'

import { AddDecksModal } from '@/features/modals'
import { Button, Typography } from '@/shared/ui'

export const DeckAdd = () => {
  const [visitModal, setVisitModal] = useState<boolean>(false)

  return (
    <div className={s.container}>
      <Typography variant={'large'}>Packs list</Typography>
      <Button onClick={() => setVisitModal(true)}>Add New Pack</Button>
      <AddDecksModal visitModal={visitModal} setVisitModal={setVisitModal} />
    </div>
  )
}
