// Imports
import { render } from "@testing-library/react";
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

  test("it should change the current page when INICIAR button is clicked", async () => {});
});
