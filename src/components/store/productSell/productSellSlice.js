import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/api";

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

export const getProcuct = createAsyncThunk("/productSell", async () => {
  const response = await api("get", "/productSell");
  return response.data;
});

const productSellSlice = createSlice({
  name: "productSell",
  initialState,
  reducers: {},
  extraReducers(bulider) {
    bulider
      .addCase(getProcuct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProcuct.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getProcuct.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default productSellSlice.reducer;
