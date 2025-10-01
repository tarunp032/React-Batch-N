import { createSlice } from "@reduxjs/toolkit";

const savedStudents = JSON.parse(localStorage.getItem("students")) || [];

const studentSlice = createSlice({
  name: "students",
  initialState: {
    list: savedStudents,  
    editing: null,
  },
  reducers: {
    addStudent: (state, action) => {
      state.list.push({ id: Date.now(), ...action.payload });
      localStorage.setItem("students", JSON.stringify(state.list)); 
    },
    deleteStudent: (state, action) => {
      state.list = state.list.filter((s) => s.id !== action.payload);
      localStorage.setItem("students", JSON.stringify(state.list)); 
    },
    startEdit: (state, action) => {
      state.editing = action.payload;
    },
    updateStudent: (state, action) => {
      const index = state.list.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
      state.editing = null;
      localStorage.setItem("students", JSON.stringify(state.list)); 
    },
    cancelEdit: (state) => {
      state.editing = null;
    },
  },
});

export const { addStudent, deleteStudent, startEdit, updateStudent, cancelEdit } =
  studentSlice.actions;

export default studentSlice.reducer;
