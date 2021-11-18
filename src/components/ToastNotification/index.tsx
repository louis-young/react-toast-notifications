import { useEffect } from "react";
import { error, information, success, warning } from "../../assets/icons";
import type { ToastNotificationProps } from "./types";

export const ToastNotification = ({
  text,
  type,
  deleteToastNotification,
}: ToastNotificationProps) => {
  useEffect(() => {
    const timeout = setTimeout(deleteToastNotification, 3 * 1000); // Three seconds.

    return () => {
      clearTimeout(timeout);
    };
  }, [deleteToastNotification]);

  return (
    <li className="rounded-md py-4 px-6 bg-white text-center flex justify-between items-center gap-2">
      {type === "success"
        ? success
        : type === "information"
        ? information
        : type === "warning"
        ? warning
        : type === "error"
        ? error
        : information}

      <p className="text-gray-900 text-md font-medium">{text}</p>

      <button
        onClick={deleteToastNotification}
        className="text-gray-900 font-bold h-7 w-7 rounded-full hover:bg-white hover:bg-opacity-30"
      >
        ✕
      </button>
    </li>
  );
};
