import { useState } from 'react'

import s from './cell-with-icon.module.scss'

import { EditDeckModal, RemoveDeckModal } from '@/features/modals'
import { DeleteIcon, EditIcon, PlayCircleIcon } from '@/shared/assets'
import { DecksType } from '@/shared/services'

type Props = {
  deck: DecksType
}
export const IconGroup = (props: Props) => {
  const { id } = props.deck
  const [remove, setRemove] = useState<boolean>(false)
  const [edit, setEdit] = useState<boolean>(false)

  return (
    <div className={s.iconGroup}>
      <button className={s.button}>
        <PlayCircleIcon />
      </button>
      <button onClick={() => setEdit(true)} className={s.button}>
        <EditIcon />
      </button>
      <EditDeckModal deckId={id} visitModal={edit} setVisitModal={setEdit} />
      <button onClick={() => setRemove(true)} className={s.button}>
        <DeleteIcon />
      </button>
      <RemoveDeckModal deckId={id} visitModal={remove} setVisitModal={setRemove} />
    </div>
  )
}
