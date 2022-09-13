// Imports
import { render } from "@testing-library/react";
import { AppSetup } from "../test";
import DisplayProgress from "./DisplayProgress";

describe("DisplayProgress", () => {
  test("it should renders correctly", async () => {
    const { getByText } = render(
      <AppSetup>
        <DisplayProgress />
      </AppSetup>
    );

    expect(getByText("0")).toBeInTheDocument();
    expect(getByText("/")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
  });
});
