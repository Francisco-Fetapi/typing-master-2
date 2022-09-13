// Imports
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "../App";
import { AppSetup } from "../test";
import Home from "./Home";

describe("Home page", () => {
  test("it should renders correctly", async () => {
    const { getByText } = render(
      <AppSetup>
        <Home />
      </AppSetup>
    );

    expect(getByText("Typing Master")).toBeInTheDocument();
    expect(getByText("Iniciar")).toBeInTheDocument();
    expect(getByText("Treinar")).toBeInTheDocument();
  });

  test("it should change the current page when INICIAR button is clicked", async () => {
    const { getByText, queryByText } = render(<App />);

    const btnIniciar = getByText("Iniciar");
    expect(queryByText("Typing Master")).toBeInTheDocument();

    await user.click(btnIniciar);

    expect(queryByText("Typing Master")).not.toBeInTheDocument();
  });
});
