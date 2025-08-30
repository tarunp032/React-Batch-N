import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="nav-brand">
          <Link to="/" className="brand-name">FoodCart</Link>
          <span className="tagline">Always Ready, Always Fresh</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/ACounter">ACounter</Link>
        </div>
      </div>

      <div className="nav-right">
        {user ? (
          <>
            <span className="welcome">Hi, {user.name}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
