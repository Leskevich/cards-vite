import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { RecoverPassword, SignIn, SingUp } from '@/components/auth'
import { PersonalInformation } from '@/components/profile'
import { Decks } from '@/pages'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <SignIn onSubmit={() => {}} />,
  },
  {
    path: '/recover-password',
    element: <RecoverPassword onSubmit={() => {}} />,
  },
  {
    path: '/sign-up',
    element: <SingUp onSubmit={() => {}} />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PersonalInformation email={'sdcscds'} logOut={() => {}} />,
  },
  {
    path: '/decks',
    element: <Decks />,
  },
]

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}