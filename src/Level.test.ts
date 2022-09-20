import { Level } from "./Level";

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
  it("should define timeLimit in seconds by level", () => {
    expect(sut.timeLimit).toBe(10); //00m:10
  });
  it("should define points to increase by level", () => {
    expect(sut.pointsToIncrease()).toBe(3);
  });
});

export {};
