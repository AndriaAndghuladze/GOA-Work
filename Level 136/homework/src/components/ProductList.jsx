import ProductCard from "./ProductCard";

const products = [
  {
    name: "Ski Jacket 1",
    price: "$249",
    image: "https://via.placeholder.com/200",
  },
  {
    name: "Ski Jacket 2",
    price: "$299",
    image: "https://via.placeholder.com/200",
  },
  {
    name: "Ski Jacket 3",
    price: "$199",
    image: "https://via.placeholder.com/200",
  },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map((p, i) => (
        <ProductCard key={i} product={p} />
      ))}
    </div>
  );
}

export default ProductList;
