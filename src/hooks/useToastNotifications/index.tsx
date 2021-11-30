import { useContext } from "react";
import { ToastNotificationsContext } from "../../context/toastNotifications";
import { ToastNotification } from "../../types/toastNotification";

export const useToastNotifications = () => {
  const context = useContext(ToastNotificationsContext);

  if (!context) {
    throw new Error(
      "`useToastNotifications` must be used within a `ToastNotificationsProvider`.",
    );
  }

  const { createToastNotification } = context;

  const success = (
    text: ToastNotification["text"],
    options: ToastNotification["options"],
  ) => {
    const toastNotification = createToastNotification({
      text,
      type: "success",
      options,
    });

    return toastNotification;
  };

  const information = (
    text: ToastNotification["text"],
    options: ToastNotification["options"],
  ) => {
    const toastNotification = createToastNotification({
      text,
      type: "information",
      options,
    });

    return toastNotification;
  };

  const warning = (
    text: ToastNotification["text"],
    options: ToastNotification["options"],
  ) => {
    const toastNotification = createToastNotification({
      text,
      type: "warning",
      options,
    });

    return toastNotification;
  };

  const error = (
    text: ToastNotification["text"],
    options: ToastNotification["options"],
  ) => {
    const toastNotification = createToastNotification({
      text,
      type: "error",
      options,
    });

    return toastNotification;
  };

  return {
    success,
    information,
    warning,
    error,
  };
};
