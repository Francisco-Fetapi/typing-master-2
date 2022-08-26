import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import useStatePersist from "../hooks/useStatePersist";
import * as Backdrop from "../components/GameBackdrop";
import { Levels } from "../Levels";

const THEME_KEY_IN_LOCALSTORAGE = "darkMode";
const CURRENT_LEVEL_KEY_IN_LOCALSTORAGE = "currentLevel";

export interface IDarkMode {
  darkMode: boolean;
}
export interface App extends IDarkMode {
  typedWords: number;
  currentLevel: number;
  backdrop: Backdrop.Props;
  timer: number | null;
}

const initialState: App = {
  darkMode: useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get(),
  typedWords: 0,
  currentLevel:
    useStatePersist<number>(CURRENT_LEVEL_KEY_IN_LOCALSTORAGE).get() || 0,
  timer: null,
  backdrop: {
    title: "",
    message: "",
    open: false,
  },
};

function stateReseted(): App {
  const darkMode = useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get();
  const currentLevel =
    useStatePersist<number>(CURRENT_LEVEL_KEY_IN_LOCALSTORAGE).get() || 0;
  return { ...initialState, darkMode, currentLevel };
}

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
      const currentLevel = ++state.currentLevel;
      const { save } = useStatePersist<number>(
        CURRENT_LEVEL_KEY_IN_LOCALSTORAGE
      );
      save(currentLevel);
      Object.assign(state, stateReseted());
    },
    showMessageBackdrop(state, action: PayloadAction<Backdrop.Props>) {
      state.backdrop.open = true;
      Object.assign(state.backdrop, action.payload);
    },
    hideMessageBackdrop(state) {
      state.backdrop.open = false;
    },
    resetAllState(state) {
      Object.assign(state, stateReseted());
    },
    setTimer(state, action: PayloadAction<number>) {
      state.timer = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    app: app.reducer,
  },
});

export const {
  toggleTheme,
  increaseTypedWords,
  increaseLevel,
  showMessageBackdrop,
  hideMessageBackdrop,
  resetAllState,
  setTimer,
} = app.actions;

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
