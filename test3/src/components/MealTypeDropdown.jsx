import React from "react";

export default function MealTypeDropdown({ mealType, setMealType }) {
  return (
    <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
      <option value="">All Meal Types</option>
      <option value="Dinner">Dinner</option>
      <option value="Lunch">Lunch</option>
      <option value="Snack">Snack</option>
      <option value="Dessert">Dessert</option>
      <option value="Side Dish">Side Dish</option>
      <option value="Appetizer">Appetizer</option>
      <option value="Snacks">Snacks</option>
      <option value="Breakfast">Breakfast</option>
      <option value="Beverage">Beverage</option>
    </select>
  );
}
