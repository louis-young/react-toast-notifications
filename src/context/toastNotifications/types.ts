import type { ReactNode } from "react";
import type { ToastNotification } from "../../types/toastNotification";

export type ToastNotificationsContextValue = {
  createToastNotification: (
    toastNotification: Omit<ToastNotification, "id">
  ) => ToastNotification;
  updateToastNotification: ({
    id,
    updatedToastNotification,
  }: {
    id: ToastNotification["id"];
    updatedToastNotification: Omit<ToastNotification, "id">;
  }) => ToastNotification;
  deleteToastNotification: ({ id }: { id: ToastNotification["id"] }) => void;
};

export interface ToastNotificationsProviderProps {
  children: ReactNode;
}

export type ToastNotificationReducerAction =
  | { type: "create"; toastNotification: ToastNotification }
  | {
      type: "update";
      id: ToastNotification["id"];
      updatedToastNotification: Omit<ToastNotification, "id">;
    }
  | { type: "delete"; id: ToastNotification["id"] };
