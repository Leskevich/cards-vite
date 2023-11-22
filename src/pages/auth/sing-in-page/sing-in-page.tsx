import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { SignInForm } from '@/features/auth'
import { LoginArgs, useAuthMeQuery, useSingInMutation } from '@/shared/services'

export const SingInPage = () => {
  const navigate = useNavigate()
  const [signIn] = useSingInMutation()
  const { data: isAuth } = useAuthMeQuery()

  useEffect(() => {
    if (!isAuth) return

    navigate('/')
  }, [isAuth])

  const handleLogin = async (args: LoginArgs) => {
    await signIn(args)
      .unwrap()
      .then(() => navigate('/'))
  }

  return <SignInForm onSubmit={handleLogin} />
}
