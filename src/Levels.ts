import { timeTransformer } from "./helpers/timeTransformer";
import { transformTextToArray } from "./helpers/transformTextToArray";

interface ILevelRoles<T = number> {
  Beginner: T;
  Intermediate: T;
  Advanced: T;
}
type ILevel = keyof ILevelRoles;

export class Level {
  private _level: ILevel = "Beginner"; //default value
  public numWords: number = 0;
  public arrayText: string[] = [];
  public timeLimit: number = 0;
  static roles: ILevelRoles = {
    Beginner: 5, //25
    Intermediate: 10, //40
    Advanced: 15, //60
  };
  static rolesInPortuguese: ILevelRoles<string> = {
    Beginner: "Iniciante",
    Intermediate: "Intermediário",
    Advanced: "Avançado",
  };
  constructor(public phrase: string, timeLimit: string) {
    this.arrayText = transformTextToArray(this.phrase);
    this.numWords = this.arrayText.length;
    this.level = this.defineLevel(); //define level by numWords
    this.timeLimit = timeTransformer(timeLimit);
  }
  defineLevel(): ILevel {
    let role: ILevel;
    for (role in Level.roles) {
      const maxSizeOfWordsOnPhrase = Level.roles[role];
      if (this.numWords <= maxSizeOfWordsOnPhrase) {
        return role;
      }
    }
    return "Advanced"; //otherwise -> is the last level
  }
  getLevelRoleInPortuguese() {
    return Level.rolesInPortuguese[this._level];
  }
  set level(level: ILevel) {
    this._level = level;
  }
  get level(): ILevel {
    return this._level;
  }
}

export const Levels: Level[] = [];

Levels.push(new Level("Ola Mundo.", "0m:10s"));
Levels.push(new Level("Segundo nivel.", "0m:20s"));
Levels.push(new Level("Terceiro nivel.", "0m:30s"));

Levels.push(new Level(`Para quem ainda não foi despertado`, "0m:50s"));
Levels.push(new Level(`Estou construindo um app com React.`, "1m:10s"));
Levels.push(
  new Level(
    `Construir este app está sendo muito divertido, realmente muito divertido. O MUI tem me ajudado muito.`,
    "1m:45s"
  )
);
