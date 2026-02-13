import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />
      <h3 className="card-title">{product.name}</h3>
      <p className="card-price">{product.price}</p>
      <button className="card-btn">View</button>
    </div>
  );
}

export default ProductCard;
