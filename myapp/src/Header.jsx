import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{display: "flex", gap: "20px", fontWeight: "900" }}>
      <Link to={"/"} className="nav-link">Home</Link>
      <Link to={"/about_react"} className="nav-link">About</Link>
      <Link to={"/contact_us"} className="nav-link">Contact</Link>
      <Link to={"/counter"} className="nav-link">Counter</Link>
      <Link to={"/signup"} className="nav-link">Signup</Link>
      <Link to={"/login"} className="nav-link">Login</Link>
      <Link to={"/fetchdata"} className="nav-link">ApiData</Link>
    </div>
  );
};

export default Header;
