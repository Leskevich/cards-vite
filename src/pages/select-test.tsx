import { useState } from 'react'

import s from './select-test.module.scss'

import { SelectRadix } from '@/components/ui/select/select.tsx'

export const SelectTest = () => {
  const [value, setValue] = useState<string>('')

  return (
    <div style={{ width: '300px' }}>
      <SelectRadix
        className={s.select}
        value={value}
        placeholder={'Все курсы'}
        options={options}
        onValueChange={setValue}
      />
    </div>
  )
}
const options = [
  'apple',
  'banana',
  'blueberry',
  'grapes',
  'pineapple',
  'cherry',
  'grapefruit',
  'lemon',
  'mango',
  'grapes',
  'pineapple',
  'apple1',
  'banana1',
]
