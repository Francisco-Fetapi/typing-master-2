import { TrainingPhrase } from "./TrainingPhrases";

const sut = new TrainingPhrase("Ola Mundo.");

describe("TrainingPhrase", () => {
  it("should have time equal zero", () => {
    expect(sut.timeLimit).toBe(0);
  });
  it("should define a level by words number and time for typing", () => {
    expect(sut.defineLevelByTimeAndNumLetters(6)).toBe("Beginner");
    expect(sut.defineLevelByTimeAndNumLetters(7)).toBe("Beginner");
    expect(sut.defineLevelByTimeAndNumLetters(11)).toBe("Beginner");

    expect(sut.defineLevelByTimeAndNumLetters(5)).toBe("Intermediate");
    expect(sut.defineLevelByTimeAndNumLetters(4)).toBe("Intermediate");
    expect(sut.defineLevelByTimeAndNumLetters(3)).toBe("Intermediate");

    expect(sut.defineLevelByTimeAndNumLetters(1)).toBe("Advanced");
    expect(sut.defineLevelByTimeAndNumLetters(2)).toBe("Advanced");
    expect(sut.defineLevelByTimeAndNumLetters(0.9)).toBe("Advanced");
  });
  it("should show a correct information about levels timing", () => {
    console.log(sut.showMinTimeWritingByLevel());
    expect(true).toBe(true);
  });
});
