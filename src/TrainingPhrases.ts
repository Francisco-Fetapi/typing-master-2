import { ILevel } from "./Level";
import phrases from "./phrases.json";
import { TrainingPhrase } from "./TrainingPhrase";

const trainingPhrases: TrainingPhrase[] = [];

let role: ILevel;

for (role in TrainingPhrase.levelRoles) {
  phrases.forEach((phrase) => {
    trainingPhrases.push(new TrainingPhrase(phrase));
  });
}

export { trainingPhrases };
