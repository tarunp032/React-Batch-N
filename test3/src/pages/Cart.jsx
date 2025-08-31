import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (index, newQuantity) => {
    let updatedCart = [...cart];

    if (newQuantity === 0) {
      updatedCart = updatedCart.filter((_, i) => i !== index);
    } else {
      updatedCart[index].quantity = newQuantity;
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Total items count
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, idx) => (
            <div key={idx} className="cart-item">
              <Link to={`/recipe/${item.id}`}>
                <img src={item.image} alt={item.name} />
              </Link>

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>{item.cuisine}</p>

                {/* Quantity Controls */}
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(idx, (item.quantity || 1) - 1)}>
                    -
                  </button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => updateQuantity(idx, (item.quantity || 1) + 1)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* ✅ Cart Summary Section */}
          <div className="cart-summary">
            <h3>🛒 Cart Summary</h3>
            <p><strong>Total Items:</strong> {totalItems}</p>
            <ul>
              {cart.map((item, idx) => (
                <li key={idx}>
                  {item.name} × {item.quantity || 1}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
