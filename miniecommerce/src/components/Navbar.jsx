import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Navbar({ cartCount }) {
  const [categories, setCategories] = useState([]);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then((r) => setCategories(r.data))
      .catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const half = window.innerHeight * 0.5;
      if (y > lastY.current && y > half) {
        setVisible(false);
      } else if (y < lastY.current) {
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${visible ? "" : "hidden"}`}>
      <div className="nav-left">
        <Link to="/" className="nav-logo">My Shop</Link>
      </div>

      <nav className="nav-center" aria-label="categories">
        {categories.map((cat) => (
          <NavLink
            key={cat}
            to={`/category/${encodeURIComponent(cat)}`}
            className={({ isActive }) =>
              "nav-link " + (isActive ? "active-cat" : "")
            }
          >
            {cat}
          </NavLink>
        ))}
      </nav>

      <div className="nav-right">
        <Link to="/cart" className="cart-btn" title="View cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-text">Cart</span>
          <span className="cart-badge">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
}
