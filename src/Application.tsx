import { useState } from "react";
import { Separator } from "./components/Separator";
import { CreateToastNotificationForm } from "./components/CreateToastNotificationForm";

import type { ToastNotification } from "./types/toastNotification";
import { useToastNotifications } from "./hooks/useToastNotifications";

const initialSelectedToastNotificationType = "success";

export const Application = () => {
  const toast = useToastNotifications();

  const [selectedToastNotificationType, setSelectedToastNotificationType] =
    useState<ToastNotification["type"]>(initialSelectedToastNotificationType);

  const handleSelectedToastNotificationTypeChange = (
    newSelectedToastNotificationType: ToastNotification["type"]
  ) => {
    setSelectedToastNotificationType(newSelectedToastNotificationType);
  };

  const handleCreateToastNotificationFormSubmit = (
    selectedToastNotificationType: ToastNotification["type"]
  ) => {
    toast[selectedToastNotificationType](
      `Created the ${selectedToastNotificationType} toast notification`
    );
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
        onSubmit={handleCreateToastNotificationFormSubmit}
      />
    </main>
  );
};
