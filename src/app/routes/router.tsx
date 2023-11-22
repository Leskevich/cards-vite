import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PrivateLayout, PublicLayout } from './layouts'

import { publicRoutes, privateRoutes } from '@/app/routes'
import { CommonLayout } from '@/app/routes/layouts/common-layout/CommonLayout.tsx'

const router = createBrowserRouter([
  {
    element: <CommonLayout />,
    path: '/',
    children: [
      { element: <PrivateLayout />, children: privateRoutes },
      { element: <PublicLayout />, children: publicRoutes },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
