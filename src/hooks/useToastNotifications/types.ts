import type { ToastNotification } from "../../types/toastNotification";

export interface ToastParameters {
  toastNotification: (toastNotification: Omit<ToastNotification, "id">) => void;
}
