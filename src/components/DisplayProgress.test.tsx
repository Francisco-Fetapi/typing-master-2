// Imports
import { render } from "@testing-library/react";
import { AppSetup } from "../test";
import DisplayProgress from "./DisplayProgress";

describe("DisplayProgress", () => {
  test("Renders correctly", async () => {
    render(
      <AppSetup>
        <DisplayProgress />
      </AppSetup>
    );
  });
});
