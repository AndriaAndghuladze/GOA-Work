//  react router - ში გამოიყენება neste-ი, outlet-ი, navlink-ი, link-ი
//neste-ის დანიშნულებაა რომ შევცვალოთ გვერდები მაშინ როცა სხვა ნაწილები არ იცვლება
//outlet-ის დანიშნულებაა რომ მშობელ ელემენტში შვილობილი ელემენტი ჰვაჩვენოს
//link-ი გამოიყენება გვერდებს შორის გადასასვლელად
//navlink-ის დანიშნულებაა რომ გვიჩვენოს აქტიური ლინკი


import { BrowserRouter as Router, Routes, Route, NavLink, Outlet } from "react-router-dom";

const NavLinkStyle = ({isActive}) => ({
  color: isActive ? 'purple' : 'gray',
  fontFamily: isActive ? 'cursive' : "Arial"
})



const Layout = () => {
  return (
    <div>
      <nav>
        <nav>
        <NavLink to="/" style={NavLinkStyle}>Home</NavLink>
        <NavLink to="/about" style={NavLinkStyle}>About</NavLink>
        <NavLink to="/about/contact" style={NavLinkStyle}>Contact</NavLink>
      </nav>
      </nav>

      <Outlet />
    </div>
  );
};

const Home = () => {
  return <h1>Home Page</h1>;
};

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Outlet />
    </div>
  );
};

const Contact = () => {
  return <h2>Contact Page</h2>;
};

export default function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          
          <Route path="about" element={<About />}>
            <Route path="contact" element={<Contact />} />
          </Route>

        </Route>

      </Routes>

    </Router>
  );
}