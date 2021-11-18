import type { ToastNotification } from "../../types/toastNotification";

export interface ToastNotificationProps {
  id: ToastNotification["id"];
  text: ToastNotification["text"];
  type: ToastNotification["type"];
}
