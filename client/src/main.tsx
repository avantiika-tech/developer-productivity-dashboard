import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SuccessPage from './components/SuccessPage.tsx'
import Profile from './components/Profile.tsx'

const router = createBrowserRouter([
	{
    path: '/',
    element: <><App /></>
  },
  {
    path: '/success',
    element: <><SuccessPage /></>
  },
  {
    path: '/profile',
    element: <><Profile /></>
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
