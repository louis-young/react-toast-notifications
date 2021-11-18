import type { FormEvent } from "react";
import { useToastNotifications } from "../../hooks/useToastNotifications";
import type { ToastNotification } from "../../types/toastNotification";
import { Separator } from "../Separator";
import type { ToastNotificationGeneratorFormProps } from "./types";

const options = [
  { label: "Success", value: "success" },
  { label: "Information", value: "information" },
  { label: "Warning", value: "warning" },
  { label: "Error", value: "error" },
];

export const ToastNotificationGeneratorForm = ({
  selectedToastNotificationType,
  onSelectedToastNotificationTypeChange,
}: ToastNotificationGeneratorFormProps) => {
  const { toast } = useToastNotifications();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toast({
      text: "Lorem ipsum dolor ipsum dolor ipsum dolor",
      type: selectedToastNotificationType,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="flex gap-6 items-center">
        {options.map(({ label, value }) => (
          <label className="flex gap-2 items-center">
            <input
              type="radio"
              name="toast-notification-type"
              onChange={
                (event) =>
                  onSelectedToastNotificationTypeChange(
                    event.target.value as ToastNotification["type"]
                  ) // Fix as.
              }
              value={value}
              checked={selectedToastNotificationType === value}
            />
            <h4 className="text-gray-900 font-medium">{label}</h4>
          </label>
        ))}
      </fieldset>

      <Separator />

      <fieldset>
        <button
          className="rounded-sm py-3 px-6 shadow-md text-white bg-indigo-600 font-medium transition capitalize hover:bg-indigo-500"
          type="submit"
        >
          Create Toast Notification
        </button>
      </fieldset>
    </form>
  );
};
