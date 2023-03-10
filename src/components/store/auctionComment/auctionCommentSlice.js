import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../api/api";
const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getAuctionComment = createAsyncThunk("/auctionComment", async () => {
  const response = await api("get", "/auction"); //만들다말음
  return response.data;
});

const auctionCommentSlice = createSlice({
  name: "auctionBuy",
  initialState,
  reducers: {},
  extraReducers(bulider) {
    bulider
      .addCase(getAuction.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAuction.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = action.payload;
      })
      .addCase(getAuction.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      });
  },
});

export default auctionCommentSlice.reducer;
