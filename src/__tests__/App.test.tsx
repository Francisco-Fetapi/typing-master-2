// Imports
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

// To Test
import App from "../App";

// import ThemeProvider from "@mui/material/styles/ThemeProvider";
// import  from "@mui/material/styles/createTheme";
// import { Button, ThemeProvider, createTheme } from "@mui/material";

// function Application() {
//   const theme = createTheme({});
//   return (
//     <ThemeProvider theme={theme}>
//       <Button>Clicar</Button>
//     </ThemeProvider>
//   );
// }
// Tests
test("Renders main page correctly", async () => {
  // Setup
  // const app = render(<App />);
  render(<App />);
  // Pre Expecations
  expect(screen.getByText("Clicar")).toBeInTheDocument();
});
