import { ThemeProvider, createTheme } from "@mui/material";
import store from "../store/App.store";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

interface AppSetupProps {
  children: ReactNode;
}

// for testing
export function AppSetup({ children }: AppSetupProps) {
  const theme = createTheme({});
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
