import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleViewMode } from "../redux/viewModeSlice";
import useDarkMode from "../hooks/useDarkMode";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const viewMode = useSelector((state) => state.viewMode.mode);
  const dispatch = useDispatch();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        borderBottom: "1px solid gray",
        marginBottom: "20px",
        backgroundColor: "oklch(86.9% 0.022 252.894)"
      }}
    >
      <div>
        <Link to="/" style={{ marginRight: "5px", marginLeft:"5px" }}>Home</Link>
        {"|"}
        <Link to="/about" style={{ marginRight: "15px", marginLeft:"5px" }}>About</Link>
        {"|"}
        <Link to="/contact" style={{marginLeft:"5px" }}>Contact</Link>
      </div>

      <div>
        <button onClick={toggleDarkMode} style={{ marginRight: "10px" }}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button onClick={() => dispatch(toggleViewMode())}>
          {viewMode === "card" ? "Table View" : "Card View"}
        </button>
      </div>
    </nav>
  );
}
