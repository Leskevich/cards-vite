import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/shared/ui'

export type ControlledCheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'onChange' | 'value' | 'id'>

export const ControlledCheckbox = <T extends FieldValues>(props: ControlledCheckboxProps<T>) => {
  const { name, rules, shouldUnregister, control, defaultValue, ...checkboxProps } = props
  const {
    field: { onChange, value },
  } = useController({ name, rules, shouldUnregister, control, defaultValue })

  return <Checkbox {...checkboxProps} onChange={onChange} checked={value} id={name} />
}
