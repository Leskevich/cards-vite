import { Button, Card, Typography } from '../ui'

import s from './personal-information.module.scss'

import { Change } from '@/assets/icons'
import def from '@/assets/icons/defolt-ava.jpg'

type Props = {
  photo?: string
  email: string
  logOut: () => void
}

export const PersonalInformation = (props: Props) => {
  const { photo, logOut, email } = props

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <div className={s.container}>
        <img className={s.ava} src={photo || def} alt="avatar" />
        <div className={s.wrapperIcon}>
          <Change />
        </div>
      </div>
      <div className={s.containerName}>
        <Typography variant={'h1'}>Ivan</Typography>
        <Change />
      </div>
      <Typography className={s.email} variant={'body2'}>
        {email}
      </Typography>
      <Button onClick={logOut} variant={'secondary'}>
        Logout
      </Button>
    </Card>
  )
}
