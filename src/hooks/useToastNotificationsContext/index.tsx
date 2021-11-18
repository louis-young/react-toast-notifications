import { useContext } from "react";
import { ToastNotificationsContext } from "../../context/toastNotifications";

export const useToastNotificationsContext = () => {
  const context = useContext(ToastNotificationsContext);

  if (!context) {
    throw new Error(
      "`useToastNotificationsContext` must be used within a `ToastNotificationsProvider`."
    );
  }

  return context;
};
