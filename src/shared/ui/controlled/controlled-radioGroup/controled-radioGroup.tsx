import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/shared/ui'

export type ControlledRadioGroupProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioGroupProps, 'onChange' | 'value' | 'id'>

export const ControlledRadioGroup = <T extends FieldValues>(
  props: ControlledRadioGroupProps<T>
) => {
  const { name, rules, shouldUnregister, control, defaultValue, ...radioGroupProps } = props
  const {
    field: { onChange, value },
  } = useController({ name, rules, shouldUnregister, control, defaultValue })

  return <RadioGroup onChange={onChange} id={name} value={value} {...radioGroupProps} />
}
