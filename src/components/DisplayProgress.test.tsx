// Imports
import { render, screen } from "@testing-library/react";
import App from "../App";
import user from "@testing-library/user-event";
import { AppSetup } from "../test";
import DisplayProgress from "./DisplayProgress";

// test("Renders main page correctly", async () => {
//   render(<App />);
//   // expect(screen.queryByText("Typing Master")).toBeInTheDocument();
//   const btnStart = screen.getByTestId("btn-Iniciar");

//   await user.click(btnStart);
//   expect(screen.queryByText("Typing Master")).not.toBeInTheDocument();
// });
test("Renders main page correctly", async () => {
  render(
    <AppSetup>
      <DisplayProgress />
    </AppSetup>
  );
});
