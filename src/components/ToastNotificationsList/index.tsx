import { useToastNotificationsContext } from "../../hooks/useToastNotificationsContext";
import { ToastNotification } from "../ToastNotification";
import type { ToastNotificationsListProps } from "./types";

export const ToastNotificationsList = ({
  toastNotifications,
}: ToastNotificationsListProps) => {
  const { deleteToastNotification } = useToastNotificationsContext();

  return (
    <ul className="fixed top-8 left-1/2 transform -translate-x-1/2 flex flex-col gap-4">
      {toastNotifications.map(({ id, text }) => (
        <ToastNotification
          text={text}
          deleteToastNotification={() => deleteToastNotification({ id })}
          key={id}
        />
      ))}
    </ul>
  );
};
