import { DevTool } from '@hookform/devtools'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import s from './sing-up.module.scss'

import { Button, Card, ControlledTextField, Typography } from '@/components/ui'

const schema = z
  .object({
    email: z.string().email('Invalid email address').nonempty('Enter email'),
    password: z.string().nonempty('Enter password'),
    passwordConfirmation: z.string().nonempty('Confirm your password'),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirmation) {
      ctx.addIssue({
        message: 'Passwords do not match',
        code: z.ZodIssueCode.custom,
        path: ['passwordConfirmation'],
      })
    }

    return data
  })

type FormType = z.infer<typeof schema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const SingUp = (props: Props) => {
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
        <Typography variant={'link1'} as={Link} to="/login" className={s.singInLink}>
          Sign In
        </Typography>
      </Card>
    </>
  )
}
