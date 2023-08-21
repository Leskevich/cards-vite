import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './typography.module.scss'

export type TextProps<T extends ElementType> = {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
    | 'error'
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TextProps<T>) => {
  const { as, className, variant = 'body1', ...restProps } = props
  const classNames = clsx(s[variant], className ?? '')
  const Component = as || 'p'

  return <Component className={classNames} {...restProps} />
}
