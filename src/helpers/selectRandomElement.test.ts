import selectRandomElement from "./selectRandomElement";

describe("Test selectRandomElement", () => {
  it("should generate a random element", () => {
    const elements = [1, 2, 3, 4, 9, 10, 2, 6, 23, 2];
    const element = selectRandomElement(elements);
    expect(elements).toContain(element);
  });
});
