import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalStyles } from "../styles/GlobalStyles";
import {
  selectTheme,
  selectTimerPaused,
  selectTypedWords,
} from "../store/App.selectors";
import { useSelector } from "react-redux";

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
      mode: darkMode ? "dark" : "light",
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
      {children}
    </ThemeProvider>
  );
}
