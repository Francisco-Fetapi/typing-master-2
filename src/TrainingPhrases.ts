import { timeTransformer, timeTransformer2 } from "./helpers/timeTransformer";
import { Level, ILevelRoles, ILevel } from "./Level";

export class TrainingPhrase extends Level {
  public choosedByUser: boolean = false;
  constructor(public phrase: string) {
    super(phrase);
    this.timeLimit = 0;
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
