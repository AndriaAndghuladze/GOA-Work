import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <Navbar />
      <h2 className="heading">Men's Ski & Snowboarding Jackets</h2>
      <ProductList />
    </div>
  );
}

export default App;
