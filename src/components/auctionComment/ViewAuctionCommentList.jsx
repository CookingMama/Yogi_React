import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import { getAuction } from "../store/auctionBuy/auctionBuySlice";
import { getProduct } from "../store/productSell/productSellSlice";

const ViewAuctionCommentList = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.auctionBuy);
    //만들다말음
  useEffect(() => {
    dispatch(getAuction());
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          진행중인 역경매
        </h2>

        <div className="mt-6 xl:gap-x-8">
          {data?.map((Auction) => (
            <div
              key={Auction.id}
              className="group relative border border-red-300 rounded-lg"
            >
              <div className="mt-2 flex justify-between m-2">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/auctionbuy/${Auction.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {Auction.buyerNickName}님
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {Auction.category}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {Auction.minCondition}급 이상
                  </p>
                </div>
                <div>
                  <p className="text-white">-</p>{" "}
                  {/* 꼼수 : 글씨를 하얗게 해서 한줄띄움 */}
                  <p className="text-base font-semibold text-gray-900">
                    {Auction.title}
                  </p>
                </div>
                <div>
                  <p className="text-white">-</p>{" "}
                  {/* 꼼수 : 글씨를 하얗게 해서 한줄띄움 */}
                  <p className="text-sm font-medium text-gray-900">
                    {Auction.highWishPrice}원
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {Auction.timeout.slice(0, 4)}년{" "}
                    {Auction.timeout.slice(5, 7)}월
                    {Auction.timeout.slice(8, 10)}일{" "}
                    {Auction.timeout.slice(11, 13)}시
                    {Auction.timeout.slice(14, 16)}분까지
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewAuctionCommentList;