// Imports
import { render } from "@testing-library/react";
import { AppSetup } from "../test";
import Home from "./Home";

describe("Home page", () => {
  test("Renders correctly", async () => {
    const { getByText } = render(
      <AppSetup>
        <Home />
      </AppSetup>
    );

    expect(getByText("Typing Master")).toBeInTheDocument();
    expect(getByText("Iniciar")).toBeInTheDocument();
    expect(getByText("Treinar")).toBeInTheDocument();
  });
});
