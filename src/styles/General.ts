import { Typography, Paper, Box } from "@mui/material";
import styled, { css } from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-attachment: fixed;
`;
export const InputTextContainer = styled(Paper)`
  height: 50px;
  width: 100%;
  max-width: 350px;
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: 30px;
  opacity: 0.8;

  &::after {
    /* content: "|"; */
    content: "";
    display: block;
    background: #cacaca;
    height: 100%;
    width: 2px;
    animation: fadeInOut 0.92s forwards linear infinite alternate;
  }
  &.paused::after {
    animation: none;
  }

  @keyframes fadeInOut {
    to {
      opacity: 0;
    }
  }
` as typeof Paper;

export const BoxColumnCenter = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
` as typeof Box;

export const Text = styled(Typography)`` as typeof Typography;

export const PointCounterContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;

  z-index: -1;
  box-shadow: inset 180px 180px 180px rgba(255, 255, 255, 0.8);
`;
export const GradientBottomTop = styled(Gradient)`
  left: 0;
`;
