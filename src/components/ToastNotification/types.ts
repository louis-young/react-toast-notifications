import { ToastNotification } from "../../context/toastNotifications/types";

export interface ToastNotificationProps {
  text: ToastNotification["text"];
  deleteToastNotification: () => void;
}
