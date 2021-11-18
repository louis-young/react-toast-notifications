import { useToastNotificationsContext } from "../../hooks/useToastNotificationsContext";
import { ToastNotification } from "../ToastNotification";
import type { ToastNotificationsListProps } from "./types";

export const ToastNotificationsList = ({
  toastNotifications,
}: ToastNotificationsListProps) => {
  const { deleteToastNotification } = useToastNotificationsContext();

  return (
    <ul className="fixed top-12 right-12 flex flex-col gap-4 w-full max-w-md">
      {toastNotifications.map(({ id, text, type }) => (
        <ToastNotification
          text={text}
          type={type}
          deleteToastNotification={() => deleteToastNotification({ id })}
          key={id}
        />
      ))}
    </ul>
  );
};
