import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

import { ModoDarkProvider } from "./context/ModoDarkProvider";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModoDarkProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </ModoDarkProvider>
  </React.StrictMode>
);
