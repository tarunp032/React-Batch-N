import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, []);

  let newArray = [];
  for (let i = 0; i < products.length; i++) {
    newArray.push(
      <div
        key={products[i].id}
        style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
      >
        <h3>{products[i].title}</h3>
        <img src={products[i].image} alt={products[i].title} width="100" />
        <p>Category: {products[i].category}</p>
        <p>Price: ${products[i].price}</p>
        <p>Description: {products[i].description}</p>
        <p>Rating: {products[i].rating.rate} ({products[i].rating.count} reviews)</p>

      </div>
    );
  }

  return (
    <div>
      <h1>Products List</h1>
      {newArray}
    </div>
  );
};

export default Products;
