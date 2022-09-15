import { timeTransformer, timeTransformer2 } from "./timeTransformer";

describe("timeTransformer", () => {
  it("should convert time from string to seconds in number", () => {
    expect(timeTransformer("03m:20s")).toBe(200); // 3m:20 -> 200s
  });
});
describe("timeTransformer2", () => {
  it("should convert time from number to seconds in string", () => {
    expect(timeTransformer2(200)).toBe("03m:20s"); // 3m:20 -> 200s
  });
});
