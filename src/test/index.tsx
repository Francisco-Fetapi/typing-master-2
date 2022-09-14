import { ThemeProvider, createTheme } from "@mui/material";
import store from "./App.store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ReactNode, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { resetAllState, RootState } from "../store/App.store";

interface AppSetupProps {
  children: ReactNode;
}

// for testing
export function AppSetup({ children }: AppSetupProps) {
  const theme = createTheme({});
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ComponentWrapper>{children}</ComponentWrapper>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

interface ComponentWrapperProps {
  children: ReactNode;
}

function ComponentWrapper({ children }: ComponentWrapperProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(resetAllState());
    };
  }, [children]);
  return <div>{children}</div>;
}
