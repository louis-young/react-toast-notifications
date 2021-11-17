import React from "react";
import ReactDOM from "react-dom";
import { Application } from "./Application";
import { ToastNotificationsProvider } from "./context/toastNotifications";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ToastNotificationsProvider>
      <Application />
    </ToastNotificationsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
