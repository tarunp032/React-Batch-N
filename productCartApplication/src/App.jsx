import React from "react";
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import ProductDetail from "./components/ProductDetail.jsx";

const App = () => {
  return (
    <div className="app-container">
      <header>
        <h1>Product Cart Application</h1>
        <nav>
          <Link to="/">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;
