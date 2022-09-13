// Imports
import { render } from "@testing-library/react";
import { AppSetup } from "../test";
import Training from "./Training";

describe("Training page", () => {
  test("it should renders correctly", async () => {
    const { getByText } = render(
      <AppSetup>
        <Training />
      </AppSetup>
    );

    expect(getByText("MODO TREINO")).toBeInTheDocument();
  });
});
