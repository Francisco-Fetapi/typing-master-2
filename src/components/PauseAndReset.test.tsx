// Imports
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { AppSetup } from "../test";
import PauseAndReset from "./PauseAndReset";
import { InputTextWrapper } from "./InputText.test";

function PauseAndResetWrapper() {
  return (
    <div>
      <InputTextWrapper />
      <PauseAndReset />
    </div>
  );
}

describe("PauseAndReset", () => {
  test("it should renders correctly", async () => {
    const { getByTestId } = render(
      <AppSetup>
        <PauseAndResetWrapper />
      </AppSetup>
    );
    const pauseResetContainer = getByTestId("pause-reset");
    expect(pauseResetContainer.style.display).toBe("none");
  });
  test("it should be showed after first word to be typed", async () => {
    const { getByTestId } = render(
      <AppSetup>
        <PauseAndResetWrapper />
      </AppSetup>
    );
    const input = getByTestId("input-text");
    await user.type(input, "Ola");
    await user.keyboard(" ");

    const pauseResetContainer = getByTestId("pause-reset");
    expect(pauseResetContainer.style.display).toBe("flex");
  });
});
