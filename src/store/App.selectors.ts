import { Level, Levels } from "../Levels";
import { RootState } from "./App.store";

export const selectTheme = (state: RootState) => state.app.darkMode;
export const selectTextToType = (state: RootState) =>
  selectLevelInfo(state).phrase;
export const selectTypedWords = (state: RootState) => state.app.typedWords;
export const selectCurrentLevel = (state: RootState) => state.app.currentLevel;
export const selectPhraseSize = (state: RootState) => {
  return selectLevelInfo(state).numWords;
};
export const selectTextToTypeArray = (state: RootState) => {
  return selectLevelInfo(state).phrase.split(" ");
};
export const selectLevelInfo = (state: RootState) => {
  return Levels[Math.min(Levels.length - 1, state.app.currentLevel)];
};
export const selectPreviousLevel = (state: RootState) => {
  return Levels[Math.max(0, Levels.length - 2)];
};
export const selectWordToType = (state: RootState) => {
  const words = selectTextToTypeArray(state);
  return words[state.app.typedWords];
};

export const selectTimeLimit = (state: RootState) => {
  return selectLevelInfo(state).timeLimit;
};
export const selectLevel = (state: RootState) => {
  const level = selectLevelInfo(state).level;
  return Level.rolesInPortuguese[level];
};
export const selectBackdropInfo = (state: RootState) => {
  return state.app.backdrop;
};
export const selectTimer = (state: RootState) => {
  return state.app.timer;
};
