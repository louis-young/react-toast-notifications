import styled, { keyframes } from "styled-components";
import type { ToastNotificationDurationProps } from "./types";

const deplete = keyframes`
  from {
  width: 100%;
  }
  to {
  width: 0%;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Duration = styled.div`
  height: 0.2rem;
  width: 100%;
  position: absolute;
  z-index: 1;
  background-color: #bdbdbd;
  animation-name: ${deplete};
  animation-duration: ${({ duration }: { duration: number }) =>
    `${duration / 1000}s`}; /* Convert duration to seconds. */
  animation-timing-function: linear;
`;

const Background = styled.div`
  height: 0.2rem;
  width: 100%;
  position: absolute;
  z-index: 0;
  background-color: #e6e6e6;
`;

export const ToastNotificationDuration = ({
  duration,
}: ToastNotificationDurationProps) => {
  return (
    <Wrapper>
      <Duration duration={duration} />
      <Background />
    </Wrapper>
  );
};
