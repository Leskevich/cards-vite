import { SignIn } from '@/components/auth'

export function App() {
  return (
    <>
      <SignIn onSubmit={s => console.log(s)} />
    </>
  )
}
