import { ToastNotification } from "../ToastNotification";
import type { ToastNotificationsListProps } from "./types";

export const ToastNotificationsList = ({
  toastNotifications,
}: ToastNotificationsListProps) => {
  return (
    <ul className="fixed top-12 right-12 flex flex-col gap-4 w-full max-w-md">
      {toastNotifications.map(({ id, text, type, options }) => (
        <ToastNotification
          id={id}
          text={text}
          type={type}
          options={options}
          key={id}
        />
      ))}
    </ul>
  );
};
