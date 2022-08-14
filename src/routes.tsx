import { BrowserRouter, Route, Routes } from "react-router-dom";
import Championship from "./pages/Championship";
import Home from "./pages/Home";
import Trainning from "./pages/Trainning";

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/championship" element={<Championship />} />
        <Route path="/trainning" element={<Trainning />} />
      </Routes>
    </BrowserRouter>
  );
}
