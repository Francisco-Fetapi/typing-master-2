// Imports
import { render } from "@testing-library/react";
import { AppSetup } from "../test";
import Footer from "./Footer";

describe("Footer", () => {
  test("it should renders correctly", async () => {
    const { getByText } = render(
      <AppSetup>
        <Footer />
      </AppSetup>
    );

    expect(getByText("Francisco Fetapi")).toBeInTheDocument();
  });
});
