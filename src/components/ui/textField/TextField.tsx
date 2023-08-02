import { ComponentPropsWithoutRef, forwardRef, KeyboardEvent, useState } from 'react'

import clsx from 'clsx'

import { Label } from '../label/label'

import s from './textField.module.scss'

import { Close, Eye, EyeSlash, Search } from '@/assets/icons'
import { Typography } from '@/components/ui/typography'

export type TextFieldType = {
  type?: 'password' | 'search' | 'text'
  label?: string
  disabled?: boolean
  errorMessage?: string
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onClearValue?: () => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldType>((props, ref) => {
  const {
    onClearValue,
    disabled = false,
    errorMessage,
    className,
    type = 'text',
    label,
    ...rest
  } = props
  const [isEye, setIsEye] = useState<boolean>(true)

  const showError = !!errorMessage && errorMessage.length > 0

  const isShowClearButton = rest.value

  const Input = (type: string) => {
    switch (type) {
      case 'search': {
        return (
          <>
            <div className={classNames.iconStart}>
              <Search />
            </div>
            <input
              disabled={disabled}
              className={classNames.input}
              data-icon={'start' + 'end'}
              ref={ref}
              {...rest}
            />
            <div className={s.iconEnd}>
              {!!isShowClearButton && <Close className={s.close} onClick={onClearValue} />}
            </div>
          </>
        )
      }
      case 'password': {
        return (
          <>
            <input
              type={isEye ? 'password' : 'text'}
              className={classNames.input}
              data-icon={'end'}
              disabled={disabled}
              ref={ref}
              {...rest}
            />
            <div className={classNames.iconEnd}>
              {isEye ? (
                <Eye onClick={() => !disabled && setIsEye(false)} />
              ) : (
                <EyeSlash onClick={() => !disabled && setIsEye(true)} />
              )}
            </div>
          </>
        )
      }
      default: {
        return (
          <input
            disabled={disabled}
            type={'text'}
            className={classNames.input}
            ref={ref}
            {...rest}
          />
        )
      }
    }
  }

  const classNames = {
    container: clsx(s.container, className),
    label: s.label,
    iconStart: clsx(s.iconStart, disabled && s.disabled),
    containerInput: clsx(s.containerInput, errorMessage && s.error),
    input: clsx(s.input, showError && s.error),
    iconEnd: clsx(s.iconEnd, disabled && s.disabled),
  }

  return (
    <div className={classNames.container}>
      <Label label={label} className={classNames.label}>
        <div className={classNames.containerInput}>{Input(type)}</div>
        {showError && <Typography.Error>{errorMessage}</Typography.Error>}
      </Label>
    </div>
  )
})
