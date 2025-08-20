import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [mealTypes, setMealTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");
  const [selectedMealType, setSelectedMealType] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
        setFilteredRecipes(data.recipes);

        const allMealTypes = new Set();
        data.recipes.forEach((r) =>
          r.mealType.forEach((m) => allMealTypes.add(m))
        );
        setMealTypes([...allMealTypes]);
      });
  }, []);

  useEffect(() => {
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
  }, [recipes, searchTerm, sortType, selectedMealType]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Recipes</h2>

      {/* Filter Bar */}
      <div className="filter-bar">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <SortDropdown sortType={sortType} setSortType={setSortType} />

        <div className="meal-dropdown">
          <select
            value={selectedMealType}
            onChange={(e) => setSelectedMealType(e.target.value)}
          >
            <option value="">All Meal Types</option>
            {mealTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Recipe Cards */}
      <div className="recipes-grid">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
