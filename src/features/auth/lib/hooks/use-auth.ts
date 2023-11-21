import { useSingInMutation } from '@/shared/services'

export const useAuth = () => {
  const [signIn] = useSingInMutation()
  const signInHandleSubmit = (values: any) => {
    signIn(values)
  }

  return {
    signInHandleSubmit,
  }
}
