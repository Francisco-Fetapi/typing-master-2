// Imports
import { render } from "@testing-library/react";
import { AppSetup } from "../test";
import DisplayProgress from "./DisplayProgress";

test("Renders DisplayProgress component correctly", async () => {
  render(
    <AppSetup>
      <DisplayProgress />
    </AppSetup>
  );
});
