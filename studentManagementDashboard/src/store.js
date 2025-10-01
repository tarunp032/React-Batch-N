import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentSlice.js";

const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

export default store;
