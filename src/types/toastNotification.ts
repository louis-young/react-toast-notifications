type ToastNotificationType = "success" | "information" | "warning" | "error";

type ToastNotificationOptions = {
  shouldAutomaticallyDismiss?: boolean;
  isDismissible?: boolean;
  duration?: number;
};
export interface ToastNotification {
  id: string;
  text: string;
  type: ToastNotificationType;
  options?: ToastNotificationOptions;
}
