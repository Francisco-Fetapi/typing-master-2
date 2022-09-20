import { ILevel, Level } from "./Level";
import phrases from "./phrases.json";

const Levels: Level[] = [];
const limitPhrases = 15;
let role: ILevel;

for (role in Level.levelRoles) {
  phrases.slice(0, limitPhrases).forEach((phrase) => {
    Levels.push(new Level(phrase, role));
  });
}

export { Levels };
