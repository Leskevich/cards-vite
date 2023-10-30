import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PrivateLayout } from './layout'
import { publicRoutes } from './routes'
import { privateRoutes } from './routes/privatRoutes'

const router = createBrowserRouter([
  {
    element: <PrivateLayout />,
    children: privateRoutes,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}
