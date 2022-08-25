import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import useStatePersist from "../hooks/useStatePersist";

const THEME_KEY_IN_LOCALSTORAGE = "darkMode";

export interface IDarkMode {
  darkMode: boolean;
}
export interface App extends IDarkMode {
  typedWords: number;
  currentLevel: number;
}

const initialState: App = {
  darkMode: useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get(),
  typedWords: 0,
  currentLevel: 0,
};

export const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
      const { save } = useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE);
      save(state.darkMode);
    },
    increaseTypedWords(state) {
      state.typedWords = state.typedWords + 1;
    },
    increaseLevel(state) {
      state.currentLevel++;
    },
  },
});

const store = configureStore({
  reducer: {
    app: app.reducer,
  },
});

export const { toggleTheme, increaseTypedWords } = app.actions;

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
