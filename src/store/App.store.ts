import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import useStatePersist from "../hooks/useStatePersist";
import * as Backdrop from "../components/GameBackdrop";
import { Levels } from "../Levels";
import { TrainingPhrase, trainingPhrases } from "../TrainingPhrases";
import selectRandomElement from "../helpers/selectRandomElement";

export const THEME_KEY_IN_LOCALSTORAGE = "darkMode";
export const CURRENT_LEVEL_KEY_IN_LOCALSTORAGE = "currentLevel";
export const POINTS_KEY_IN_LOCALSTORAGE = "points";

export interface IDarkMode {
  darkMode: boolean;
}
export interface App extends IDarkMode {
  typedWords: number;
  currentLevel: number;
  backdrop: Backdrop.Props;
  timer: number | null;
  timerPaused: boolean;
  points: number;
  phraseTraining: TrainingPhrase;
}

const initialState: App = {
  darkMode: useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get(),
  typedWords: 0,
  currentLevel:
    useStatePersist<number>(CURRENT_LEVEL_KEY_IN_LOCALSTORAGE).get() || 0,
  timer: null,
  timerPaused: true,
  backdrop: {
    title: "",
    message: "",
    open: false,
  },
  points: useStatePersist<number>(POINTS_KEY_IN_LOCALSTORAGE).get() || 0,
  phraseTraining: selectRandomElement<TrainingPhrase>(trainingPhrases),
};

function stateReseted(initialState: App): App {
  const darkMode = useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get();
  const currentLevel =
    useStatePersist<number>(CURRENT_LEVEL_KEY_IN_LOCALSTORAGE).get() || 0;
  const points = useStatePersist<number>(POINTS_KEY_IN_LOCALSTORAGE).get() || 0;
  const phraseTraining = selectRandomElement<TrainingPhrase>(trainingPhrases);
  return { ...initialState, darkMode, currentLevel, points, phraseTraining };
}

export function sliceCreator(initialState: App) {
  return createSlice({
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
      clearTypedWords(state) {
        state.typedWords = 0;
      },
      increaseLevel(state) {
        state.currentLevel = Math.min(
          state.currentLevel + 1,
          Levels.length - 1
        );
        Object.assign(state, stateReseted(initialState));
      },
      showMessageBackdrop(state, action: PayloadAction<Backdrop.Props>) {
        state.backdrop.open = true;
        Object.assign(state.backdrop, action.payload);
      },
      hideMessageBackdrop(state) {
        state.backdrop.open = false;
      },
      resetAllState(state) {
        Object.assign(state, stateReseted(initialState));
      },
      setTimer(state, action: PayloadAction<number | null>) {
        state.timer = action.payload;
      },
      playTimer(state) {
        state.timerPaused = false;
      },
      pauseTimer(state) {
        state.timerPaused = true;
      },
      increasePoints(state, action: PayloadAction<number>) {
        state.points += action.payload;
        const { save } = useStatePersist<number>(POINTS_KEY_IN_LOCALSTORAGE);
        save(state.points);
      },
      chooseRandomPhraseToTrain(state) {
        state.phraseTraining =
          selectRandomElement<TrainingPhrase>(trainingPhrases);
      },
    },
  });
}

export const app = sliceCreator(initialState);

export const middlewares = {
  serializableCheck: {
    // Ignore these paths in the state
    ignoredPaths: [
      "app.phraseTraining",
      "app.backdrop.primaryButton.handleClick",
      "app.backdrop.onMount",
      "payload.primaryButton.handleClick",
    ],
  },
};
export const store = configureStore({
  reducer: {
    app: app.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewares),
});

export const {
  toggleTheme,
  increaseTypedWords,
  increaseLevel,
  showMessageBackdrop,
  hideMessageBackdrop,
  resetAllState,
  setTimer,
  playTimer,
  pauseTimer,
  clearTypedWords,
  increasePoints,
  chooseRandomPhraseToTrain,
} = app.actions;

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
