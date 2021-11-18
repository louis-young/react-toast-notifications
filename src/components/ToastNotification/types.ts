import {
  ToastNotification,
  ToastNotificationType,
} from "../../context/toastNotifications/types";

export interface ToastNotificationProps {
  text: ToastNotification["text"];
  type: ToastNotificationType;
  deleteToastNotification: () => void;
}
