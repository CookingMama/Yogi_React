import { configureStore } from "@reduxjs/toolkit";
import auctionBuySlice from "./auctionBuy/auctionBuySlice";
import detailAuctionBuySlice from "./auctionBuy/detailAuctionBuySlice";
import auctionCommentSlice from "./auctionComment/auctionCommentSlice";
import detailAuctionCommentSlice from "./auctionComment/detailAuctionCommentSlice";
import myProductSellSlice from "./myPage/myProductSellSlice";
import detailProductSellSlice from "./productSell/detailProductSellSlice";
import productSellSlice from "./productSell/productSellSlice";
import userSlice from "./user/userSlice";

export default configureStore({
  reducer: {
    user: userSlice, //name값: export값
    productSell: productSellSlice,
    detailProduct: detailProductSellSlice,
    auctionBuy: auctionBuySlice,
    detailAuctionBuy: detailAuctionBuySlice,
    auctionComment: auctionCommentSlice,
    detailAuctionComment: detailAuctionCommentSlice,
    myProductSell: myProductSellSlice,
  },
});
