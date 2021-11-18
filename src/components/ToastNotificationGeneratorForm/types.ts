import type { ToastNotification } from "../../types/toastNotification";

export interface ToastNotificationGeneratorFormProps {
  selectedToastNotificationType: ToastNotification["type"];
  onSelectedToastNotificationTypeChange: (
    newSelectedToastNotificationType: ToastNotification["type"]
  ) => void;
}
