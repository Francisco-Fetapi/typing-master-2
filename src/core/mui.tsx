import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { GlobalStyles } from "../styles/GlobalStyles";
import {
  selectTheme,
  selectTimerPaused,
  selectTypedWords,
} from "../store/App.selectors";
import { useSelector } from "react-redux";
import { AppContainer } from "../styles/General";

interface Props {
  children: React.ReactElement;
}

export default function Layout({ children }: Props) {
  const darkMode = useSelector(selectTheme);
  const timerPaused = useSelector(selectTimerPaused);
  const typedWords = useSelector(selectTypedWords);
  const paused = timerPaused && typedWords > 0;
  const theme = createTheme({
    palette: {
      mode: darkMode ? "light" : "dark",
    },
    components: {
      MuiTextField: {
        defaultProps: {
          size: "small",
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles paused={paused} />
      <AppContainer
        style={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(0,0,0,.8)"
              : "rgba(255,255,255,.91)",
        }}
      >
        {children}
      </AppContainer>
    </ThemeProvider>
  );
}
