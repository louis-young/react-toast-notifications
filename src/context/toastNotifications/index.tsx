import { createContext, useCallback, useMemo, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { ToastNotificationsList } from "../../components/ToastNotificationsList";
import type { ToastNotification } from "../../types/toastNotification";
import type {
  ToastNotificationReducerAction,
  ToastNotificationsContextValue,
  ToastNotificationsProviderOptions,
  ToastNotificationsProviderProps,
} from "./types";

export const ToastNotificationsContext = createContext<
  ToastNotificationsContextValue | undefined
>(undefined);

export const toastNotificationsReducer = (
  toastNotifications: ToastNotification[],
  action: ToastNotificationReducerAction,
) => {
  switch (action.type) {
    case "create":
      return [...toastNotifications, action.toastNotification];
    case "update":
      return toastNotifications.map((toastNotification) =>
        toastNotification.id === action.id
          ? { id: action.id, ...action.updatedToastNotification }
          : toastNotification,
      );
    case "delete":
      return toastNotifications.filter(
        (toastNotification) => toastNotification.id !== action.id,
      );
    default:
      return toastNotifications;
  }
};

const initialToastNotifications: ToastNotification[] = [];

const defaultOptions: ToastNotificationsProviderOptions = {
  shouldAutomaticallyDismiss: true,
  areNotificationsDismissible: true,
  duration: 4 * 1000, // Four seconds.
  position: "top",
};

export const ToastNotificationsProvider = ({
  children,
  options = defaultOptions,
}: ToastNotificationsProviderProps) => {
  const [toastNotifications, dispatchToastNotifications] = useReducer(
    toastNotificationsReducer,
    initialToastNotifications,
  );

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  const {
    shouldAutomaticallyDismiss,
    areNotificationsDismissible,
    duration,
    position,
  } = mergedOptions;

  const createToastNotification = useCallback(
    (toastNotification: Omit<ToastNotification, "id">) => {
      const id = uuid();

      const toastNotificationToCreate = {
        id,
        ...toastNotification,
        options: {
          ...toastNotification.options,
          duration: toastNotification.options?.duration ?? duration,
          shouldAutomaticallyDismiss:
            toastNotification.options?.shouldAutomaticallyDismiss ??
            shouldAutomaticallyDismiss,
          isDismissible:
            toastNotification.options?.isDismissible ??
            areNotificationsDismissible,
        },
      };

      dispatchToastNotifications({
        type: "create",
        toastNotification: toastNotificationToCreate,
      });

      return toastNotificationToCreate;
    },
    [duration, shouldAutomaticallyDismiss, areNotificationsDismissible],
  );

  const updateToastNotification = useCallback(
    ({
      id,
      updatedToastNotification,
    }: {
      id: ToastNotification["id"];
      updatedToastNotification: Omit<ToastNotification, "id">;
    }) => {
      const toastNotificationToUpdate = { id, ...updatedToastNotification };

      dispatchToastNotifications({
        type: "update",
        id,
        updatedToastNotification: toastNotificationToUpdate,
      });

      return toastNotificationToUpdate;
    },
    [],
  );

  const deleteToastNotification = useCallback(
    ({ id }: { id: ToastNotification["id"] }) => {
      dispatchToastNotifications({ type: "delete", id });
    },
    [],
  );

  const value = useMemo(
    () => ({
      createToastNotification,
      deleteToastNotification,
      updateToastNotification,
    }),
    [createToastNotification, updateToastNotification, deleteToastNotification],
  );

  return (
    <ToastNotificationsContext.Provider value={value}>
      <ToastNotificationsList
        toastNotifications={toastNotifications}
        position={position}
      />

      {children}
    </ToastNotificationsContext.Provider>
  );
};
