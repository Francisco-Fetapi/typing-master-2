import { RootState } from "./App.store";

export const selectTheme = (state: RootState) => state.app.darkMode;
export const selectTextToType = (state: RootState) => state.app.textToType;
