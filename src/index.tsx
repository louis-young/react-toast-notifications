import React from "react";
import ReactDOM from "react-dom";
import { ToastNotificationsProvider } from "./context/toastNotifications";
import { Application } from "./Application";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ToastNotificationsProvider
      options={{
        position: "topRight",
      }}
    >
      <Application />
    </ToastNotificationsProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
