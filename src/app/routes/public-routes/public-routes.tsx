import { RouteObject } from 'react-router-dom'

import {
  CheckEmailPage,
  ForgotPasswordPage,
  NewPasswordPage,
  SingInPage,
  SingUpPage,
} from '@/pages'
import { routes } from '@/shared/const'

export const publicRoutes: RouteObject[] = [
  { path: routes.AUTH.SING_IN, element: <SingInPage /> },
  { path: routes.AUTH.SIGN_UP, element: <SingUpPage /> },
  { path: routes.AUTH.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
  { path: routes.AUTH.NEW_PASSWORD, element: <NewPasswordPage /> },
  { path: routes.AUTH.CHECK_EMAIL, element: <CheckEmailPage /> },
]
