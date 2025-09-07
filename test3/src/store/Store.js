import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../slice/recipeSlice";
import userReducer from "../slice/userSlice"; // ✅ Import user slice

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    user: userReducer, // ✅ Add user slice here
  },
});
