import type { ToastNotification } from "../../types/toastNotification";

export interface CreateToastNotificationFormProps {
  selectedToastNotificationType: ToastNotification["type"];
  onSelectedToastNotificationTypeChange: (
    newSelectedToastNotificationType: ToastNotification["type"]
  ) => void;
  shouldAutomaticallyDismiss: boolean;
  onShouldAutomaticallyDismissChange: (
    newShouldAutomaticallyDismiss: boolean
  ) => void;
  onSubmit: ({
    selectedToastNotificationType,
    shouldAutomaticallyDismiss,
  }: {
    selectedToastNotificationType: ToastNotification["type"];
    shouldAutomaticallyDismiss: boolean;
  }) => void;
}
