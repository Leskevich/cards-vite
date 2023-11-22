import s from './header.module.scss'

import { LogoIncubatorIcon } from '@/shared/assets'
import { useAuthMeQuery } from '@/shared/services'
import { Button } from '@/shared/ui/button'
import { MenuHeader } from '@/shared/ui/menu-header'

export const Header = () => {
  const { data, isLoading } = useAuthMeQuery()

  if (isLoading) return null

  return (
    <header className={s.header}>
      <LogoIncubatorIcon />
      {data && <MenuHeader email={'Leskevich@gmail.com'} name={'artem'} />}
      {!data && <Button variant={'primary'}>Sign In</Button>}
    </header>
  )
}
