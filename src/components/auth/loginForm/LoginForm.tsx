import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { boolean, z } from 'zod'

import { ControlledCheckbox } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { ControlledTextField } from '@/components/ui/control/cotrolled-textFild/controlled-textFild.tsx'

export const LoginForm = () => {
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
    rememberMe: boolean(),
  })

  type LoginSchema = z.infer<typeof loginSchema>

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    defaultValues: { rememberMe: false, password: '', email: '' },
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (values: LoginSchema) => {
    // eslint-disable-next-line no-console
    console.log(values)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
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
        <Button type={'submit'}>add</Button>
      </form>
    </div>
  )
}
