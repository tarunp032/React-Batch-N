import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function Home({ cart, addToCart, removeFromCart }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((r) => setProducts(r.data))
      .catch(() => setProducts([]));
  }, []);

  const list = products
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .slice() 
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <main className="page container">
      <div className="top-row">
        <div className="search-wrap">
          <input
            className="search-input"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="sort-wrap">
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>
      </div>

      <h2 className="page-title">All Products</h2>

      <section className="grid grid-4">
        {list.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </section>
    </main>
  );
}
