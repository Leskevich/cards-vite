import { Navigate, Outlet } from 'react-router-dom'

export const PrivateLayout = () => {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
