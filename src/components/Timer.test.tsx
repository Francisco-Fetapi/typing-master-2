// Imports
import { act, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { AppSetup } from "../test";
import { InputTextWrapper } from "./InputText.test";
import Timer from "./Timer";

function TimerWrapper() {
  return (
    <div>
      <Timer />
    </div>
  );
}

export const sleep = (time: number) =>
  new Promise((res, rej) => setTimeout(() => res(null), time * 1000));

describe("Timer", () => {
  test("it should renders correctly", async () => {
    const { getByTestId } = render(
      <AppSetup>
        <TimerWrapper />
      </AppSetup>
    );
    const timer = getByTestId("timer");

    expect(timer.textContent).toBe("02m:10s");
  });
  test("it should decrease the timer per second when user begins typing", async () => {
    const { getByTestId } = render(
      <AppSetup>
        <InputTextWrapper />
        <TimerWrapper />
      </AppSetup>
    );

    const timer = getByTestId("timer");

    expect(timer.textContent).toBe("02m:10s");

    const input = getByTestId("input-text");

    await act(async () => {
      await user.type(input, "Ola");
      await user.keyboard(" ");
    });

    await sleep(1);
    expect(timer.textContent).toBe("02m:09s");
    await sleep(1);
    expect(timer.textContent).toBe("02m:08s");
  });
});
