import type { ToastNotification } from "../../types/toastNotification";

export interface ToastNotificationProps {
  text: ToastNotification["text"];
  type: ToastNotification["type"];
  deleteToastNotification: () => void;
}
