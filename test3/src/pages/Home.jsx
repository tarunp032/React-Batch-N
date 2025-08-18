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

  // Fetch data from API
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
        setFilteredRecipes(data.recipes);

        // extract mealTypes
        const allMealTypes = new Set();
        data.recipes.forEach((r) =>
          r.mealType.forEach((m) => allMealTypes.add(m))
        );
        setMealTypes([...allMealTypes]);
      });
  }, []);

  // Filter + Search + Sort
  useEffect(() => {
    let filtered = [...recipes];

    if (selectedMealType) {
      filtered = filtered.filter((r) =>
        r.mealType.includes(selectedMealType)
      );
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

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SortDropdown sortType={sortType} setSortType={setSortType} />

      <div style={{ margin: "10px 0" }}>
        <strong>Filter by Meal Type: </strong>
        {mealTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedMealType(type)}
            style={{
              margin: "5px",
              padding: "5px 10px",
              background: selectedMealType === type ? "#ddd" : "#eee",
              border: "1px solid #ccc",
            }}
          >
            {type}
          </button>
        ))}
        <button
          onClick={() => setSelectedMealType("")}
          style={{ margin: "5px", padding: "5px 10px", background: "#eee" }}
        >
          All
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
