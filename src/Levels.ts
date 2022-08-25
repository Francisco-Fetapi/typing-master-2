import { transformTextToArray } from "./helpers/transformTextToArray";

interface ILevelRoles {
  Beginner: number;
  Intermediate: number;
  Advanced: number;
}
type ILevel = keyof ILevelRoles;

class Level {
  private _level: ILevel = "Beginner"; //default value
  public numWords: number = 0;
  static roles: ILevelRoles = {
    Beginner: 25,
    Intermediate: 40,
    Advanced: 60,
  };
  constructor(public timer: number, public phrase: string) {
    this.numWords = transformTextToArray(this.phrase).length;
    this.level = this.numWords; //define level by numWords
  }
  set level(numWords: number) {
    let role: ILevel;
    for (role in Level.roles) {
      const maxSizeOfWordsOnPhrase = Level.roles[role];
      if (numWords <= maxSizeOfWordsOnPhrase) {
        this._level = role;
        break;
      }
    }
  }
}

export const Levels = [];
