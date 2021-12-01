import { memo, useEffect } from "react";
import { error, information, success, warning } from "../../assets/icons";
import { useToastNotificationsContext } from "../../hooks/useToastNotificationsContext";
import { ToastNotificationDuration } from "../ToastNotificationDuration";
import type { ToastNotificationProps } from "./types";

export const ToastNotification = memo(
  ({ id, text, type, options }: ToastNotificationProps) => {
    const { deleteToastNotification } = useToastNotificationsContext();

    const {
      shouldAutomaticallyDismiss = true,
      isDismissible = true,
      duration = 40 * 1000, // Four seconds.
    } = options ?? {};

    useEffect(() => {
      if (!shouldAutomaticallyDismiss) {
        return;
      }

      const timeout = setTimeout(() => {
        deleteToastNotification({ id });
      }, duration);

      return () => {
        clearTimeout(timeout);
      };
    }, [shouldAutomaticallyDismiss, deleteToastNotification, id, duration]);

    return (
      <li>
        <dialog className="static w-full p-0 rounded-sm" open>
          <div className="relative text-center rounded-sm flex items-center gap-6 py-4 px-6 bg-white">
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
                className="text-gray-400 font-bold h-6 w-6 text-sm absolute top-0.5 right-0.5 transition  hover:text-gray-600"
                type="submit"
              >
                ✕
              </button>
            )}
          </div>

          {shouldAutomaticallyDismiss && (
            <ToastNotificationDuration duration={duration} />
          )}
        </dialog>
      </li>
    );
  },
);
