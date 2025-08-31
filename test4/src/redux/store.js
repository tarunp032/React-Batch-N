import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import viewModeReducer from "./viewModeSlice"; // 👈 new slice import

const store = configureStore({
  reducer: {
    products: productReducer,
    viewMode: viewModeReducer, // 👈 add here
  },
});

export default store;
