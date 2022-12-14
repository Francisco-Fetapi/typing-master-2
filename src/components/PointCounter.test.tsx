// Imports
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { AppSetup } from "../test";
import PointCounter from "./PointCounter";
import { InputTextWrapper } from "./InputText.test";

function PointCounterWrapper() {
  return (
    <div>
      <InputTextWrapper />
      <PointCounter />
    </div>
  );
}

describe("PointCounter", () => {
  test("it should renders correctly", async () => {
    const { getByText } = render(
      <AppSetup>
        <PointCounterWrapper />
      </AppSetup>
    );

    expect(getByText("0 pt")).toBeInTheDocument();
  });
  test("it should be increased when user typed all words", async () => {
    const { getByTestId, getByText, queryByText } = render(
      <AppSetup>
        <PointCounterWrapper />
      </AppSetup>
    );

    expect(getByText("0 pt")).toBeInTheDocument();
    const input = getByTestId("input-text");
    await user.type(input, "Ola");
    await user.keyboard(" ");
    await user.type(input, "Mundo.");
    await user.keyboard(" ");

    // after to type all words the points are increased
    expect(queryByText("3 pts")).toBeInTheDocument();
  });
});
