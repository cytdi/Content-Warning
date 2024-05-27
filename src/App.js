import "./styles.css";
import Pocetna from "./Components/Pocetna";
import Characters from "./Components/Characters";
import Signup from "./Components/Signup";
import Iskustva from "./Components/Iskustva";
import About from "./Components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/iskustva" element={<Iskustva />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
