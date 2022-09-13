// Imports
// import { useEffect } from "react";
import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import { selectWordToType } from "../store/App.selectors";
// import user from "@testing-library/user-event";
import { AppSetup } from "../test";
import InputText from "./InputText";

function InputTextWrapper() {
  const text = useSelector(selectWordToType);
  return (
    <div>
      <InputText text={text} />
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
});
