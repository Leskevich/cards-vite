import { DevTool } from '@hookform/devtools'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, Card, ControlledTextField, Typography } from '../../ui'

import s from './recover-password.module.scss'

const schema = z.object({
  email: z.string().email('Invalid email address').nonempty('Enter email'),
})

type FormType = z.infer<typeof schema>

export const RecoverPassword = () => {
  const { control } = useForm<FormType>()

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Forgot your password?
        </Typography>
        <form>
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
          <Button className={s.button} typy={'submit'} fullWidth>
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
