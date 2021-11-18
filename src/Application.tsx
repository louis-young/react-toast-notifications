import { useToastNotifications } from "./hooks/useToastNotifications";
import type { ToastNotification } from "./types/toastNotification";

export const Application = () => {
  const { toast } = useToastNotifications();

  const toastNotificationTypes: {
    buttonBackgroundColour: string;
    toastNotificationType: ToastNotification["type"];
  }[] = [
    {
      buttonBackgroundColour: "bg-green-500",
      toastNotificationType: "success",
    },
    {
      buttonBackgroundColour: "bg-blue-500",
      toastNotificationType: "information",
    },
    {
      buttonBackgroundColour: "bg-yellow-500",
      toastNotificationType: "warning",
    },
    {
      buttonBackgroundColour: "bg-red-500",
      toastNotificationType: "error",
    },
  ];

  return (
    <div className="p-12 h-screen bg-gray-900">
      <h1 className="text-white text-3xl">React Toast Notifications</h1>

      <hr className="h-8 border-none" />

      <ul className="flex gap-4">
        {toastNotificationTypes.map(
          ({ buttonBackgroundColour, toastNotificationType }) => (
            <li key={toastNotificationType}>
              <button
                className={`rounded-sm py-3 px-6 shadow-md text-white font-medium capitalize ${buttonBackgroundColour}`}
                onClick={() => {
                  toast({
                    text: "React Toast Notifications",
                    type: toastNotificationType,
                  });
                }}
              >
                {toastNotificationType}
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
