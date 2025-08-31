import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/CounterSlice";
import recipeReducer from "../slice/recipeSlice"; // ✅ new slice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recipes: recipeReducer, // ✅ add here
  },
});
