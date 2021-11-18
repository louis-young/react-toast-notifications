import classNames from "classnames";
import { useEffect } from "react";
import type { ToastNotificationProps } from "./types";

export const ToastNotification = ({
  text,
  type,
  deleteToastNotification,
}: ToastNotificationProps) => {
  useEffect(() => {
    const timeout = setTimeout(deleteToastNotification, 2 * 1000); // Two seconds.

    return () => {
      clearTimeout(timeout);
    };
  }, [deleteToastNotification]);

  return (
    <li
      className={classNames({
        "rounded-md py-4 px-6 bg-white": true,
        "bg-green-500": type === "success",
        "bg-red-500": type === "error",
      })}
    >
      <p className="text-white text-md font-medium">{text}</p>
    </li>
  );
};
