
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import CartErrorBoundary from "./CartErrorBoundary";

export default function App() {
  


  return (
    <div>
      <ProductList  />

      <CartErrorBoundary >
        <ShoppingCart />
      </CartErrorBoundary>
    </div>
  );
}