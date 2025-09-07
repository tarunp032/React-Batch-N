import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../slice/userSlice"; // ✅ Import the action

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // ✅ Get user from Redux

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(setUser(null)); // ✅ Reset user in Redux
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > window.innerHeight / 4 && currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <div className="nav-left">
        <div className="nav-brand">
          <a href="/" className="brand-name" onClick={handleBrandClick}>
            FoodCart
          </a>
          <span className="tagline">Always Ready, Always Fresh</span>
        </div>

        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : undefined)}>
            About
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : undefined)}>
            Cart
          </NavLink>
        </div>
      </div>

      <div className="nav-right">
        {user ? (
          <>
            <span className="welcome">Hi, {user.name}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : undefined)}>
              Login
            </NavLink>
            <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : undefined)}>
              Signup
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
