import React from "react";

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>
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
              margin: "10px",
            }}
          >
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} width="200" />
          </div>
        ))
      )}
    </div>
  );
}
