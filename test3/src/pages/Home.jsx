import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRecipes } from "../slice/recipeSlice";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import useViewMode from "../hooks/useViewMode";
import useDarkMode from "../hooks/useDarkMode"; 

export default function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.items);

  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [mealTypes, setMealTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");
  const [selectedMealType, setSelectedMealType] = useState("");

  const { viewMode, toggleViewMode } = useViewMode();
  const { darkMode, toggleDarkMode } = useDarkMode(); 

  useEffect(() => {
    if (recipes.length === 0) {
      fetch("https://dummyjson.com/recipes")
        .then((res) => res.json())
        .then((data) => {
          dispatch(setRecipes(data.recipes));
        });
    }
  }, [recipes, dispatch]);

  useEffect(() => {
    if (recipes.length > 0) {
      let filtered = [...recipes];
      if (selectedMealType) {
        filtered = filtered.filter((r) => r.mealType.includes(selectedMealType));
      }
      if (searchTerm) {
        filtered = filtered.filter((r) =>
          r.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      if (sortType === "name-asc") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortType === "name-desc") {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
      }
      setFilteredRecipes(filtered);

      const allMealTypes = new Set();
      recipes.forEach((r) => r.mealType.forEach((m) => allMealTypes.add(m)));
      setMealTypes([...allMealTypes]);
    }
  }, [recipes, searchTerm, sortType, selectedMealType]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Recipes</h2>

      <div className="filter-bar">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SortDropdown sortType={sortType} setSortType={setSortType} />
        <select
          value={selectedMealType}
          onChange={(e) => setSelectedMealType(e.target.value)}
        >
          <option value="">All</option>
          {mealTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        
        <button onClick={toggleViewMode} className="btn-active">
          {viewMode === "card" ? "Table" : "Cards"}
        </button>

        <button onClick={toggleDarkMode} className="btn-active" style={{ marginLeft: "10px" }}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {viewMode === "card" ? (
        <div className="recipes-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div style={{ overflowX: "auto", marginTop: 20 }}>
          <table className="recipe-table" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "10px" }}>#</th>
                <th style={{ textAlign: "left", padding: "10px" }}>Name</th>
                <th style={{ textAlign: "left", padding: "10px" }}>Cuisine</th>
                <th style={{ textAlign: "left", padding: "10px" }}>Meal Type</th>
                <th style={{ textAlign: "left", padding: "10px" }}>Rating</th>
                <th style={{ textAlign: "left", padding: "10px" }}>Reviews</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecipes.map((r, i) => (
                <tr key={r.id} style={{ borderTop: "1px solid #eee" }}>
                  <td style={{ padding: "10px" }}>{i + 1}</td>
                  <td style={{ padding: "10px" }}>{r.name}</td>
                  <td style={{ padding: "10px" }}>{r.cuisine}</td>
                  <td style={{ padding: "10px" }}>{r.mealType?.join(", ")}</td>
                  <td style={{ padding: "10px" }}>⭐ {r.rating}</td>
                  <td style={{ padding: "10px" }}>{r.reviewCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
