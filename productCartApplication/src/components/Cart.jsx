import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../cartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return <p className="empty-cart">Cart is empty</p>;
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <h4>{item.title}</h4>
            <p>${item.price}</p>
          </div>
          <button
            className="btn-remove"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button className="btn-clear" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
      <button className="btn-checkout">Checkout</button>
    </div>
  );
};

export default Cart;
