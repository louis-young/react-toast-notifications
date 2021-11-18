import type { ToastNotification } from "../../context/toastNotifications/types";

export interface ToastParameters {
  toastNotification: (toastNotification: Omit<ToastNotification, "id">) => void;
}
