import { DevTool } from '@hookform/devtools'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import s from './sing-up.module.scss'

import { signUpSchema } from '@/features/auth/lib'
import { routes } from '@/shared/const'
import { Button, Card, ControlledTextField, Typography } from '@/shared/ui'

type FormType = z.infer<typeof signUpSchema>

type Props = {
  onSubmit?: (data: FormType) => void
}

export const SingUpForm = (props: Props) => {
  const { handleSubmit, control } = useForm<FormType>()
  const handleFormSubmitted = handleSubmit(props.onSubmit!)

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography variant={'large'} className={s.title}>
          Sign Up
        </Typography>
        <form onSubmit={handleFormSubmitted}>
          <div className={s.form}>
            <ControlledTextField
              control={control}
              placeholder={'Email'}
              label={'Email'}
              name={'email'}
            />
            <ControlledTextField
              control={control}
              type={'password'}
              placeholder={'Password'}
              label={'Password'}
              name={'password'}
            />
            <ControlledTextField
              control={control}
              type={'password'}
              placeholder={'Confirm Password'}
              label={'Confirm Password'}
              name={'passwordConfirmation'}
            />
          </div>

          <Button type={'submit'} fullWidth>
            Sign Up
          </Button>
        </form>
        <Typography variant={'body2'} className={s.caption}>
          Already have an account?
        </Typography>
        <Typography variant={'link1'} as={Link} to={routes.AUTH.SING_IN} className={s.singInLink}>
          Sign In
        </Typography>
      </Card>
    </>
  )
}
