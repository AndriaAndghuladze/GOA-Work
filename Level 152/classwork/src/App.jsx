import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

export default function App() {
  return (
    <Router>
      <nav className="nav">
        <NavLink 
          to="/" 
        >
          Home
        </NavLink>

        <NavLink 
          to="/about"  
        >
          About
        </NavLink>

        <NavLink 
          to="/contact" 
        >
          Contact
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}