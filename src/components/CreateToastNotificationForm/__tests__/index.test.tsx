import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreateToastNotificationForm } from "..";

describe("CreateToastNotificationForm", () => {
  const defaultSelectedToastNotificationType = "success";
  const defaultOnSelectedToastNotificationTypeChange = jest.fn();
  const defaultShouldAutomaticallyDismiss = true;
  const defaultOnShouldAutomaticallyDismissChange = jest.fn();
  const defaultOnSubmit = jest.fn();

  it("renders the form", () => {
    render(
      <CreateToastNotificationForm
        selectedToastNotificationType={defaultSelectedToastNotificationType}
        onSelectedToastNotificationTypeChange={
          defaultOnSelectedToastNotificationTypeChange
        }
        shouldAutomaticallyDismiss={defaultShouldAutomaticallyDismiss}
        onShouldAutomaticallyDismissChange={
          defaultOnShouldAutomaticallyDismissChange
        }
        onSubmit={defaultOnSubmit}
      />
    );

    const form = screen.getByRole("form", {
      name: "Create Toast Notification Form",
    });

    expect(form).toBeInTheDocument();
  });

  it.each(["Success", "Information", "Warning", "Error"])(
    "renders the enabled `%s` option",
    (label) => {
      render(
        <CreateToastNotificationForm
          selectedToastNotificationType={defaultSelectedToastNotificationType}
          onSelectedToastNotificationTypeChange={
            defaultOnSelectedToastNotificationTypeChange
          }
          shouldAutomaticallyDismiss={defaultShouldAutomaticallyDismiss}
          onShouldAutomaticallyDismissChange={
            defaultOnShouldAutomaticallyDismissChange
          }
          onSubmit={defaultOnSubmit}
        />
      );

      const option = screen.getByLabelText(label);

      expect(option).toBeEnabled();
    }
  );

  it("renders the enabled `Automatically dismiss` checkbox", () => {
    render(
      <CreateToastNotificationForm
        selectedToastNotificationType={defaultSelectedToastNotificationType}
        onSelectedToastNotificationTypeChange={
          defaultOnSelectedToastNotificationTypeChange
        }
        shouldAutomaticallyDismiss={defaultShouldAutomaticallyDismiss}
        onShouldAutomaticallyDismissChange={
          defaultOnShouldAutomaticallyDismissChange
        }
        onSubmit={defaultOnSubmit}
      />
    );

    const automaticallyDismissOption = screen.getByLabelText(
      "Automatically dismiss"
    );

    expect(automaticallyDismissOption).toBeEnabled();
  });

  it("renders the enabled `Create Toast Notification` button", () => {
    render(
      <CreateToastNotificationForm
        selectedToastNotificationType={defaultSelectedToastNotificationType}
        onSelectedToastNotificationTypeChange={
          defaultOnSelectedToastNotificationTypeChange
        }
        shouldAutomaticallyDismiss={defaultShouldAutomaticallyDismiss}
        onShouldAutomaticallyDismissChange={
          defaultOnShouldAutomaticallyDismissChange
        }
        onSubmit={defaultOnSubmit}
      />
    );

    const createToastNotificationButton = screen.getByRole("button", {
      name: "Create Toast Notification",
    });

    expect(createToastNotificationButton).toBeEnabled();
  });

  it.each([
    ["success", "Success", "information" as const],
    ["information", "Information", "success" as const],
    ["warning", "Warning", "information" as const],
    ["error", "Error", "warning" as const],
  ])(
    "calls `onSelectedToastNotificationTypeChange` with `%s` when the `%s` option is clicked and `selectedToastNotificationType` is `%s`",
    (
      newSelectedToastNotificationType,
      label,
      selectedToastNotificationType
    ) => {
      const onSelectedToastNotificationTypeChange = jest.fn();

      render(
        <CreateToastNotificationForm
          selectedToastNotificationType={selectedToastNotificationType}
          onSelectedToastNotificationTypeChange={
            onSelectedToastNotificationTypeChange
          }
          shouldAutomaticallyDismiss={defaultShouldAutomaticallyDismiss}
          onShouldAutomaticallyDismissChange={
            defaultOnShouldAutomaticallyDismissChange
          }
          onSubmit={defaultOnSubmit}
        />
      );

      const option = screen.getByLabelText(label);

      userEvent.click(option);

      expect(onSelectedToastNotificationTypeChange).toHaveBeenCalledWith(
        newSelectedToastNotificationType
      );
    }
  );

  it.each([
    [false, true],
    [true, false],
  ])(
    "calls `onShouldAutomaticallyDismissChange` with `%s` when the `Automatically dismiss` checkbox is clicked and `shouldAutomaticallyDismiss` is `%s`",
    (shouldAutomaticallyDismiss, newShouldAutomaticallyDismiss) => {
      const onShouldAutomaticallyDismissChange = jest.fn();

      render(
        <CreateToastNotificationForm
          selectedToastNotificationType={defaultSelectedToastNotificationType}
          onSelectedToastNotificationTypeChange={
            defaultOnSelectedToastNotificationTypeChange
          }
          shouldAutomaticallyDismiss={shouldAutomaticallyDismiss}
          onShouldAutomaticallyDismissChange={
            onShouldAutomaticallyDismissChange
          }
          onSubmit={defaultOnSubmit}
        />
      );

      const automaticallyDismissOption = screen.getByLabelText(
        "Automatically dismiss"
      );

      userEvent.click(automaticallyDismissOption);

      expect(onShouldAutomaticallyDismissChange).toHaveBeenCalledWith(
        newShouldAutomaticallyDismiss
      );
    }
  );

  it.each([
    [
      {
        selectedToastNotificationType: "success",
        shouldAutomaticallyDismiss: true,
      },
      "success" as const,
      true,
    ],
    [
      {
        selectedToastNotificationType: "information",
        shouldAutomaticallyDismiss: false,
      },
      "information" as const,
      false,
    ],
    [
      {
        selectedToastNotificationType: "warning",
        shouldAutomaticallyDismiss: true,
      },
      "warning" as const,
      true,
    ],
    [
      {
        selectedToastNotificationType: "error",
        shouldAutomaticallyDismiss: false,
      },
      "error" as const,
      false,
    ],
  ])(
    "calls `onSubmit` with `%j` when the `%s` option is clicked and `shouldAutomaticallyDismiss` is `%s`",
    (
      expectedArgument,
      selectedToastNotificationType,
      shouldAutomaticallyDismiss
    ) => {
      const onSubmit = jest.fn();

      render(
        <CreateToastNotificationForm
          selectedToastNotificationType={selectedToastNotificationType}
          onSelectedToastNotificationTypeChange={
            defaultOnSelectedToastNotificationTypeChange
          }
          shouldAutomaticallyDismiss={shouldAutomaticallyDismiss}
          onShouldAutomaticallyDismissChange={
            defaultOnShouldAutomaticallyDismissChange
          }
          onSubmit={onSubmit}
        />
      );

      const createToastNotificationButton = screen.getByRole("button", {
        name: "Create Toast Notification",
      });

      userEvent.click(createToastNotificationButton);

      expect(onSubmit).toHaveBeenCalledWith(expectedArgument);
    }
  );
});
