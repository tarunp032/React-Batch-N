import React from "react";

export default function RecipeCard({ recipe }) {
  const addToCart = () => {
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
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Meal Type: {recipe.mealType.join(", ")}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
