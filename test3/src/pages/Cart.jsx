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

  const handleRemove = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px 0",
            }}
          >
          
            <Link to={`/recipe/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name} width="200" />
            </Link>

            <p>{item.cuisine}</p>
            <button onClick={() => handleRemove(idx)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}
