import React from 'react'
import './App.css'
import Login from './pages/Login'
import {createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Landing from './pages/Landing';
import PagesContainer from './pages/PagesContainer';
import DashBoard from './pages/Dashboard';
import Profile from './pages/Profile';


const router = createBrowserRouter([
  {
  path: '/login',
  element: <Login />,
  errorElement: <h1>404 Not Found</h1>
  },
  {
    path: '/register',
    element: <Login />
  },
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/dashboard',
    element: <PagesContainer page={<DashBoard/>} name='Dashboard' />  ,
  }
  ,{
    path: '/profile',
    element: <PagesContainer page={<Profile/>} name='Profile' />  ,
  }
  ,
  {
    path: '*',
    element: <h1>404 Not Found</h1>
  }


]);

export default function App() {
  return (
    <>
    
    <RouterProvider router={router}/>

  </>
  )
}

