import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../slice/recipeSlice";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";

export default function Home() {
  const dispatch = useDispatch();
  const { items: recipes, status } = useSelector((state) => state.recipes);

  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [mealTypes, setMealTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");
  const [selectedMealType, setSelectedMealType] = useState("");

  // Local storage se get (default card)
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("viewMode") || "card";
  });

  // Local storage me set
  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  // Redux se fetch only once
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRecipes());
    }
  }, [status, dispatch]);

  // Meal types set + filter apply
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

  if (status === "loading") return <p>Loading recipes...</p>;
  if (status === "failed") return <p>Error fetching recipes.</p>;

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

        <div style={{ marginLeft: "auto" }}>
          <button
            onClick={() => setViewMode(viewMode === "card" ? "table" : "card")}
            className="btn-active"
          >
            {viewMode === "card" ? "Table" : "Cards"}
          </button>
        </div>
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
