import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../pages/ProductCard"; // ✅ Sahi import

export default function Category({ cart, addToCart, removeFromCart }) {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!name) return;
    axios
      .get("https://fakestoreapi.com/products")
      .then((r) => {
        const filtered = r.data.filter(
          (item) => item.category === name
        );
        setProducts(filtered);
      })
      .catch(() => setProducts([]));
  }, [name]);

  return (
    <main className="page container">
      <h2 className="page-title">{name ? name.toUpperCase() : "Category"}</h2>

      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <section className="grid grid-3">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </section>
      )}
    </main>
  );
}
