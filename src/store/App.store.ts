import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import useStatePersist from "../hooks/useStatePersist";

const THEME_KEY_IN_LOCALSTORAGE = "darkMode";

export interface IDarkMode {
  darkMode: boolean;
}
export interface App extends IDarkMode {
  textToType: string;
  typedWords: number;
  currentLevel: number;
}

const initialState: App = {
  darkMode: useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get(),
  textToType: `Porque ninguém me avisou que o Vite era tão bom?😒 Para quem ainda não foi despertado, se comparado ao create-react-app ele é absurdamente mais rápido.`,
  typedWords: 0,
  currentLevel: 1,
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
    setTextToType(state, text: PayloadAction<string>) {
      state.textToType = text.payload;
    },
    increaseTypedWords(state) {
      state.typedWords++;
    },
    increaseLevel(state) {
      state.currentLevel++;
    },
  },
});

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export const { setTextToType, toggleTheme } = appSlice.actions;
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
