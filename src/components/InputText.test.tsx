// Imports
// import { useEffect } from "react";
import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import { selectWordToType } from "../store/App.selectors";
import user from "@testing-library/user-event";
import { AppSetup } from "../test";
import InputText from "./InputText";

export function InputTextWrapper() {
  return (
    <div>
      <InputText />
    </div>
  );
}

describe("InputText", () => {
  test("it should renders correctly", async () => {
    const { getByText } = render(
      <AppSetup>
        <InputTextWrapper />
      </AppSetup>
    );
    expect(getByText("Ola")).toBeInTheDocument();
  });
  test("it should be able to typing", async () => {
    const { getByText, getByTestId } = render(
      <AppSetup>
        <InputTextWrapper />
      </AppSetup>
    );
    const input = getByTestId("input-text");
    await user.type(input, "Francisco");
    expect(getByText("Francisco")).toBeInTheDocument();
  });
  test("it should be able to go to the next word after type a correct word", async () => {
    const { getByText, getByTestId } = render(
      <AppSetup>
        <InputTextWrapper />
      </AppSetup>
    );
    const input = getByTestId("input-text");
    await user.type(input, "Ola");
    await user.keyboard(" ");
    expect(getByText("Mundo.")).toBeInTheDocument();
  });
});
