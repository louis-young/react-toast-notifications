import { useContext } from "react";
import { ToastNotificationsContext } from "../../context/toastNotifications";
import { ToastNotification } from "../../types/toastNotification";

export const useToastNotifications = () => {
  const context = useContext(ToastNotificationsContext);

  if (!context) {
    throw new Error(
      "`useToastNotifications` must be used within a `ToastNotificationsProvider`."
    );
  }

  const { createToastNotification } = context;

  const success = (text: ToastNotification["text"]) => {
    const toastNotification = createToastNotification({
      text,
      type: "success",
    });

    return toastNotification;
  };

  const information = (text: ToastNotification["text"]) => {
    const toastNotification = createToastNotification({
      text,
      type: "information",
    });

    return toastNotification;
  };

  const warning = (text: ToastNotification["text"]) => {
    const toastNotification = createToastNotification({
      text,
      type: "warning",
    });

    return toastNotification;
  };

  const error = (text: ToastNotification["text"]) => {
    const toastNotification = createToastNotification({ text, type: "error" });

    return toastNotification;
  };

  return {
    success,
    information,
    warning,
    error,
  };
};
