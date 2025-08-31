// src/redux/viewModeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("viewMode") || "card",
};

const viewModeSlice = createSlice({
  name: "viewMode",
  initialState,
  reducers: {
    toggleViewMode: (state) => {
      state.mode = state.mode === "card" ? "table" : "card";
      localStorage.setItem("viewMode", state.mode);
    },
  },
});

export const { toggleViewMode } = viewModeSlice.actions;
export default viewModeSlice.reducer;
