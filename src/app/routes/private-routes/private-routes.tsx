import { RouteObject } from 'react-router-dom'

import { Decks } from '@/pages'
import { PersonalInformation } from '@/shared/ui'

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
