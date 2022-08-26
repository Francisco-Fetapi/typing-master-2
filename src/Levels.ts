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
    Beginner: 25,
    Intermediate: 40,
    Advanced: 60,
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

Levels.push(new Level("Ola Mundo.", "0m:10s"));
Levels.push(new Level("Segundo nivel.", "0m:20s"));

Levels.push(
  new Level(
    `Para quem ainda não foi despertado, se comparado ao create-react-app ele é absurdamente mais rápido. Honestamente prefiro utilizar o vite a qualquer outra ferramenta.Para quem ainda não foi despertado, se comparado ao create-react-app ele é absurdamente mais rápido.`,
    "1m:20s"
  )
);
