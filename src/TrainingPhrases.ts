import { Level } from "./Levels";

export class TrainingPhrases extends Level {
  constructor(public phrase: string) {
    super(phrase, "00m:00s");
  }
  defineLevelByTime(typedIn: number) {}
}

export const trainingPhrases: TrainingPhrases[] = [];

trainingPhrases.push(new TrainingPhrases("Ola Mundo."));
trainingPhrases.push(new TrainingPhrases("Tudo bem."));
trainingPhrases.push(new TrainingPhrases("Francisco Fetapi."));
trainingPhrases.push(new TrainingPhrases("Esperem por mim."));
