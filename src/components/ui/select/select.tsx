import { ReactNode } from 'react'

import * as Label from '@radix-ui/react-label'
import * as SelectRadixUI from '@radix-ui/react-select'

import s from './select.module.scss'

import { KeyboardArrowDown } from '@/assets/icons'
import { Typography } from '@/components/ui'

export type Options = {
  value: string
  disabled?: boolean
}
type SelectProps = {
  defaultValue?: string
  value?: string
  placeholder?: ReactNode
  selectOptions: Options[]
  onValueChange?: (value: string) => void
  disabled?: boolean
  label?: string
  className?: string
}
export const Select = ({
  defaultValue,
  value,
  placeholder,
  selectOptions,
  onValueChange,
  disabled,
  label,
  className,
}: SelectProps) => {
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
        <SelectRadixUI.Trigger className={`${s.trigger} ${className}`} tabIndex={1}>
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
                    value={option.value}
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
