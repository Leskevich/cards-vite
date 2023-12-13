import { useRemoveDeckMutation } from '@/shared/services'
import { Button } from '@/shared/ui'
import { Modal, ModalContent, ModalFooter, ModalTitle } from '@/shared/ui/modal/modal.tsx'

type Props = {
  visitModal: boolean
  setVisitModal: (visitModal: boolean) => void
  deckId: string
}
export const RemoveDeckModal = (props: Props) => {
  const { visitModal, setVisitModal, deckId } = props

  const [removeDeck, { isLoading }] = useRemoveDeckMutation()

  const removeDeckHandler = async () => {
    await removeDeck({ id: deckId })
    setVisitModal(false)
  }

  return (
    <>
      <Modal open={visitModal} onOpenChange={setVisitModal}>
        <ModalTitle title={'Add New Pack'} />
        <ModalContent>
          Do you really want to remove Card Name? All cards will be deleted.
        </ModalContent>
        <ModalFooter>
          <Button disabled={isLoading} type={'submit'} onClick={removeDeckHandler}>
            Delete Card
          </Button>
          <Button onClick={() => setVisitModal(false)} variant={'secondary'}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
