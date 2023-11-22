import { Navigate, Outlet } from 'react-router-dom'

import { useAuthMeQuery } from '@/shared/services'

export const PrivateLayout = () => {
  const { isError, isLoading } = useAuthMeQuery()

  if (isLoading) return <div>Loading...</div>

  return isError ? <Navigate to="/login" /> : <Outlet />
}
