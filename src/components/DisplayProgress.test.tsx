// Imports
import { render } from "@testing-library/react";
import { AppSetup } from "../test";
import DisplayProgress from "./DisplayProgress";

describe("DisplayProgress", () => {
  test("it should renders correctly", async () => {
    render(
      <AppSetup>
        <DisplayProgress />
      </AppSetup>
    );
  });
});
