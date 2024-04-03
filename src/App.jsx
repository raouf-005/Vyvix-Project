import React from 'react'
import './App.css'
import Login from './pages/Login'
import {createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Landing from './pages/Landing';
import PagesContainer from './pages/PagesContainer';
import DashBoard from './pages/Dashboard';
import Profile from './pages/Profile';
import Error from './pages/Error';


const router = createBrowserRouter([
  {
  path: '/login',
  element: <Login />,
  errorElement: <Error />
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
    path: '/ranking',
    element: <PagesContainer page={<DashBoard/>} name='Ranking' />  ,
  
  },
  {
    path: '*',
    element: <Error />
  }


]);

export default function App() {
  return (
    <>
    
    <RouterProvider router={router}/>

  </>
  )
}

