import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './new-password.module.scss'

import { newPasswordSchema } from '@/features/auth/lib'
import { Button, Card, ControlledTextField, Typography } from '@/shared/ui'

type FormType = z.infer<typeof newPasswordSchema>
type Props = {
  onSubmit?: (data: FormType) => void
}
export const NewPasswordForm = (props: Props) => {
  const { handleSubmit, control } = useForm<FormType>()
  const handleFormSubmitted = handleSubmit(props.onSubmit!)

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Create new password
      </Typography>
      <form onSubmit={handleFormSubmitted}>
        <div className={s.form}>
          <ControlledTextField
            control={control}
            placeholder={'Password'}
            label={'Password'}
            type={'password'}
            name={'password'}
          />
        </div>
        <Typography className={s.instructions} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button type={'submit'} fullWidth>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}
