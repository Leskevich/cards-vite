import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  HTMLInputTypeAttribute,
  forwardRef,
  useState,
} from 'react'

import clsx from 'clsx'

import { Typography } from '..'

import style from './text-field.module.scss'

import { CloseIcon, Eye, EyeOff } from '@/shared/assets'
import Search from '@/shared/assets/icons/search.tsx'

export type TextFieldProps = {
  onValueChange?: (value: string) => void
  onClearInput?: () => void
  label?: string
  errorMessage?: string
  className?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      errorMessage,
      placeholder,
      type = 'text',
      label,
      onChange,
      onValueChange,
      onClearInput,
      value,
      ...restProps
    },
    ref
  ) => {
    const classNames = {
      root: clsx(style.root, className),
      input: clsx(style.textField, !!errorMessage && style.error),
      inputContainer: clsx(style.inputContainer, !!errorMessage && style.error),
    }
    const showIconHandler = () => setShowIcon(prev => !prev)
    const clearInputHandler = () => {
      onValueChange?.('')
      onClearInput?.()
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }
    const [showIcon, setShowIcon] = useState(true)

    return (
      <div className={classNames.root}>
        <Typography className={style.label}>{label}</Typography>
        <div className={classNames.inputContainer} tabIndex={0}>
          {type === 'search' && <Search />}
          <div className={style.inputWrapper}>
            <input
              value={value}
              type={generateType(type, showIcon)}
              ref={ref}
              className={classNames.input}
              placeholder={placeholder}
              onChange={handleChange}
              {...restProps}
            />
          </div>

          {type === 'password' && (
            <button type="button" className={style.rightIcon} onClick={showIconHandler}>
              {showIcon ? <EyeOff /> : <Eye />}
            </button>
          )}
          {type === 'search' && value && (
            <button type="button" className={style.rightIcon} onClick={clearInputHandler}>
              <CloseIcon className={style.closeOutlineIcon} />
            </button>
          )}
        </div>
        {errorMessage && <Typography className={style.errorLabel}>{errorMessage}</Typography>}
      </div>
    )
  }
)

const generateType = (type: HTMLInputTypeAttribute, showIcon: boolean) => {
  if (type === 'password' && showIcon) {
    return 'password'
  } else 'text'
}
