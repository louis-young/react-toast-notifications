import { useState } from "react";
import { useToastNotifications } from "./hooks/useToastNotifications";
import { Separator } from "./components/Separator";
import { CreateToastNotificationForm } from "./components/CreateToastNotificationForm";
import type { ToastNotification } from "./types/toastNotification";

const initialSelectedToastNotificationType = "success";

const initialShouldAutomaticallyDismiss = true;

export const Application = () => {
  const toast = useToastNotifications();

  const [selectedToastNotificationType, setSelectedToastNotificationType] =
    useState<ToastNotification["type"]>(initialSelectedToastNotificationType);

  const [shouldAutomaticallyDismiss, setShouldAutomaticallyDismiss] = useState(
    initialShouldAutomaticallyDismiss,
  );

  const handleSelectedToastNotificationTypeChange = (
    newSelectedToastNotificationType: ToastNotification["type"],
  ) => {
    setSelectedToastNotificationType(newSelectedToastNotificationType);
  };

  const handleShouldAutomaticallyDismissChange = (
    newShouldAutomaticallyDismiss: boolean,
  ) => {
    setShouldAutomaticallyDismiss(newShouldAutomaticallyDismiss);
  };

  const handleCreateToastNotificationFormSubmit = ({
    selectedToastNotificationType,
    shouldAutomaticallyDismiss,
  }: {
    selectedToastNotificationType: ToastNotification["type"];
    shouldAutomaticallyDismiss: boolean;
  }) => {
    toast[selectedToastNotificationType](
      `Created the ${selectedToastNotificationType} toast notification`,
      {
        shouldAutomaticallyDismiss,
      },
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
        shouldAutomaticallyDismiss={shouldAutomaticallyDismiss}
        onShouldAutomaticallyDismissChange={
          handleShouldAutomaticallyDismissChange
        }
        onSubmit={handleCreateToastNotificationFormSubmit}
      />
    </main>
  );
};
