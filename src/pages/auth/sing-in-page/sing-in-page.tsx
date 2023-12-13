import { Navigate } from 'react-router-dom'

import { SignInForm } from '@/features/auth'
import { useAuthMeQuery, useSingInMutation } from '@/shared/services'

export const SingInPage = () => {
  const [signIn] = useSingInMutation()
  const { isError, isLoading } = useAuthMeQuery()

  if (isLoading) return <h1>Loading...</h1>
  if (!isError) return <Navigate to={'/decks-pages'} replace={true} />

  return <SignInForm onSubmit={signIn} />
}
