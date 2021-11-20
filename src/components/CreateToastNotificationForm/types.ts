import type { ToastNotification } from "../../types/toastNotification";

export interface CreateToastNotificationFormProps {
  selectedToastNotificationType: ToastNotification["type"];
  onSelectedToastNotificationTypeChange: (
    newSelectedToastNotificationType: ToastNotification["type"]
  ) => void;
  onSubmit: (selectedToastNotificationType: ToastNotification["type"]) => void;
}
