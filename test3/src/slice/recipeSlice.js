// src/slice/recipeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// async thunk for fetching recipes
export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  return data.recipes;
});

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    items: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default recipeSlice.reducer;
