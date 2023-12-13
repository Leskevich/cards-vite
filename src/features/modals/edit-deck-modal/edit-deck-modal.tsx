import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useEditDeckMutation } from '@/shared/services'
import {
  Button,
  ControlledCheckbox,
  ControlledTextField,
  Modal,
  ModalContent,
  ModalFooter,
  ModalTitle,
} from '@/shared/ui'

const addNewDeckSchema = z.object({
  name: z.string().nonempty(),
  isPrivate: z.boolean().optional(),
})

type AddNewDeckFormType = z.infer<typeof addNewDeckSchema>

type Props = {
  visitModal: boolean
  setVisitModal: (visit: boolean) => void
  deckId: string
}
export const EditDeckModal = (props: Props) => {
  const { visitModal, setVisitModal, deckId } = props

  const [editDeck, { isLoading }] = useEditDeckMutation()

  const { control, handleSubmit } = useForm<AddNewDeckFormType>({
    mode: 'onSubmit',
    resolver: zodResolver(addNewDeckSchema),
    defaultValues: {
      name: '',
      isPrivate: false,
    },
  })

  const handleFormSubmitted = handleSubmit(async data => {
    await editDeck({ id: deckId, ...data })
    setVisitModal(false)
  })

  return (
    <div>
      <Modal open={visitModal} onOpenChange={setVisitModal}>
        <ModalTitle title={'Edit Pack'} />
        <form onSubmit={handleFormSubmitted}>
          <ModalContent>
            <ControlledTextField
              placeholder={'Name'}
              label={'Name Pack'}
              name={'name'}
              control={control}
            />
            <ControlledCheckbox label={'Private pack'} name={'isPrivate'} control={control} />
          </ModalContent>
          <ModalFooter>
            <Button disabled={isLoading} type={'submit'}>
              Save Changes
            </Button>
            <Button onClick={() => setVisitModal(false)} disabled={isLoading} variant={'secondary'}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  )
}
