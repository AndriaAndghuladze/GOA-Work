export default function ProductList() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Headphones" },
  ];

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>

          <button onClick={() => addToCart(product)}>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}