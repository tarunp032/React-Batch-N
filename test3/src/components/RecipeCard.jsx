import React from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const addToCart = (e) => {
    e.stopPropagation();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please login to add items to cart!");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(recipe);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  };

  return (
    <div
      className="recipe-card"
      onClick={() => navigate(`/recipe/${recipe.id}`)} 
    >
      <img src={recipe.image} alt={recipe.name} />

      <h3>{recipe.name}</h3>
      <p><strong>Cuisine:</strong> {recipe.cuisine || "N/A"}</p>
      <p>
        <strong>Meal Type:</strong>{" "}
        {recipe.mealType?.length ? recipe.mealType.join(", ") : "N/A"}
      </p>
      <p><strong>Rating:</strong> ⭐ {recipe.rating ?? "?"} / 5</p>
      <p><strong>Reviews:</strong> {recipe.reviewCount ?? 0}</p>

      <button className="add-btn" onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
