import { timeTransformer } from "./helpers/timeTransformer";
import { transformTextToArray } from "./helpers/transformTextToArray";

interface ILevelRoles {
  Beginner: number;
  Intermediate: number;
  Advanced: number;
}
type ILevel = keyof ILevelRoles;

export class Level {
  private _level: ILevel = "Beginner"; //default value
  public numWords: number = 0;
  public arrayText: string[] = [];
  public timeLimit: number = 0;
  static roles: ILevelRoles = {
    Beginner: 25,
    Intermediate: 40,
    Advanced: 60,
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
    return "Beginner"; //otherwise -> default value
  }
  set level(level: ILevel) {
    this._level = level;
  }
  get level(): ILevel {
    return this._level;
  }
}

export const Levels: Level[] = [];

Levels.push(new Level("Ola Mundo. Isto eh um teste", "0m:20s"));
