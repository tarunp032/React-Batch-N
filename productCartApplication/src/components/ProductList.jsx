import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem.jsx";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(""); // for filter
  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter products by name
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  // Sort products by price
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0; // no sorting
  });

  return (
    <div>
      <div className="filter-sort">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="product-list">
        {sortedProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
        {sortedProducts.length === 0 && <p>No products found.</p>}
      </div>
    </div>
  );
};

export default ProductList;
