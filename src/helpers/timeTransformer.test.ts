import { timeTransformer } from "./timeTransformer";

describe("timeTransformer", () => {
  it("should convert time from string to seconds in number", () => {
    expect(timeTransformer("3m:20")).toBe(200); // 3m:20 -> 200s
  });
});
