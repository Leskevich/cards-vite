import { SingIn } from '@/components/auth'
import { TextField } from '@/components/ui'

export function App() {
  return (
    <>
      <SingIn />
      <TextField onClearClick={() => {}} />
      <TextField type={'search'} />
    </>
  )
}
