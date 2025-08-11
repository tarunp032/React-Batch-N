import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  cart,
  addToCart,
  removeFromCart,
}) {
  const navigate = useNavigate();
  const inCart = cart.find((c) => c.id === product.id);

  const fallbackUrl = "https://placehold.co/200x150?text=No+Image";

  return (
    <article className="card">
      <div
        className="card-img-wrap"
        onClick={() => navigate(`/product/${product.id}`)}
        style={{ cursor: "pointer" }}
      >
        <img
          src={product?.image}
          alt={product.title}
          className="card-img"
          loading="lazy"
          onError={(e) => {
            if (e.target.src !== fallbackUrl) {
              e.target.src = fallbackUrl;
            }
          }}
        />
      </div>

      <div className="card-body">
        <h6
          className="card-title"
          title={product.title}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.title}
        </h6>

        <div className="card-price">₹ {product.price}</div>

        <div className="card-actions">
          {inCart ? (
            <div className="qty-controls">
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(product.id)}
              >
                -
              </button>
              <span className="qty">{inCart.qty}</span>
              <button
                className="btn btn-success"
                onClick={() => addToCart(product)}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
