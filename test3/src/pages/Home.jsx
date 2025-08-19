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

  // Fetch recipes and extract mealTypes
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

  // Apply filters when search, sort, or mealType changes
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

      {/* Search and Sort */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SortDropdown sortType={sortType} setSortType={setSortType} />

      {/* MealType Dropdown */}
      <div style={{ margin: "10px 0" }}>
        <strong>Meal Type: </strong>
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
      </div>

      {/* Recipe List */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
