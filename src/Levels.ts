import { timeTransformer } from "./helpers/timeTransformer";
import { transformTextToArray } from "./helpers/transformTextToArray";
import { increasePoints } from "./store/App.store";

export interface ILevelRoles<T = number> {
  Beginner: T;
  Intermediate: T;
  Advanced: T;
}
export type ILevel = keyof ILevelRoles;

export class Level {
  private _level: ILevel = "Beginner"; //default value
  public numWords: number = 0;
  public arrayText: string[] = [];
  public timeLimit: number = 0;
  static roles: ILevelRoles = {
    // num words to define the phrase level
    Beginner: 5, //25
    Intermediate: 10, //40
    Advanced: 15, //60
  };
  static rolesInPortuguese: ILevelRoles<string> = {
    Beginner: "Iniciante",
    Intermediate: "Intermediário",
    Advanced: "Avançado",
  };
  static rolePoints = {
    Beginner: 1.1,
    Intermediate: 1.8,
    Advanced: 2.3,
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
    let levels = Object.keys(Level.roles) as ILevel[];
    const lastLevel = levels[levels.length - 1];
    return lastLevel; //otherwise -> is the last level
  }
  getLevelRoleInPortuguese() {
    return Level.rolesInPortuguese[this._level];
  }
  pointsToIncrease(): number {
    // points(numWords) * role
    // ex for beginner: 120 * 1.1 = 132
    return Math.ceil(this.numWords * this.levelPointsIncrement());
  }
  set level(level: ILevel) {
    this._level = level;
  }
  get level(): ILevel {
    return this._level;
  }
  levelPointsIncrement(): number {
    return Level.rolePoints[this.level];
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
