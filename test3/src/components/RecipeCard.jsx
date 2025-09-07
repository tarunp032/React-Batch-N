import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);

  // Mount hone par localStorage se cart check karo
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((c) => c.id === recipe.id);
    if (item) {
      setQuantity(item.quantity || 1);
    }
  }, [recipe.id]);

  // Cart update function
  const updateCart = (newQuantity) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please login to add items to cart!");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (newQuantity === 0) {
      cart = cart.filter((item) => item.id !== recipe.id);
    } else {
      const existingIndex = cart.findIndex((item) => item.id === recipe.id);
      if (existingIndex >= 0) {
        cart[existingIndex].quantity = newQuantity;
      } else {
        cart.push({ ...recipe, quantity: newQuantity });
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setQuantity(newQuantity);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // click hone par detail page pr na jaye
    updateCart(1);
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    updateCart(quantity + 1);
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    updateCart(quantity - 1);
  };

  return (
    <div
      className="recipe-card"
      onClick={() => navigate(`/recipe/${recipe.id}`)}
    >
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p>
        <span className="label">Cuisine:</span> {recipe.cuisine || "N/A"}
      </p>
      <p>
        <span className="label">Meal Type:</span>{" "}
        {recipe.mealType?.length ? recipe.mealType.join(", ") : "N/A"}
      </p>
      <p>
        <span className="label">Rating:</span> ⭐ {recipe.rating ?? "?"} / 5
      </p>
      <p>
        <span className="label">Reviews:</span> {recipe.reviewCount ?? 0}
      </p>

      {quantity === 0 ? (
        <button className="add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      )}
    </div>
  );
}
