import { Outlet } from 'react-router-dom'

import { useAuthMeQuery } from '@/shared/services'
import { Header } from '@/shared/ui'

export const CommonLayout = () => {
  const { data } = useAuthMeQuery()

  return (
    <div>
      <Header isAuth={!!data} />
      <Outlet />
    </div>
  )
}
