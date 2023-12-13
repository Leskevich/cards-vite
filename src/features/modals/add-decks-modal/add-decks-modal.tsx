import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCreateDeckMutation } from '@/shared/services'
import { Button, ControlledCheckbox, ControlledTextField } from '@/shared/ui'
import { Modal, ModalContent, ModalFooter, ModalTitle } from '@/shared/ui/modal/modal.tsx'

export const addNewDeckSchema = z.object({
  name: z.string().nonempty('Введите имя'),
  isPrivate: z.boolean().optional(),
})
export type AddNewDeckFormType = z.infer<typeof addNewDeckSchema>

type Props = {
  visitModal: boolean
  setVisitModal: (visitModal: boolean) => void
}

export const AddDecksModal = (props: Props) => {
  const { visitModal, setVisitModal } = props

  const [createDeck, { isLoading }] = useCreateDeckMutation()

  const { control, handleSubmit } = useForm<AddNewDeckFormType>({
    mode: 'onSubmit',
    resolver: zodResolver(addNewDeckSchema),
    defaultValues: {
      name: '',
      isPrivate: false,
    },
  })

  const handleFormSubmitted = handleSubmit(async data => {
    await createDeck(data)
    setVisitModal(false)
  })

  return (
    <>
      <Modal open={visitModal} onOpenChange={setVisitModal}>
        <ModalTitle title={'Add New Pack'} />
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
              Add New Pack
            </Button>
            <Button onClick={() => setVisitModal(false)} disabled={isLoading} variant={'secondary'}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  )
}
