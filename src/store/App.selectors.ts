import { RootState } from "./App.store";

const delimiters = /[\s\.,?!:;]/gi;

const transformTextToArray = (text: string) => {
  let textArray = text.split(delimiters);
  textArray = textArray.filter((word) => word !== "");
  return textArray;
};

export const selectTheme = (state: RootState) => state.app.darkMode;
export const selectTextToType = (state: RootState) => state.app.textToType;
export const selectTypedWords = (state: RootState) => state.app.typedWords;
export const selectCurrentLevel = (state: RootState) => state.app.currentLevel;
export const selectPhraseSize = (state: RootState) => {
  return transformTextToArray(state.app.textToType).length;
};
export const selectWordToType = (state: RootState) => {
  const words = transformTextToArray(state.app.textToType);
  console.log(state.app.typedWords);
  return words[state.app.typedWords];
};
