import {AUTH_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, WORK_ROUTE} from './utils/consts'
import { Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Auth from './pages/Auth'
import { useSelector } from 'react-redux'
import MainPage from './MainPage'
import Profile from './pages/Profile'
import WorkSpace from './pages/WorkSpace'


const router = createBrowserRouter([
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
    children: [
        {
            path: AUTH_ROUTE,
            element: <Auth />
        },
        {
            path: MAIN_ROUTE,
            element: <Auth />
        },
        {
            path: PROFILE_ROUTE,
            element: <Navigate to={MAIN_ROUTE} />
        },
        {
            path: WORK_ROUTE,
            element: <Navigate to={MAIN_ROUTE} />
        }
      ]
  }
])

const authRoutes = createBrowserRouter ([
    {
        path: MAIN_ROUTE,
        element: <MainPage />,
        children: [
            {
                path: PROFILE_ROUTE,
                element: <Profile />
            },
            {
                path: MAIN_ROUTE,
                element: <Navigate to={PROFILE_ROUTE} />
            },
            {
                path: AUTH_ROUTE,
                element: <Navigate to={PROFILE_ROUTE} />
            },
            {
                path: WORK_ROUTE,
                element: <WorkSpace />
            }
        ]
    }
])

function App() {

    const token = useSelector((state) => state.auth.token)
  
    console.log(token);
  
  
    return (
      token ? <RouterProvider router={authRoutes} /> : <RouterProvider router={router} />
    )
  }
  
  export default App
