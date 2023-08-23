import { Button } from '../ui'

import s from './header.module.scss'

import { LogoIncubator } from '@/assets/icons'
import { MenuHeader } from '@/components/drop-down-menu/menu-header'

type Props = {
  isAuth: boolean
}

export const Header = (props: Props) => {
  const { isAuth } = props

  return (
    <header className={s.header}>
      <LogoIncubator />
      {isAuth && <MenuHeader email={'Leskevich@gmail.com'} name={'artem'} />}
      {!isAuth && <Button variant={'primary'}>Sign In</Button>}
    </header>
  )
}
