import { Level } from "./Levels";

const sut = new Level("Ola Mundo", "Beginner");

describe("Class Level", () => {
  it("should exist", () => {
    expect(sut).not.toBeNull();
  });
  it("should be able to count number of words by phrase property", () => {
    expect(sut.numWords).toBe(2);
  });
  it("should be able do split phrase in an array", () => {
    expect(sut.arrayText).toEqual(["Ola", "Mundo"]);
  });
  it("should define timeLimit in seconds by timer property received in constructor", () => {
    expect(sut.timeLimit).toBe(10); //2m:10 -> 130s
  });
  it("should define points to increase by level", () => {
    expect(sut.pointsToIncrease()).toBe(3);
  });
});

export {};
