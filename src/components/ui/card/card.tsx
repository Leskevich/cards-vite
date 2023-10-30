import { ComponentProps, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type CommonProps = {
  children: ReactNode
  className?: string
} & ComponentProps<'div'>

export const Card = (props: CommonProps) => {
  const { children, className, ...restProps } = props

  return (
    <div className={clsx(s.root, className)} {...restProps}>
      {children}
    </div>
  )
}
