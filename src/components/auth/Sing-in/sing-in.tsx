import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { boolean, z } from 'zod'

import s from './sing-in.module.scss'

import { ControlledCheckbox, Button, ControlledTextField, Card, Typography } from '@/components/ui'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: boolean(),
})

type LoginSchema = z.infer<typeof loginSchema>
type Props = {
  onSubmit?: (data: LoginSchema) => void
}

export const SingIn = ({ onSubmit }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    defaultValues: { rememberMe: false, password: '', email: '' },
    resolver: zodResolver(loginSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography.Large className={s.title}>Sign In</Typography.Large>
        <form onSubmit={handleSubmit(onSubmit!)}>
          <ControlledTextField
            control={control}
            name={'email'}
            label={'Email'}
            type={'text'}
            errorMessage={errors.email?.message}
          />
          <ControlledTextField
            control={control}
            name={'password'}
            label={'Password'}
            type={'password'}
            errorMessage={errors.email?.message}
          />
          <ControlledCheckbox control={control} label={'RememberMe'} name={'rememberMe'} />
          <Button type={'submit'} fullWidth={true}>
            <Typography.Subtitle1>Sign In</Typography.Subtitle1>
          </Button>
        </form>
      </Card>
    </>
  )
}
