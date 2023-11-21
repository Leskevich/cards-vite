import { Navigate, Outlet } from 'react-router-dom'

export const PrivateLayout = () => {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
