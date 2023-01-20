import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ShowHideMessage2 } from '../components/myPractices/ShowHideMessage2'
import { ProgressBar } from '../components/ProgressBar'
import { ShowHideMessage } from '../components/ShowHideMessage'
import { StopwatchTimer } from '../components/StopwatchTimer'
import { TaskManager } from '../components/TaskManager'

export const routesPublic =  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/showHideMessage",
      element: <ShowHideMessage />,
    },
    {
      path: "/myPractice/showHideMessage",
      element: <ShowHideMessage2 />,
    },
    {
      path: "/progressBar",
      element: <ProgressBar />,
    },
    {
      path: "/stopwatchTimer",
      element: <StopwatchTimer />,
    },
    {
      path: "/taskManager",
      element: <TaskManager />,
    },
    {
      path: "/*",
      element: <Error404 />,
    }
  ]