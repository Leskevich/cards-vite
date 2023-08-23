import { Header } from './components/header'

import { SignIn } from '@/components/auth'

export function App() {
  return (
    <>
      <Header isAuth={true} />
      <SignIn onSubmit={s => console.log(s)} />
    </>
  )
}
