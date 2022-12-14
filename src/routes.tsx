import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrainingContextProvider from "./contexts/TrainingContextProvider";
import Championship from "./pages/Championship";
import Home from "./pages/Home";
// import LevelsList from "./pages/LevelsList";
import Training from "./pages/Training";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/championship" element={<Championship />} />
        <Route
          path="/training"
          element={
            <TrainingContextProvider>
              <Training />
            </TrainingContextProvider>
          }
        />
        {/* <Route path="/levels" element={<LevelsList />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
