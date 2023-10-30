import { RouteObject } from 'react-router-dom'

import { NewPasswordPage, ForgotPasswordPage, SingInPages, SingUpPage } from '@/pages'
import { routes } from '@/routes'

export const publicRoutes: RouteObject[] = [
  { path: routes.AUTH.SING_IN, element: <SingInPages /> },
  { path: routes.AUTH.SIGN_UP, element: <SingUpPage /> },
  { path: routes.AUTH.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
  { path: routes.AUTH.NEW_PASSWORD, element: <NewPasswordPage /> },
]
