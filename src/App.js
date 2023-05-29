import logo from "./logo.svg";
import "./App.css";
import About from "./Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WhyWebreate from "./Pages/WhyWebreate";
import JobOpenings from "./Pages/JobOpenings";
import WebValues from "./Pages/WebValues";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="career" element={<About />}>
            <Route index element={<WhyWebreate />} />
            <Route path="values" element={<WebValues />} />
            <Route path="openings" element={<JobOpenings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
