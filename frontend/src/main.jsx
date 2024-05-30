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
            autoClose={2000}
            limit={1}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light"
            transition={"Bounce"}
            className={"min-w-fit"}
          />
        </AuthProvider>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
