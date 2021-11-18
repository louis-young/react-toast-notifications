import type { ReactNode } from "react";

export type ToastNotificationType = "success" | "error";

export interface ToastNotification {
  id: string;
  text: string;
  type: ToastNotificationType;
}

export type ToastNotificationsContextValue = {
  createToastNotification: (
    toastNotification: Omit<ToastNotification, "id">
  ) => void;
  deleteToastNotification: ({ id }: { id: ToastNotification["id"] }) => void;
};

export interface ToastNotificationsProviderProps {
  children: ReactNode;
}

export type ToastNotificationReducerAction =
  | { type: "create"; toastNotification: ToastNotification }
  | { type: "delete"; id: ToastNotification["id"] };
