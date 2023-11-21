import { SignInForm, useAuth } from '@/features/auth'

export const SingInPage = () => {
  const { signInHandleSubmit } = useAuth()

  return <SignInForm onSubmit={signInHandleSubmit} />
}
