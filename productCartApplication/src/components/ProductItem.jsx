import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../cartSlice.js";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const inCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </Link>

      {inCart ? (
        <button
          className="btn-remove"
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="btn-add"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductItem;
