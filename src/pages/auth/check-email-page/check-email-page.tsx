import s from './check-email.module.scss'

import { CheckEmail } from '@/assets/icons'
import { Button, Card, Typography } from '@/components/ui'

export const CheckEmailPage = () => {
  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Check Email
      </Typography>
      <CheckEmail className={s.icon} />
      <Typography className={s.text} variant={'body2'}>
        We’ve sent an Email with instructions
        <br /> to example@mail.com
      </Typography>
      <Button className={s.button}>Back to Sign In</Button>
    </Card>
  )
}
