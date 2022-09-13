// Imports
import { render } from "@testing-library/react";
import { AppSetup } from "../test";
import LevelsList from "./LevelsList";

describe("LevelsList page", () => {
  test("it should renders correctly", async () => {
    const { getByText } = render(
      <AppSetup>
        <LevelsList />
      </AppSetup>
    );

    expect(getByText("Lista de Niveis")).toBeInTheDocument();
  });
});
