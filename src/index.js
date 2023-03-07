import React from "react";
import ReactDOM from "react-dom/client";
import "./css/global.css";
import "./css/all.min.css";
import App from "./App";
import { AppProvider } from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
