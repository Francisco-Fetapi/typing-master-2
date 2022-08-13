import { RootState } from "./App.store";

export const selectTheme = (state: RootState) => state.app.darkMode;
