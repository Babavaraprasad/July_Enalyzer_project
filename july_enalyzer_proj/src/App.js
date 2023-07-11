import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./components/Homepage/MainPage";
import { DistibutionComp } from "./components/distribution/DistributionComp";

function App() {
  return (
    <div className="container">
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
