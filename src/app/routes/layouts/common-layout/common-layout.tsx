import { Outlet } from 'react-router-dom'

import { Header } from '@/shared/ui'

export const CommonLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
