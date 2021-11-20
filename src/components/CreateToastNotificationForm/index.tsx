import { Separator } from "../Separator";
import type { FormEvent } from "react";
import type { ToastNotification } from "../../types/toastNotification";
import type { CreateToastNotificationFormProps } from "./types";

const options = [
  { label: "Success", value: "success" },
  { label: "Information", value: "information" },
  { label: "Warning", value: "warning" },
  { label: "Error", value: "error" },
];

export const CreateToastNotificationForm = ({
  selectedToastNotificationType,
  onSelectedToastNotificationTypeChange,
  onSubmit,
}: CreateToastNotificationFormProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(selectedToastNotificationType);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Create Toast Notification Form">
      <fieldset className="flex gap-6 items-center">
        {options.map(({ label, value }) => (
          <label
            className="flex gap-2 items-center"
            htmlFor={value}
            key={value}
          >
            <input
              id={value}
              type="radio"
              name="toast-notification-type"
              onChange={(event) =>
                onSelectedToastNotificationTypeChange(
                  event.target.value as ToastNotification["type"]
                )
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
          className={`rounded-sm py-3 px-6 shadow-md text-white font-medium transition capitalize hover:opacity-80 ${
            selectedToastNotificationType === "success"
              ? "bg-green-600"
              : selectedToastNotificationType === "information"
              ? "bg-blue-600"
              : selectedToastNotificationType === "warning"
              ? "bg-yellow-600"
              : selectedToastNotificationType === "error"
              ? "bg-red-600"
              : "bg-blue-600"
          }`}
          type="submit"
        >
          Create Toast Notification
        </button>
      </fieldset>
    </form>
  );
};
