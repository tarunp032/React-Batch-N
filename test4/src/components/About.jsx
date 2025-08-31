import React from "react";
import { useSelector } from "react-redux";

export default function About() {
  const products = useSelector((state) => state.products.items);

  return (
    <div>
      <h2>About Page (Product Images + Names)</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ width: "150px", textAlign: "center" }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
