import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import s from './sing-in.module.scss'

import { signInSchema } from '@/features/auth/lib'
import { routes } from '@/shared/const'
import { Button, Card, ControlledCheckbox, ControlledTextField, Typography } from '@/shared/ui'

export type SignInFormType = z.infer<typeof signInSchema>

type Props = {
  onSubmit: (data: SignInFormType) => void
}

export const SignInForm = (props: Props) => {
  const { control, handleSubmit } = useForm<SignInFormType>({
    mode: 'onSubmit',
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const handleFormSubmitted = handleSubmit(props.onSubmit)

  return (
    <Card className={s.card}>
      <Typography variant="large" className={s.title}>
        Sign In
      </Typography>
      <form onSubmit={handleFormSubmitted}>
        <div className={s.form}>
          <ControlledTextField
            placeholder={'Email'}
            label={'Email'}
            name={'email'}
            control={control}
            autoComplete={'off'}
          />
          <ControlledTextField
            autoComplete={'off'}
            placeholder={'password'}
            label={'Password'}
            type={'password'}
            name={'password'}
            control={control}
          />
        </div>
        <ControlledCheckbox
          className={s.checkbox}
          label={'Remember me'}
          control={control}
          name={'rememberMe'}
        />
        <Typography
          variant="body2"
          as={Link}
          to={routes.AUTH.FORGOT_PASSWORD}
          className={s.recoverPasswordLink}
        >
          Forgot Password?
        </Typography>
        <Button className={s.button} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
      <Typography className={s.caption} variant="body2">
        {`Don't have an account?`}
      </Typography>
      <Typography variant="link1" as={Link} to={routes.AUTH.SIGN_UP} className={s.signUpLink}>
        Sign Up
      </Typography>
    </Card>
  )
}
