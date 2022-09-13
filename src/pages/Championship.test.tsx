// Imports
import { render } from "@testing-library/react";
import { AppSetup } from "../test";
import Championship from "./Championship";

describe("Championship page", () => {
  test("it should renders correctly", async () => {
    const { getByText } = render(
      <AppSetup>
        <Championship />
      </AppSetup>
    );

    expect(getByText("Nivel 1")).toBeInTheDocument();
    expect(getByText("Iniciante")).toBeInTheDocument();
  });
});
