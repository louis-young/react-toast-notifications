import styled, { css } from "styled-components";
import { ToastNotification } from "../ToastNotification";
import type {
  ToastNotificationsListPosition,
  ToastNotificationsListProps,
} from "./types";

const List = styled.ul`
  padding: unset;
  margin: unset;
  list-style: none;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 27rem;
  z-index: ${Number.MAX_SAFE_INTEGER};
  ${({ position }: { position: ToastNotificationsListPosition }) =>
    position === "middle" &&
    css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
  ${({ position }: { position: ToastNotificationsListPosition }) =>
    position === "top" &&
    css`
      top: 2rem;
      left: 50%;
      transform: translateX(-50%);
    `}
    ${({ position }: { position: ToastNotificationsListPosition }) =>
    position === "bottom" &&
    css`
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
    `}
    ${({ position }: { position: ToastNotificationsListPosition }) =>
    position === "topLeft" &&
    css`
      top: 2rem;
      left: 2rem;
    `}
    ${({ position }: { position: ToastNotificationsListPosition }) =>
    position === "topRight" &&
    css`
      top: 2rem;
      right: 2rem;
    `}
    ${({ position }: { position: ToastNotificationsListPosition }) =>
    position === "bottomLeft" &&
    css`
      bottom: 2rem;
      left: 2rem;
    `}
    ${({ position }: { position: ToastNotificationsListPosition }) =>
    position === "bottomRight" &&
    css`
      bottom: 2rem;
      right: 2rem;
    `};
`;

export const ToastNotificationsList = ({
  toastNotifications,
  position,
}: ToastNotificationsListProps) => {
  return (
    <List position={position}>
      {toastNotifications.map(({ id, text, type, options }) => (
        <ToastNotification
          id={id}
          text={text}
          type={type}
          options={options}
          key={id}
        />
      ))}
    </List>
  );
};
