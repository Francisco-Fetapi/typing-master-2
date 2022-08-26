import { Level, Levels } from "../Levels";
import { RootState } from "./App.store";

export const selectTheme = (state: RootState) => state.app.darkMode;
export const selectTextToType = (state: RootState) =>
  Levels[state.app.currentLevel].phrase;
export const selectTypedWords = (state: RootState) => state.app.typedWords;
export const selectCurrentLevel = (state: RootState) => state.app.currentLevel;
export const selectPhraseSize = (state: RootState) => {
  return Levels[state.app.currentLevel].numWords;
};
export const selectTextToTypeArray = (state: RootState) => {
  return Levels[state.app.currentLevel].phrase.split(" ");
};
export const selectWordToType = (state: RootState) => {
  const words = selectTextToTypeArray(state);
  return words[state.app.typedWords];
};

export const selectTimeLimit = (state: RootState) => {
  return Levels[state.app.currentLevel].timeLimit;
};
export const selectLevel = (state: RootState) => {
  const level = Levels[state.app.currentLevel].level;
  return Level.rolesInPortuguese[level];
};
export const selectBackdropInfo = (state: RootState) => {
  return state.app.backdrop;
};
export const selectTimer = (state: RootState) => {
  return state.app.timer;
};
