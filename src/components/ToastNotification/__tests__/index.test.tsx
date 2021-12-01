import { render, screen } from "@testing-library/react";
import type { FC } from "react";
import { ToastNotification } from "..";
import { ToastNotificationsProvider } from "../../../context/toastNotifications";

describe("ToastNotification", () => {
  const defaultId = "__ID__";
  const defaultText = "__TEXT__";
  const defaultType = "success";

  const Wrapper: FC = ({ children }) => {
    return <ToastNotificationsProvider>{children}</ToastNotificationsProvider>;
  };

  it("renders the toast notification", () => {
    render(
      <ToastNotification
        id={defaultId}
        text={defaultText}
        type={defaultType}
      />,
      { wrapper: Wrapper },
    );

    const toastNotification = screen.getByRole("dialog");

    expect(toastNotification).toBeInTheDocument();
  });

  it("renders the text", () => {
    render(
      <ToastNotification
        id={defaultId}
        text={defaultText}
        type={defaultType}
      />,
      { wrapper: Wrapper },
    );

    const text = screen.getByText(defaultText);

    expect(text).toBeInTheDocument();
  });

  it("renders the text", () => {
    render(
      <ToastNotification
        id={defaultId}
        text={defaultText}
        type={defaultType}
      />,
      { wrapper: Wrapper },
    );

    const text = screen.getByText(defaultText);

    expect(text).toBeInTheDocument();
  });

  /**
   * Continue writing test cases and consider context integration.
   */
});
