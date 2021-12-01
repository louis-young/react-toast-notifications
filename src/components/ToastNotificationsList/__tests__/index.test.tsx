import { render, screen } from "@testing-library/react";
import type { FC } from "react";
import { ToastNotificationsList } from "..";
import { ToastNotificationsProvider } from "../../../context/toastNotifications";
import { ToastNotification } from "../../../types/toastNotification";

describe("ToastNotificationsList", () => {
  const defaultToastNotifications: ToastNotification[] = [
    {
      id: "__ID__",
      text: "__TEXT__",
      type: "success",
    },
  ];

  const defaultPosition = "top";

  const Wrapper: FC = ({ children }) => {
    return <ToastNotificationsProvider>{children}</ToastNotificationsProvider>;
  };

  it("renders the list", () => {
    render(
      <ToastNotificationsList
        toastNotifications={defaultToastNotifications}
        position={defaultPosition}
      />,
      { wrapper: Wrapper },
    );

    screen.debug();

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
  });
});
