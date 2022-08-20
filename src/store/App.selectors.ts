import { RootState } from "./App.store";

export const selectTheme = (state: RootState) => state.app.darkMode;
export const selectTextToType = (state: RootState) => state.app.textToType;
export const selectWordToType = (state: RootState) => {
  const words = state.app.textToType.split(" ");
  return words[state.app.typedWords];
};
