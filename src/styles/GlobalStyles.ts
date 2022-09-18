import { createGlobalStyle, css } from "styled-components";
// import bgDark from "../assets/bg-dark.jpg";
// import bgLight from "../assets/bg-light.jpg";

interface StylesProps {
  paused: boolean;
}

export const GlobalStyles = createGlobalStyle<StylesProps>`
    body{
        background-image:url("${(props) => `/bg.jpg`}");
        background-position:center center ;
        background-attachment: fixed;
        background-size:cover;
        
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
