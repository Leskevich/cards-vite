import { ReactNode } from 'react'

import * as Label from '@radix-ui/react-label'
import * as SelectRadixUI from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import { KeyboardArrowDown } from '@/assets/icons'
import { Typography } from '@/components/ui'

export type Options = {
  value: string
  label: string
  disabled?: boolean
}
type SelectProps = {
  variant?: 'default' | 'pagination'
  defaultValue?: string
  value?: string
  placeholder?: ReactNode
  selectOptions: Options[]
  onValueChange?: (value: string) => void
  disabled?: boolean
  label?: string
  className?: string
}
export const Select = (props: SelectProps) => {
  const {
    variant = 'DEFAULT',
    defaultValue,
    value,
    placeholder,
    selectOptions,
    onValueChange,
    disabled,
    label,
    className,
  } = props

  return (
    <Label.Root>
      <Typography
        variant={'body2'}
        as={'label'}
        className={`${s.label} ${disabled && s.labelDisabled}`}
      >
        {label}
      </Typography>
      <SelectRadixUI.Root
        defaultValue={defaultValue}
        value={value}
        required
        disabled={disabled}
        onValueChange={onValueChange}
      >
        <SelectRadixUI.Trigger className={clsx(s.trigger, className, s[variant])}>
          <SelectRadixUI.Value placeholder={placeholder} />
          <KeyboardArrowDown className={s.icon} />
        </SelectRadixUI.Trigger>

        <SelectRadixUI.Portal>
          <SelectRadixUI.Content position={'popper'} className={s.content}>
            <SelectRadixUI.Viewport>
              {selectOptions.map(option => {
                return (
                  <SelectRadixUI.Item
                    key={option.value}
                    className={s.item}
                    value={option.label}
                    disabled={option.disabled}
                  >
                    <SelectRadixUI.ItemText>{option.value}</SelectRadixUI.ItemText>
                  </SelectRadixUI.Item>
                )
              })}
            </SelectRadixUI.Viewport>
          </SelectRadixUI.Content>
        </SelectRadixUI.Portal>
      </SelectRadixUI.Root>
    </Label.Root>
  )
}
