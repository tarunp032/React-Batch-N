import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

function Home() {
  return (
    <div style={styles.homeContainer}>
      <h1>Welcome</h1>
      <div>
        <Link to="/login" style={styles.button}>
          Login
        </Link>
        <Link to="/signup" style={styles.button}>
          Signup
        </Link>
      </div>
    </div>
  );
}

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup onSignup={setUserData} />} />
        <Route path="/login" element={<Login signupData={userData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const styles = {
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    alignitems: "center",
    marginTop: "100px",
  },
  linkBoc: { display: "flex", gap: "20px", marginTop: "20px" },
  button: {
    padding: "10px 20px",
    background: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};
