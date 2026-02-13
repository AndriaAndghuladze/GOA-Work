import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">The North Clone</div>
      <ul className="nav-links">
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Gear</li>
        <li>Sale</li>
      </ul>
    </nav>
  );
}

export default Navbar;
