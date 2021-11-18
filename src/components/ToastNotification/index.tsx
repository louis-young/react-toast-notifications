import { useEffect } from "react";
import type { ToastNotificationProps } from "./types";

export const ToastNotification = ({
  text,
  deleteToastNotification,
}: ToastNotificationProps) => {
  useEffect(() => {
    const timeout = setTimeout(deleteToastNotification, 2 * 1000); // Two seconds.

    return () => {
      clearTimeout(timeout);
    };
  }, [deleteToastNotification]);

  return (
    <li className="rounded-md py-4 px-6 bg-gray-800">
      <p className="text-white text-md font-medium">{text}</p>
    </li>
  );
};
