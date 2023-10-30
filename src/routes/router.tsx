import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PrivateLayout, privateRoutes, PublicLayout, publicRoutes } from '.'

const router = createBrowserRouter([
  { element: <PrivateLayout />, children: privateRoutes },
  { element: <PublicLayout />, children: publicRoutes },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
