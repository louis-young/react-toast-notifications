import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { ToastNotificationsList } from "../../components/ToastNotificationsList";
import type {
  ToastNotification as ToastNotificationType,
  ToastNotificationReducerAction,
  ToastNotificationsContextValue,
  ToastNotificationsProviderProps,
} from "./types";

export const ToastNotificationsContext = createContext<
  ToastNotificationsContextValue | undefined
>(undefined);

export const toastNotificationsReducer = (
  toastNotifications: ToastNotificationType[],
  action: ToastNotificationReducerAction
) => {
  switch (action.type) {
    case "create":
      return [...toastNotifications, action.toastNotification];
    case "delete":
      return toastNotifications.filter(
        (toastNotification) => toastNotification.id !== action.id
      );
  }
};

const initialToastNotifications: ToastNotificationType[] = [];

export const ToastNotificationsProvider = ({
  children,
}: ToastNotificationsProviderProps) => {
  const [toastNotifications, dispatchToastNotifications] = useReducer(
    toastNotificationsReducer,
    initialToastNotifications
  );

  const createToastNotification = ({
    text,
  }: {
    text: ToastNotificationType["text"];
  }) => {
    const id = uuid();

    const toastNotification = {
      id,
      text,
    };

    dispatchToastNotifications({ type: "create", toastNotification });
  };

  const deleteToastNotification = ({
    id,
  }: {
    id: ToastNotificationType["id"];
  }) => {
    dispatchToastNotifications({ type: "delete", id });
  };

  const value = {
    createToastNotification,
    deleteToastNotification,
  };

  return (
    <ToastNotificationsContext.Provider value={value}>
      <ToastNotificationsList toastNotifications={toastNotifications} />

      {children}
    </ToastNotificationsContext.Provider>
  );
};
