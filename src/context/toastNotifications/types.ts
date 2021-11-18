import type { ReactNode } from "react";

export interface ToastNotification {
  text: string;
  id: string;
}

export type ToastNotificationsContextValue = {
  createToastNotification: ({
    text,
  }: {
    text: ToastNotification["text"];
  }) => void;
};

export interface ToastNotificationsProviderProps {
  children: ReactNode;
}

export type ToastNotificationReducerAction =
  | { type: "create"; toastNotification: ToastNotification }
  | { type: "delete"; id: ToastNotification["id"] };
