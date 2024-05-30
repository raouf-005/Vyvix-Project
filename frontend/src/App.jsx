import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import PagesContainer from "./pages/PagesContainer";
import DashBoard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import Ranking from "./pages/Ranking";
import UsersProfile from "./pages/UsersProfile";
import RequireAuth from "./authcomponent/RequireAuth";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import Unauthorized from "./pages/Unauthorized";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  //const  [isAuth, setIsAuth] = useState(false);

  return (

    <Routes>
      {/*public routes are routes that are accessible to everyone, whether they are logged in or not.*/}
      <Route
        path="/login"
        element={<Login Page={"login"} />}
        errorElement={<Error />}
      />
      <Route
        path="/register"
        element={<Login Page={"register"} />}
        errorElement={<Error />}
      />
      <Route path="/" element={<Landing />} errorElement={<Error />} />
      <Route
        path="/unauthorized"
        element={<Unauthorized />}
        errorElement={<Error />}
      />

      {/*private routes are routes that are only accessible to logged in users.*/}

      <Route element={<RequireAuth allowedRoles={["user"]} />}>
        <Route
          path="/dashboard"
          element={<PagesContainer page={<DashBoard />} name="Dashboard" />}
          errorElement={<Error />}
        />
        
      </Route>

      <Route element={<RequireAuth allowedRoles={["company"]} />}>
        <Route
          path="/favorites"
          element={<PagesContainer page={<Favorites />} name="Favorites" />}
          errorElement={<Error />}
        />
           <Route
          path="/ranking/:id"
          element={
            <PagesContainer page={<UsersProfile />} name="UsersProfile" />
          }
          errorElement={<Error />}
        />
      </Route>

      <Route element={<RequireAuth allowedRoles={["user", "company"]} />}>
        <Route
          path="/settings"
          element={<PagesContainer page={<Settings />} name="Settings" />}
          errorElement={<Error />}
        />

        <Route
          path="/ranking"
          element={<PagesContainer page={<Ranking />} name="Ranking" />}
          errorElement={<Error />}
        />
        <Route
          path="/profile"
          element={<PagesContainer page={<Profile />} name="Profile" />}
          errorElement={<Error />}
        />
 
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  
  );
}
