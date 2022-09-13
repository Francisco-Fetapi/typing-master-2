import { configureStore } from "@reduxjs/toolkit";
import { App, middlewares, sliceCreator } from "../store/App.store";
import { TrainingPhrase } from "../TrainingPhrases";

const trainingPhrases: TrainingPhrase[] = [new TrainingPhrase("Ola Mundo.")];

const initialState: App = {
  darkMode: false,
  typedWords: 0,
  currentLevel: 0,
  timer: null,
  timerPaused: true,
  backdrop: {
    title: "",
    message: "",
    open: false,
  },
  points: 0,
  phraseTraining: trainingPhrases[0],
};

const app = sliceCreator(initialState);

export const store = configureStore({
  reducer: {
    app: app.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewares),
});

export default store;
