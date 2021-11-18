import { useState } from "react";
import { Separator } from "./components/Separator";
import { CreateToastNotificationForm } from "./components/CreateToastNotificationForm";

import type { ToastNotification } from "./types/toastNotification";

const initialSelectedToastNotificationType = "success";

export const Application = () => {
  const [selectedToastNotificationType, setSelectedToastNotificationType] =
    useState<ToastNotification["type"]>(initialSelectedToastNotificationType);

  const handleSelectedToastNotificationTypeChange = (
    newSelectedToastNotificationType: ToastNotification["type"]
  ) => {
    setSelectedToastNotificationType(newSelectedToastNotificationType);
  };

  return (
    <main className="p-12 h-screen bg-gray-100">
      <h1 className="text-gray-900 text-3xl">React Toast Notifications</h1>

      <Separator />

      <CreateToastNotificationForm
        selectedToastNotificationType={selectedToastNotificationType}
        onSelectedToastNotificationTypeChange={
          handleSelectedToastNotificationTypeChange
        }
      />
    </main>
  );
};
