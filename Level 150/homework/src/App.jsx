
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

export default function App() {
  return (
    <div>
      <Nav /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
