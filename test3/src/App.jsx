import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import RecipeDetail from "./pages/RecipeDetail"; 
// import ACounter from "./pages/ACounter";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/ACounter" element={<ACounter />} /> */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/recipes" element={<Home />} /> 
      </Routes>
    </Router>
  );
}
