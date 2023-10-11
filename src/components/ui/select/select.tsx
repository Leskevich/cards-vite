import * as Select from '@radix-ui/react-select'
import clsx from 'clsx'

import s from './select.module.scss'

import { KeyboardArrowDown } from '@/assets/icons'

type SelectProps = {
  className?: string
  placeholder?: string
  variant?: 'primary' | 'pagination'
  options: string[]
  value: string
} & Select.SelectProps

export const SelectRadix = ({
  placeholder,
  value,
  className,
  options,
  variant = 'primary',
  onValueChange,
}: SelectProps) => {
  return (
    <Select.Root onValueChange={onValueChange}>
      <Select.Trigger className={clsx(s.trigger, s[variant], className)}>
        <Select.Value placeholder={placeholder}>{value}</Select.Value>
        <Select.Icon className={clsx(s.icon, s[variant])}>
          <KeyboardArrowDown size={variant === 'pagination' ? 16 : 24} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position={'popper'} className={s.content}>
          <Select.Viewport>
            {options.map((i, index) => (
              <Select.Item key={index} value={i}>
                {i}
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
