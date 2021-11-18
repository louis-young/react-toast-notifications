import { useEffect } from "react";
import { error, information, success, warning } from "../../assets/icons";
import { useToastNotificationsContext } from "../../hooks/useToastNotificationsContext";
import type { ToastNotificationProps } from "./types";

export const ToastNotification = ({
  id,
  text,
  type,
}: ToastNotificationProps) => {
  const { deleteToastNotification } = useToastNotificationsContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      deleteToastNotification({ id });
    }, 4 * 1000); // Four seconds.

    return () => {
      clearTimeout(timeout);
    };
  }, [deleteToastNotification, id]);

  return (
    <li className="rounded-md py-4 px-6 bg-white text-center flex justify-between items-center gap-3">
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
        onClick={() => deleteToastNotification({ id })}
        className="text-gray-900 font-bold h-6 w-6 text-sm rounded-full bg-gray-100 hover:bg-gray-200"
      >
        ✕
      </button>
    </li>
  );
};
