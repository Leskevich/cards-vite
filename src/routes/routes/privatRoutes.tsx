import { RouteObject } from 'react-router-dom'

import { PersonalInformation } from '@/components/profile'
import { Decks } from '@/pages'

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PersonalInformation email={'sdcscds'} logOut={() => {}} />,
  },
  {
    path: '/decks',
    element: <Decks />,
  },
]
