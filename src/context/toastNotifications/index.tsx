import { createContext, useCallback, useMemo, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { ToastNotificationsList } from "../../components/ToastNotificationsList";
import type { ToastNotification } from "../../types/toastNotification";
import type {
  ToastNotificationReducerAction,
  ToastNotificationsContextValue,
  ToastNotificationsProviderProps,
} from "./types";

export const ToastNotificationsContext = createContext<
  ToastNotificationsContextValue | undefined
>(undefined);

export const toastNotificationsReducer = (
  toastNotifications: ToastNotification[],
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

const initialToastNotifications: ToastNotification[] = [];

export const ToastNotificationsProvider = ({
  children,
}: ToastNotificationsProviderProps) => {
  const [toastNotifications, dispatchToastNotifications] = useReducer(
    toastNotificationsReducer,
    initialToastNotifications
  );

  const createToastNotification = useCallback(
    (toastNotification: Omit<ToastNotification, "id">) => {
      const id = uuid();

      dispatchToastNotifications({
        type: "create",
        toastNotification: { ...toastNotification, id },
      });
    },
    []
  );

  const deleteToastNotification = useCallback(
    ({ id }: { id: ToastNotification["id"] }) => {
      dispatchToastNotifications({ type: "delete", id });
    },
    []
  );

  const value = useMemo(
    () => ({
      createToastNotification,
      deleteToastNotification,
    }),
    [createToastNotification, deleteToastNotification]
  );

  return (
    <ToastNotificationsContext.Provider value={value}>
      <ToastNotificationsList toastNotifications={toastNotifications} />

      {children}
    </ToastNotificationsContext.Provider>
  );
};
