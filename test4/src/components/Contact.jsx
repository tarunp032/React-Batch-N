import React from "react";
import { useSelector } from "react-redux";

export default function Contact() {
  const products = useSelector((state) => state.products.items);

  return (
    <div>
      <h2>Contact Page (Product Details)</h2>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)</p>
        </div>
      ))}
    </div>
  );
}
