import { ILevel, Level } from "./Level";
import phrases from "./phrases.json";

const Levels: Level[] = [];
let role: ILevel;

for (role in Level.levelRoles) {
  phrases.forEach((phrase) => {
    Levels.push(new Level(phrase, role));
  });
}

export { Levels };
