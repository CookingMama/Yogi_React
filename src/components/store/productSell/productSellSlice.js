import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getProduct = createAsyncThunk("/productsell", async () => {
  const response = await api("get", "/productsell");
  return response.data;
});

const productSellSlice = createSlice({
  name: "productSell",
  initialState,
  reducers: {},
  extraReducers(bulider) {
    bulider
      .addCase(getProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
        console.log(action.payload);
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default productSellSlice.reducer;
