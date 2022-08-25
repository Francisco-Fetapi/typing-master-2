import { Levels } from "../Levels";
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
  // return transformTextToArray(state.app.textToType);
  return Levels[state.app.currentLevel].arrayText;
};
export const selectWordToType = (state: RootState) => {
  // const words = transformTextToArray(state.app.textToType);
  const words = selectTextToTypeArray(state);
  console.log(state.app.typedWords);
  return words[state.app.typedWords];
};
