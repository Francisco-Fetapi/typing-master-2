import { transformTextToArray } from "../helpers/transformTextToArray";
import { RootState } from "./App.store";

export const selectTheme = (state: RootState) => state.app.darkMode;
export const selectTextToType = (state: RootState) => state.app.textToType;
export const selectTypedWords = (state: RootState) => state.app.typedWords;
export const selectCurrentLevel = (state: RootState) => state.app.currentLevel;
export const selectPhraseSize = (state: RootState) => {
  return transformTextToArray(state.app.textToType).length;
};
export const selectTextToTypeArray = (state: RootState) => {
  // return transformTextToArray(state.app.textToType);
  return state.app.textToType.split(" ");
};
export const selectWordToType = (state: RootState) => {
  // const words = transformTextToArray(state.app.textToType);
  const words = selectTextToTypeArray(state);
  console.log(state.app.typedWords);
  return words[state.app.typedWords];
};
