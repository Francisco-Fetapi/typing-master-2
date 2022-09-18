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
            & .grayscale-on-paused {
              filter: grayscale(1);
            }
          `}
    }

    .input-text{
      pointer-events:none;
      opacity:0;
    }
    .MuiSpeedDialAction-staticTooltipLabel{
        width:150px !important;
        font-size:14px !important;
        font-weight:bold;
    }
`;
