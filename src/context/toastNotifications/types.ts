import type { ReactNode } from "react";
import { ToastNotificationsListPosition } from "../../components/ToastNotificationsList/types";
import type { ToastNotification } from "../../types/toastNotification";

export type ToastNotificationsContextValue = {
  createToastNotification: (
    toastNotification: Omit<ToastNotification, "id">,
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

export interface ToastNotificationsProviderOptions {
  shouldAutomaticallyDismiss: boolean;
  areNotificationsDismissible: boolean;
  duration: number;
  position: ToastNotificationsListPosition;
}
export interface ToastNotificationsProviderProps {
  children: ReactNode;
  options?: Partial<ToastNotificationsProviderOptions>;
}

export type ToastNotificationReducerAction =
  | { type: "create"; toastNotification: ToastNotification }
  | {
      type: "update";
      id: ToastNotification["id"];
      updatedToastNotification: Omit<ToastNotification, "id">;
    }
  | { type: "delete"; id: ToastNotification["id"] };
