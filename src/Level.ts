import { transformTextToArray } from "./helpers/transformTextToArray";

export interface ILevelRoles<T = number> {
  Beginner: T;
  Intermediate: T;
  Advanced: T;
}
export type ILevel = keyof ILevelRoles;

interface TimeInterval {
  from: number;
  to: number;
}

export class Level {
  private _level: ILevel = "Beginner"; //default value
  public numWords: number = 0;
  public numLetters: number = 0;
  public arrayText: string[] = [];
  public timeLimit: number = 0;
  static levelRoles: ILevelRoles = {
    // min of % of time to type the phrase
    Beginner: 60, // 60 - infinity
    Intermediate: 30, // 30 - 59
    Advanced: 0, //0 - 29
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
  constructor(public phrase: string, level?: ILevel) {
    this.arrayText = transformTextToArray(this.phrase);
    this.numWords = this.arrayText.length;
    // this.level = this.defineLevel(); //define level by numWords
    this.level = level || "Beginner";
    this.numLetters = phrase.length;
    this.timeLimit = this.defineTimeLimitByLevel();
  }
  showIntervalTimeByLevel() {
    const maxTimeToWrite = this.numLetters; //64

    const levels: Partial<ILevelRoles<TimeInterval>> = {};

    function calculateTime(role: ILevel) {
      const maxPercent = Level.levelRoles[role];
      const minSeconds = Math.ceil(maxTimeToWrite * (maxPercent / 100));

      return minSeconds;
    }

    levels["Advanced"] = {
      from: calculateTime("Advanced"),
      to: calculateTime("Intermediate") - 1,
    };
    levels["Intermediate"] = {
      from: calculateTime("Intermediate"),
      to: calculateTime("Beginner") - 1,
    };
    levels["Beginner"] = {
      from: calculateTime("Beginner"),
      to: Infinity,
    };

    return levels as ILevelRoles<TimeInterval>;
  }
  defineTimeLimitByLevel(): number {
    let timeLimit = 0;
    if (this.level === "Beginner") {
      timeLimit = this.numWords * 3.5;
    } else {
      timeLimit = this.showIntervalTimeByLevel()[this.level]?.to;
    }
    return Math.floor(timeLimit);
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
