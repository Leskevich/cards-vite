import { ComponentPropsWithoutRef, FC } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import { Typography } from '..'

import s from './modal.module.scss'

import { CloseIcon } from '@/shared/assets'

type ModalProps = {
  width?: '33.875rem' | '26.25rem'
} & Dialog.DialogProps

export const Modal: FC<ModalProps> = ({
  open,
  onOpenChange,
  width = '33.875rem',
  children,
}: ModalProps) => (
  <Dialog.Root open={open} defaultOpen={false} onOpenChange={onOpenChange} modal={true}>
    <Dialog.Portal>
      <Dialog.Overlay className={s.DialogOverlay} />
      <Dialog.Content className={s.DialogContent} style={{ width }}>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)

export const ModalTitle = (props: { title: string }) => {
  return (
    <Dialog.Title className={s.modalTitle}>
      <Typography variant={'h2'} as={'h2'}>
        {props.title}
      </Typography>
      <Dialog.Close asChild>
        <button className={s.closeButtonTitle}>
          <CloseIcon />
        </button>
      </Dialog.Close>
    </Dialog.Title>
  )
}

type ModalContentTextProps = ComponentPropsWithoutRef<'div'>

export const ModalContent: FC<ModalContentTextProps> = ({ className, children }) => {
  return <div className={clsx(className, s.ModalContent)}>{children}</div>
}

type ModalFooterProps = ComponentPropsWithoutRef<'div'>

export const ModalFooter: FC<ModalFooterProps> = ({ children }) => {
  return <div className={s.ModalFooter}>{children}</div>
}
