import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as LabelRadixUI from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './label.module.scss'

import { Typography } from '@/components/ui'

export type LabelProps = {
  label?: ReactNode
} & ComponentPropsWithoutRef<'label'>

export const Label: FC<LabelProps> = ({ label, children, className, ...rest }) => {
  const classNames = {
    label: clsx(s.label, className),
  }

  return (
    <LabelRadixUI.Root {...rest}>
      {!!label && <Typography.Body2 className={classNames.label}>{label}</Typography.Body2>}
      {children}
    </LabelRadixUI.Root>
  )
}
