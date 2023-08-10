import { ComponentProps, KeyboardEvent, useState } from 'react'

import { clsx } from 'clsx'

import s from './textField.module.scss'

import { Close, Eye, EyeSlash, Search } from '@/assets/icons'
import { Label, Typography } from '@/components/ui'

export type TextFieldProps = {
  label?: string
  errorMessage?: string
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onClearClick?: () => void
} & ComponentProps<'input'>

export const TextField = (props: TextFieldProps) => {
  let { label, onEnter, onKeyDown, className, errorMessage, onClearClick, type, ...rest } = props

  const [showPassword, setShowPassword] = useState(false)

  const finalType = getFinalType(type, showPassword)

  const showError = !!errorMessage && errorMessage.length > 0

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && e.key === 'Enter') {
      onEnter(e)
    }
    onKeyDown?.(e)
  }
  const classNames = {
    root: clsx(className, s.box),
    label: clsx(rest.disabled && s.disable),
    input: clsx(s.input, showError && s.error),
    iconStart: s.iconStart,
    iconEnd: s.showClose,
    inputContainer: clsx(s.inputContainer),
    showPassword: s.showPassword,
  }

  const isShowClearButton = !!onClearClick && String(rest?.value).length > 0

  const dataIconStart = type === 'search' ? 'start' : ''
  const dataIconEnd = isShowClearButton || type === 'password' ? 'end' : ''
  const dataIcon = dataIconStart + dataIconEnd

  return (
    <div className={classNames.root}>
      <Label label={label} className={classNames.label}>
        <div className={classNames.inputContainer}>
          {!!dataIconStart && (
            <span className={classNames.iconStart}>
              <Search color={'var(--color-text-secondary)'} />
            </span>
          )}
          <input
            className={classNames.input}
            type={finalType}
            data-icon={dataIcon}
            onKeyDown={handleKeyDown}
            {...rest}
          />
          {type === 'password' && (
            <button
              className={classNames.showPassword}
              type={'button'}
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? <EyeSlash /> : <Eye />}
            </button>
          )}
          {isShowClearButton && (
            <button className={classNames.iconEnd} onClick={onClearClick} type="button">
              <Close />
            </button>
          )}
        </div>
      </Label>

      {showError && <Typography.Error>{errorMessage}</Typography.Error>}
    </div>
  )
}

function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
  if ((type === 'password' && showPassword) || type === 'search') {
    return 'text'
  }

  return type
}
