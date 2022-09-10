import { transformTextToArray } from "./transformTextToArray";

describe("transformTextToArray", () => {
  it("should split text to an array", () => {
    const text = "Ola Mundo,sou o Francisco";
    expect(transformTextToArray(text)).toEqual([
      "Ola",
      "Mundo",
      "sou",
      "o",
      "Francisco",
    ]);
  });
});
