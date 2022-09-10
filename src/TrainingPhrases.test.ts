import { TrainingPhrase } from "./TrainingPhrases";

const sut = new TrainingPhrase("Ola Mundo");

describe("TrainingPhrase", () => {
  it("should have time equal zero", () => {
    expect(sut.timeLimit).toBe(0);
  });
});
