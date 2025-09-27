import {configureStore, createSlice} from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name:"data",
  initialState:{
    products: [],
    comments: [],
    showData: false
  },
  reducers:{
    setProducts:(state, action) => {
      state.products = action.payload;
    },
    setComments:(state, action) => {
      state.comments = action.payload;
    },
    toggleShow:(state) => {
      state.showData = !state.showData;
    }
  }
});

export const {setProducts, setComments, toggleShow} = dataSlice.actions;

export const store = configureStore({
  reducer:{
    data: dataSlice.reducer
  }
});