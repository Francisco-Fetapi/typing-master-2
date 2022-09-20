import { Level } from "./Levels";

const sut = new Level("Ola Mundo", "2m:10s");

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
    expect(sut.timeLimit).toBe(130); //2m:10 -> 130s
  });
  it("should define level difficult by number of words", () => {
    expect(sut.level).toBe("Beginner");
  });
  it("should define points to increase by level", () => {
    expect(sut.pointsToIncrease()).toBe(3);
  });
});

export {};
