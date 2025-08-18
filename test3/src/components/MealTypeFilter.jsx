import React from "react";

export default function MealTypeFilter({ recipes, setMealType }) {
  const mealTypes = [...new Set(recipes.flatMap((r) => r.mealType))];

  return (
    <div style={{ margin: "10px 0" }}>
      <button onClick={() => setMealType("")}>All</button>
      {mealTypes.map((type, i) => (
        <button key={i} onClick={() => setMealType(type)}>
          {type}
        </button>
      ))}
    </div>
  );
}
