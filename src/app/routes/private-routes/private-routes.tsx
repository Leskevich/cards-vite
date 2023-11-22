import { RouteObject } from 'react-router-dom'

import { Decks } from '@/pages/decks/decks.tsx'
import { PersonalInformation } from '@/shared/ui'

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PersonalInformation email={'Шкутник на приеме'} logOut={() => {}} />,
  },
  {
    path: '/decks',
    element: <Decks />,
  },
]
