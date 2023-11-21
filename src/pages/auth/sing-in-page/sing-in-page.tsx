import { SignInForm } from '@/features/auth'
import { useSingInMutation } from '@/shared/services'

export const SingInPage = () => {
  const [signIn] = useSingInMutation()

  return <SignInForm onSubmit={signIn} />
}
