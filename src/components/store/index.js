import { configureStore } from "@reduxjs/toolkit";
import productSellSlice from "./productSell/productSellSlice";
import userSlice from "./user/userSlice";

export default configureStore({
  reducer: {
    user: userSlice, //name값: export값
    productSell: productSellSlice,
  },
});
