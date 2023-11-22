import { DevTool } from '@hookform/devtools'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './recover-password.module.scss'

import { recoverPasswordSchema } from '@/features/auth/lib'
import { Button, Card, ControlledTextField, Typography } from '@/shared/ui'

type FormType = z.infer<typeof recoverPasswordSchema>

type Props = {
  onSubmit?: (data: FormType) => void
}

export const RecoverPasswordForm = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>()
  const handleFormSubmitted = handleSubmit(props.onSubmit!)

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Forgot your password?
        </Typography>
        <form onSubmit={handleFormSubmitted}>
          <div className={s.form}>
            <ControlledTextField
              control={control}
              name={'email'}
              placeholder={'Email'}
              label={'Email'}
            />
          </div>
          <Typography className={s.instructions} variant={'body2'}>
            Enter your email address and we will send you further instructions{' '}
          </Typography>
          <Button className={s.button} fullWidth>
            Send Instructions
          </Button>
        </form>
        <Typography className={s.caption} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Typography className={s.tryLoginLink} variant={'link1'} as={'a'}>
          Try logging in
        </Typography>
      </Card>
    </>
  )
}
