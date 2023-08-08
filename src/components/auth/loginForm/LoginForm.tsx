import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { boolean, z } from 'zod'

import { ControlledCheckbox } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField/TextField.tsx'

export const LoginForm = () => {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: boolean().default(false),
  })

  type LoginSchema = z.infer<typeof loginSchema>

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (values: LoginSchema) => {
    // eslint-disable-next-line no-console
    console.log(values)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('email')}
          label={'Email'}
          type={'text'}
          errorMessage={errors.email?.message}
        />
        <TextField
          {...register('password')}
          label={'Password'}
          type={'password'}
          errorMessage={errors.password?.message}
        />
        <TextField label={'Search'} type={'search'} errorMessage={errors.password?.message} />
        <ControlledCheckbox
          control={control}
          label={'RememberMe'}
          name={'rememberMe'}
          defaultValue={false}
        />
        <input type={'search'} />
        <Button type={'submit'}>add</Button>
      </form>
    </div>
  )
}
