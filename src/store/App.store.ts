import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import useStatePersist from "../hooks/useStatePersist";

const THEME_KEY_IN_LOCALSTORAGE = "darkMode";

export interface IDarkMode {
  darkMode: boolean;
}
export interface App extends IDarkMode {}

const initialState: App = {
  darkMode: useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get(),
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
      const { save } = useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE);
      save(state.darkMode);
    },
  },
});

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export const {} = appSlice.actions;
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
