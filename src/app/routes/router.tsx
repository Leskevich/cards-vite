import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PrivateLayout, PublicLayout } from './layouts'

import { publicRoutes, privateRoutes } from '@/app/routes'

const router = createBrowserRouter([
  { element: <PrivateLayout />, children: privateRoutes },
  { element: <PublicLayout />, children: publicRoutes },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
