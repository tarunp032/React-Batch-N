import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "../redux/recipeSlice";

export default function Recipes() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.items);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setRecipes(data.recipes));
      });
  }, [dispatch]);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((r) => (
        <p key={r.id}>{r.name}</p>
      ))}
    </div>
  );
}
