import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => console.error("Error fetching recipe:", err));
  }, [id]);

  if (!recipe) return <p className="loading">Loading...</p>;

  return (
    <div className="recipe-detail">
      <div className="recipe-detail-top">
        <img src={recipe.image} alt={recipe.name} />

        <div className="recipe-info">
          <h2>{recipe.name}</h2>
          <p><strong>Cuisine:</strong> {recipe.cuisine || "N/A"}</p>
          <p><strong>Meal Type:</strong> {recipe.mealType?.join(", ") || "N/A"}</p>
          <p><strong>Rating:</strong> ⭐ {recipe.rating ?? "?"} / 5</p>
          <p><strong>Reviews:</strong> {recipe.reviewCount ?? 0}</p>
          <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes ?? "-"} mins</p>
          <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes ?? "-"} mins</p>
          <p><strong>Servings:</strong> {recipe.servings ?? "-"}</p>
          <p><strong>Difficulty:</strong> {recipe.difficulty || "N/A"}</p>
          <p><strong>Calories/Serving:</strong> {recipe.caloriesPerServing ?? "-"} cal</p>
          <p><strong>Tags:</strong> {recipe.tags?.length ? recipe.tags.join(", ") : "N/A"}</p>
        </div>
      </div>

      <div className="recipe-sections">
        <div>
          <h3>Ingredients</h3>
          {recipe.ingredients?.length ? (
            <ul>
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          ) : (
            <p>No ingredients listed</p>
          )}
        </div>

        <div>
          <h3>Instructions</h3>
          {recipe.instructions?.length ? (
            <ol>
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          ) : (
            <p>No instructions available</p>
          )}
        </div>
      </div>
    </div>
  );
}
