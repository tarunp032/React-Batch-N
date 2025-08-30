import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
