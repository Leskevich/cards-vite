import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SwitchPrimitives from '@radix-ui/react-switch'
import { clsx } from 'clsx'

import s from './toggle.module.scss'

export const Toggle = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const classNames = {
    root: clsx(s.root, className),
    thumb: s.thumb,
  }

  return (
    <SwitchPrimitives.Root className={classNames.root} {...props} ref={ref}>
      <SwitchPrimitives.Thumb className={classNames.thumb} />
    </SwitchPrimitives.Root>
  )
})
