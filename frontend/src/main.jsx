import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./authcomponent/AuthProvider.jsx";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { Bounce } from "react-toastify";

disableReactDevTools()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
          <ToastContainer
position="top-center"
autoClose={1000}
limit={1}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable={false}
pauseOnHover={false}
theme="light"
transition={Bounce}
/>
        </AuthProvider>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
