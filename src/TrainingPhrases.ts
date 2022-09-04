import { Level } from "./Levels";

export class TrainingPhrase extends Level {
  constructor(public phrase: string) {
    super(phrase, "00m:00s");
  }
  defineLevelByTime(typedIn: number) {}
}

export const trainingPhrases: TrainingPhrase[] = [];

trainingPhrases.push(new TrainingPhrase("Ola Mundo."));
trainingPhrases.push(new TrainingPhrase("Tudo bem."));
trainingPhrases.push(new TrainingPhrase("Francisco Fetapi."));
trainingPhrases.push(new TrainingPhrase("Esperem por mim."));
