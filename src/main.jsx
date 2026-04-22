import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ViewStories from './ViewStories.jsx'
import Pro from './Pro.jsx'
import Editprofile from './Editprofile.jsx'
import Achive from './Archive.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/stories/:userId/:tot',
      element:<ViewStories/>
    },
    {
      path:'/pro',
      element:<Pro/>
    },
    {
      path:'/Editprofile',
      element:<Editprofile/>
    },
    {
      path:'/archive',
      element:<Achive/>
    },
  ]
)



createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
