import { createGlobalStyle, css } from "styled-components";

interface StylesProps {
  paused: boolean;
}

export const GlobalStyles = createGlobalStyle<StylesProps>`
    body{
        background-color:#f4f4f4;
        overflow-x: hidden;
        transition:filter 1s;
        ${(props) =>
          props.paused &&
          css`
            filter: grayscale(70);
          `}
    }
`;
