import type { ToastNotification } from "../../context/toastNotifications/types";

export interface ToastNotificationsListProps {
  toastNotifications: ToastNotification[];
  deleteToastNotification: ({ id }: { id: ToastNotification["id"] }) => void;
}
