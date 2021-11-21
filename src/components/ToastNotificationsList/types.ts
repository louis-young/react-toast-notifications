import type { ToastNotification } from "../../types/toastNotification";

export type ToastNotificationsListPosition =
  | "middle"
  | "top"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

export interface ToastNotificationsListProps {
  toastNotifications: ToastNotification[];
  position: ToastNotificationsListPosition;
}
