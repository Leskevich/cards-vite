import { FC } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-group.module.scss'

import { Typography } from '@/components/ui'

export type Item = {
  label: string
  value: string
}

type RadioGroupPropsType = {
  value: string
  items: Item[]
  onChange: (value: string) => void
  className?: string
  defaultValue?: string
  errorMessage?: string
  disabled?: boolean
  required?: boolean
  name?: string
}

export const RadioGroup: FC<RadioGroupPropsType> = props => {
  const { value, items, onChange, className, errorMessage, disabled, ...rest } = props

  const classNames = {
    root: clsx(s.root, className),
  }

  return (
    <form>
      <RadioGroupRadix.Root
        value={value}
        className={classNames.root}
        onValueChange={onChange}
        disabled={disabled}
        {...rest}
      >
        {items.map((e, i) => (
          <div className={s.container} key={i}>
            <RadioGroupRadix.Item className={s.item} value={e.value}>
              <RadioGroupRadix.Indicator className={s.indicator} />
            </RadioGroupRadix.Item>
            <label className={s.label}>{e.label}</label>
          </div>
        ))}
        {errorMessage && <Typography variant={'error'}>{errorMessage}</Typography>}
      </RadioGroupRadix.Root>
    </form>
  )
}
