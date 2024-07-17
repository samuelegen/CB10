import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './routes/Home'
import History from './routes/History'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/history",
    element: <History />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
