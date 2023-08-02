import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkBox/checkbox.tsx'

export function App() {
  const [check, setCheck] = useState<boolean>(true)

  return (
    <>
      <Checkbox
        label={'dscsdcsdcc'}
        checked={check}
        // disabled={true}
        onChange={() => {
          setCheck(state => !state)
        }}
      />
    </>
  )
}
