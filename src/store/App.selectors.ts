import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  if (location.pathname === "/training") {
    return selectPhraseTraining(state);
  }
  const key = Math.min(state.app.levels.length - 1, state.app.currentLevel);
  return state.app.levels[key];
};
export const selectPhraseTraining = (state: RootState) => {
  return state.app.phraseTraining;
};
export const selectPreviousLevel = (state: RootState) => {
  const key = Math.max(0, state.app.currentLevel - 1);
  return state.app.levels[key];
  // return state.app.levels[Math.max(0, state.app.currentLevel - 1)];
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
export const selectPoints = (state: RootState) => {
  return state.app.points;
};
