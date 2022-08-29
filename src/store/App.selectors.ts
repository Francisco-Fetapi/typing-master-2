import { Level, Levels } from "../Levels";
import { RootState } from "./App.store";

export const selectTheme = (state: RootState) => state.app.darkMode;
export const selectTextToType = (state: RootState) =>
  selectCurrentLevelInfo(state).phrase;
export const selectTypedWords = (state: RootState) => state.app.typedWords;
export const selectCurrentLevel = (state: RootState) => state.app.currentLevel;
export const selectPhraseSize = (state: RootState) => {
  return selectCurrentLevelInfo(state).numWords;
};
export const selectTextToTypeArray = (state: RootState) => {
  return selectCurrentLevelInfo(state).phrase.split(" ");
};
export const selectCurrentLevelInfo = (state: RootState) => {
  const key = Math.min(Levels.length - 1, state.app.currentLevel);
  console.log(Levels[key]);
  return Levels[key];
};
export const selectPreviousLevel = (state: RootState) => {
  const key = Math.max(0, state.app.currentLevel - 1);
  return Levels[key];
  // return Levels[Math.max(0, state.app.currentLevel - 1)];
};
export const selectWordToType = (state: RootState) => {
  const words = selectTextToTypeArray(state);
  return words[state.app.typedWords];
};

export const selectTimeLimit = (state: RootState) => {
  return selectCurrentLevelInfo(state).timeLimit;
};
export const selectTimerPaused = (state: RootState) => {
  return state.app.timerPaused;
};
export const selectLevel = (state: RootState) => {
  return selectCurrentLevelInfo(state).getLevelRoleInPortuguese();
};
export const selectBackdropInfo = (state: RootState) => {
  return state.app.backdrop;
};
export const selectTimer = (state: RootState) => {
  return state.app.timer;
};
