import { ComponentPropsWithoutRef, CSSProperties, ReactNode, useState } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import { Typography } from '..'

import s from './drop-down.module.scss'

export type DropdownProps = {
  /** Use TooltipItem components as children.*/
  children: ReactNode
  /** The preferred content alignment against the trigger. */
  align?: 'start' | 'center' | 'end'
  trigger?: ReactNode
  className?: string
  style?: CSSProperties
}

export const Dropdown = ({
  children,
  trigger,
  align = 'center',
  className,
  style,
}: DropdownProps) => {
  const [open, setOpen] = useState(false)

  const classNames = {
    content: clsx(s.content, className),
    arrowBox: s.arrowBox,
    arrow: s.arrow,
    itemsBox: s.itemsBox,
  }

  return (
    <DropdownMenuRadix.Root open={open} onOpenChange={setOpen}>
      <DropdownMenuRadix.Trigger asChild>{trigger}</DropdownMenuRadix.Trigger>
      {open && (
        <DropdownMenuRadix.Portal forceMount>
          <DropdownMenuRadix.Content
            asChild
            forceMount
            className={classNames.content}
            align={align}
            sideOffset={12}
            style={style}
            onClick={event => event.stopPropagation()}
          >
            <div>
              <DropdownMenuRadix.Arrow className={classNames.arrowBox} asChild>
                <div className={classNames.arrow} />
              </DropdownMenuRadix.Arrow>
              <div className={classNames.itemsBox}>{children}</div>
            </div>
          </DropdownMenuRadix.Content>
        </DropdownMenuRadix.Portal>
      )}
    </DropdownMenuRadix.Root>
  )
}

export const DropdownItem = (props: DropdownItemProps) => {
  const { children, disabled, onSelect, className, style } = props
  const classNames = {
    item: clsx(s.item, className),
  }

  return (
    <DropdownMenuRadix.Item
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      style={style}
      asChild
    >
      <div>{children}</div>
    </DropdownMenuRadix.Item>
  )
}

export const DropdownItemWithIcon = (props: DropdownItemWithIconProps) => {
  const { icon, disabled, onSelect, text, className, style, ...rest } = props
  const classNames = {
    item: clsx(s.item, className),
    itemIcon: s.itemIcon,
  }

  return (
    <DropdownMenuRadix.Item
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
      onClick={event => event.stopPropagation()}
      style={style}
      asChild
      {...rest}
    >
      <div>
        <div className={classNames.itemIcon}>{icon}</div>
        <Typography variant="caption">{text}</Typography>
      </div>
    </DropdownMenuRadix.Item>
  )
}

export type DropdownItemProps = {
  children?: ReactNode
  disabled?: boolean
  /** Event handler called when the user selects an item (via mouse or keyboard). Calling event.preventDefault in this handler will prevent the dropdown menu from closing when selecting that item. */
  onSelect?: (event: Event) => void
  className?: string
  style?: CSSProperties
}
export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>
