import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idel",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.status = "successfull";
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.status = "failed";
      state.error = "something went wrong";
    });
  },
});

export default productSlice.reducer;

export const getProducts = createAsyncThunk("getProducts", async () => {
  const data = await fetch("https://dummyjson.com/products");
  const json = await data.json();
  return json;
});