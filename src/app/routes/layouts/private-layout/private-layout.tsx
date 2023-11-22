import { Navigate, Outlet } from 'react-router-dom'

import { useAuthMeQuery } from '@/shared/services'

export const PrivateLayout = () => {
  const { data, isLoading } = useAuthMeQuery()

  if (isLoading) return <div>Loading...</div>

  return data ? <Outlet /> : <Navigate to="/login" />
}
