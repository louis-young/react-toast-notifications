import { useContext } from "react";
import { ToastNotificationsContext } from "../../context/toastNotifications";

export const useToastNotifications = () => {
  const context = useContext(ToastNotificationsContext);

  if (!context) {
    throw new Error(
      "`useToastNotifications` must be used within a `ToastNotificationsProvider`."
    );
  }

  const { createToastNotification: toast } = context;

  return { toast };
};
