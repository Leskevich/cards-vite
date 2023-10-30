import { RouteObject } from 'react-router-dom'

import { RecoverPassword, SignIn, SingUp } from '@/components/auth'

export const publicRoutes: RouteObject[] = [
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
