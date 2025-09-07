import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    items: [],
  },
  reducers: {
    setRecipes: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;
