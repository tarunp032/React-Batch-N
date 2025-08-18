import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleAddToCart = () => {
    if (!user) {
      alert("Please login first!");
      navigate("/login");
    } else {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(recipe);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Added to cart!");
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} width="200" />
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Meal Type: {recipe.mealType.join(", ")}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
