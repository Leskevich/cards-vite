import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/shared/ui'

export type ControlledTextFieldProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<TextFieldProps, 'onChange' | 'value' | 'id'>

export const ControlledTextField = <TFieldValues extends FieldValues>(
  props: ControlledTextFieldProps<TFieldValues>
) => {
  const { name, rules, shouldUnregister, control, defaultValue, ...textFieldProps } = props
  const {
    field: { onChange, value },
  } = useController({ name, rules, shouldUnregister, control, defaultValue })

  return <TextField onChange={onChange} value={value} id={name} {...textFieldProps} />
}
