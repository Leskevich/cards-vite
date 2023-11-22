import s from './header.module.scss'

import { LogoIncubatorIcon } from '@/shared/assets'
import { Button } from '@/shared/ui/button'
import { MenuHeader } from '@/shared/ui/menu-header'

type Props = {
  isAuth: boolean
}

export const Header = (props: Props) => {
  const { isAuth } = props

  return (
    <header className={s.header}>
      <LogoIncubatorIcon />
      {isAuth && <MenuHeader email={'Leskevich@gmail.com'} name={'artem'} />}
      {!isAuth && <Button variant={'primary'}>Sign In</Button>}
    </header>
  )
}
