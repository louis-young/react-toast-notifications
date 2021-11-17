import { useState } from "react";
import { useToastNotifications } from "./hooks/useToastNotifications";

export const Application = () => {
  const { createToastNotification } = useToastNotifications();

  const [
    createToastNotificationButtonClickCount,
    setCreateToastNotificationButtonClickCount,
  ] = useState(1);

  const handleCreateToastNotificationButtonClick = () => {
    createToastNotification({
      text: `My favourite number is ${createToastNotificationButtonClickCount}.`,
    });

    setCreateToastNotificationButtonClickCount(
      (previousCreateToastNotificationButtonClickCount) =>
        previousCreateToastNotificationButtonClickCount + 1
    );
  };

  return (
    <div className="p-12 h-screen bg-gray-900">
      <h1 className="text-white text-3xl">React Toast Notifications</h1>

      <hr className="h-8 border-none" />

      <button
        className="rounded-sm py-3 px-6 shadow-md bg-blue-500 text-white font-medium"
        onClick={handleCreateToastNotificationButtonClick}
      >
        Create Toast Notification
      </button>
    </div>
  );
};
