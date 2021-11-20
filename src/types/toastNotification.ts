type ToastNotificationType = "success" | "information" | "warning" | "error";

export type ToastNotificationOptions = { automaticallyDismiss?: boolean };
export interface ToastNotification {
  id: string;
  text: string;
  type: ToastNotificationType;
  options?: ToastNotificationOptions;
}
