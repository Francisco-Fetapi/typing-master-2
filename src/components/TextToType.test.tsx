// Imports
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { AppSetup } from "../test";
import TextToType from "./TextToType";

function TextToTypeWrapper() {
  return (
    <div>
      <TextToType />
    </div>
  );
}

describe("TextToType", () => {
  test("it should renders correctly", async () => {
    const { getByTestId } = render(
      <AppSetup>
        <TextToTypeWrapper />
      </AppSetup>
    );
    const board = getByTestId("text-to-type");

    expect(board.textContent?.trim()).toBe("Ola Mundo.");
  });
});
