import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AboutMe from  './pages/AboutMe.jsx'
import Portfolios from './pages/Portfolios.jsx'
import ContactForm from './pages/ContactForm.jsx'

const router =createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/portfolios',
        element: <Portfolios />,
      },
      {
        path: '/contact',
        element: <ContactForm />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
