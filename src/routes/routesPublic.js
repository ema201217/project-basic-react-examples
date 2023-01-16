import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'

export const routesPublic =  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/*",
      element: <Error404 />,
    }
  ]