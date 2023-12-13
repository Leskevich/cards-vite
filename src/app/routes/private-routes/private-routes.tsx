import { RouteObject } from 'react-router-dom'

import { DecksPage } from '@/pages'
import { routes } from '@/shared/const'
import { PersonalInformation } from '@/shared/ui'

export const privateRoutes: RouteObject[] = [
  {
    path: routes.DECKS,
    element: <DecksPage />,
  },
  {
    path: routes.CARDS,
    element: <h1>Cards Page</h1>,
  },
  {
    path: routes.LEARN,
    element: <h1>Learn Page</h1>,
  },
  {
    path: routes.PROFILE,
    element: <PersonalInformation email={'Шкутник на приеме'} logOut={() => {}} />,
  },
]
