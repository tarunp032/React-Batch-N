import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <main className="page container">
      <h2>{product.title}</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <img 
          src={product.image} 
          alt={product.title} 
          style={{ width: "250px", height: "250px", objectFit: "contain" }} 
        />
        <div>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ₹ {product.price}</p>
          <p><strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)</p>
          <p>{product.description}</p>
        </div>
      </div>
    </main>
  );
}
