import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getDetailProduct = createAsyncThunk(
  "/productsell/id",
  async (id) => {
    const response = await api("get", `/productsell/${id}`);
    return response.data;
  }
);

export const putDetailProduct = createAsyncThunk(
  "/productsellput",
  async (id) => {
    const response = await api("put", `/productsell/${id}`);
  }
);

const detailProductSellSlice = createSlice({
  name: "detailProductSell",
  initialState,
  reducers: {},
  extraReducers(bulider) {
    bulider
      .addCase(getDetailProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      })
      .addCase(putDetailProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(putDetailProduct.fulfilled, (state, action) => {
        state.status = "successed";
        console.log(action.payload);
      })
      .addCase(putDetailProduct.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default detailProductSellSlice.reducer;
