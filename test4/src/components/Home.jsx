import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);
  const viewMode = useSelector((state) => state.viewMode.mode); // 👈 Redux se read

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(setProducts(data));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Home Component</h1>

      {viewMode === "card" ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {items.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid gray",
                padding: "10px",
                margin: "10px",
                width: "200px",
              }}
            >
              <img src={p.image} alt={p.title} width="100" height="100" />
              <h4>{p.title}</h4>
              <p>₹{p.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((p) => (
              <tr key={p.id}>
                <td>
                  <img src={p.image} alt={p.title} width="50" />
                </td>
                <td>{p.title}</td>
                <td>₹{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
