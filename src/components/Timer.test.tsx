// Imports
import { render } from "@testing-library/react";
import { AppSetup } from "../test";
import Timer from "./Timer";

function TimerWrapper() {
  return (
    <div>
      <Timer />
    </div>
  );
}

describe("Timer", () => {
  test("it should renders correctly", async () => {
    const { getByTestId } = render(
      <AppSetup>
        <TimerWrapper />
      </AppSetup>
    );
    const timer = getByTestId("timer");

    expect(timer.textContent?.trim()).toBe("02m:10s");
  });
});
