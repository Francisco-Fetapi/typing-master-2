import { Level, ILevelRoles, ILevel } from "./Levels";

export class TrainingPhrase extends Level {
  private numLetters: number = 0;
  static levelRoles: ILevelRoles = {
    // min of % of time to type the phrase
    Beginner: 60, // 60 - infinity
    Intermediate: 30, // 30 - 59
    Advanced: 0, //0 - 29
  };
  constructor(public phrase: string) {
    super(phrase, "00m:00s");
    this.numLetters = phrase.length;
  }
  defineLevelByTimeAndNumLetters(typingSeconds: number) {
    const timePercent = (typingSeconds / this.numLetters) * 100;

    let role: ILevel;
    for (role in TrainingPhrase.levelRoles) {
      const maxPercent = TrainingPhrase.levelRoles[role];
      if (timePercent >= maxPercent) {
        // if the difference is very big -> elevate this classification.
        return role;
      }
    }
    let levels = Object.keys(TrainingPhrase.levelRoles) as ILevel[];
    const lastLevel = levels[levels.length - 1];
    return lastLevel; //otherwise -> is the last level
  }
}

export const trainingPhrases: TrainingPhrase[] = [];

trainingPhrases.push(new TrainingPhrase("Ola Mundo."));
trainingPhrases.push(new TrainingPhrase("Tudo bem."));
trainingPhrases.push(new TrainingPhrase("Francisco Fetapi."));
trainingPhrases.push(new TrainingPhrase("Esperem por mim."));
