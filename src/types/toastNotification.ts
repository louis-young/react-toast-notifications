type ToastNotificationType = "success" | "information" | "warning" | "error";

export interface ToastNotification {
  id: string;
  text: string;
  type: ToastNotificationType;
}
