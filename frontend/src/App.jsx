import React,{useState } from 'react'
import './App.css'
import { Route,Routes} from 'react-router-dom';
import Login from './pages/Login';
import Landing from './pages/Landing';
import PagesContainer from './pages/PagesContainer';
import DashBoard from './pages/Dashboard';
import Profile from './pages/Profile';
import Error from './pages/Error';
import Ranking from './pages/Ranking';

import RequireAuth from './authcomponent/RequireAuth';
import Layout from './authcomponent/Layout';



export default function App() {

  const  [isAuth, setIsAuth] = useState(false);

  return (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/" element={<Landing />} />
      

          <Route element={<RequireAuth/>}>
            <Route path="/dashboard" element={<PagesContainer page={<DashBoard/>} name='Dashboard'  />} />
            <Route path="/profile" element={<PagesContainer page={<Profile/>} name='Profile' />} />
            <Route path="/ranking" element={<PagesContainer page={<Ranking/>} name='Ranking' />} />
          </Route>

            <Route path="*" element={<Error />} />
        </Routes>
  )
}



