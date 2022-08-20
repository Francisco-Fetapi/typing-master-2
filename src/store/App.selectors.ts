import { RootState } from "./App.store";

const delimiters = /[\s\.,?!:;]/;

export const selectTheme = (state: RootState) => state.app.darkMode;
export const selectTextToType = (state: RootState) => state.app.textToType;
export const selectTypedWords = (state: RootState) => state.app.typedWords;
export const selectCurrentLevel = (state: RootState) => state.app.currentLevel;
export const selectPhraseSize = (state: RootState) => {
  return state.app.textToType.split(delimiters).length;
};
export const selectWordToType = (state: RootState) => {
  const words = state.app.textToType.split(delimiters);
  return words[state.app.typedWords];
};
