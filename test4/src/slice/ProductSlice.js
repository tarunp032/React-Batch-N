import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("product/fetch", async () => {
  const response = await axios.get(`https://fakestoreapi.com/products`);
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Error message from rejectWithValue
      });
  },
});

export default productSlice.reducer;
