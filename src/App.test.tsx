// Imports
import { render, screen } from "@testing-library/react";
// import user from "@testing-library/user-event";

// To Test
import App from "./App";

test("Renders main page correctly", async () => {
  render(<App />);
  expect(screen.queryByText("Typing Master")).toBeInTheDocument();
});
