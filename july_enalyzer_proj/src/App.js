import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./components/Homepage/MainPage";
import { DistibutionComp } from "./components/DistributionComp";

function App() {
  return (
    <div className="project-title">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/Distribution" element={<DistibutionComp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
