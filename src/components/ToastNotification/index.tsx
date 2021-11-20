import { memo, useEffect } from "react";
import { error, information, success, warning } from "../../assets/icons";
import { useToastNotifications } from "../../hooks/useToastNotifications";
import { ToastNotificationDuration } from "../ToastNotificationDuration";
import type { ToastNotificationProps } from "./types";

export const ToastNotification = memo(
  ({ id, text, type, options }: ToastNotificationProps) => {
    const { deleteToastNotification } = useToastNotifications();

    const duration = 4 * 1000; // Four seconds.

    const isDismissible = false;

    const { automaticallyDismiss } = options ?? {};

    useEffect(() => {
      if (!automaticallyDismiss) {
        return;
      }

      const timeout = setTimeout(() => {
        deleteToastNotification({ id });
      }, duration);

      return () => {
        clearTimeout(timeout);
      };
    }, [automaticallyDismiss, deleteToastNotification, id, duration]);

    return (
      <li className="relative">
        <div className="rounded-sm py-4 px-6 bg-white text-center flex items-center gap-6">
          {type === "success"
            ? success
            : type === "information"
            ? information
            : type === "warning"
            ? warning
            : type === "error"
            ? error
            : information}

          <p className="text-gray-900 text-md text-left font-medium flex-1">
            {text}
          </p>

          {isDismissible && (
            <button
              onClick={() => deleteToastNotification({ id })}
              className="text-gray-900 font-bold h-6 w-6 text-sm rounded-full bg-gray-100 hover:bg-gray-200"
            >
              ✕
            </button>
          )}
        </div>

        {automaticallyDismiss && (
          <ToastNotificationDuration duration={duration} />
        )}
      </li>
    );
  }
);
