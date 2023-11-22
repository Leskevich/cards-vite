import { SingUpForm, SignUpFormType } from '@/features/auth'
import { useSignUpMutation } from '@/shared/services'

export const SingUpPage = () => {
  const [signUp] = useSignUpMutation()

  const signUpSubmitHandler = (data: SignUpFormType) => {
    signUp({ email: data.email, password: data.password })
  }

  return <SingUpForm onSubmit={signUpSubmitHandler} />
}
