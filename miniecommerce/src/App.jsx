import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";
import Footer from "./components/Footer";

export default function App() {
  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === productId);
      if (!found) return prev;
      if (found.qty === 1) return prev.filter((p) => p.id !== productId);
      return prev.map((p) =>
        p.id === productId ? { ...p, qty: p.qty - 1 } : p
      );
    });
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const location = useLocation();

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
        <Route path="/category/:name" element={<Category cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
        <Route path="/cart" element={<Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      {!location.pathname.startsWith("/product/") && <Footer />}
    </>
  );
}
