import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import ViewAuctionCommentList from "../auctionComment/ViewAuctionCommentList";
import { getDetailAuctionBuy } from "../store/auctionBuy/detailAuctionBuySlice";
import { getDetailProduct } from "../store/productSell/detailProductSellSlice";
import { getProduct } from "../store/productSell/productSellSlice";

const ViewDetailAuctionBuy = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.detailAuctionBuy); //만들어야함
  //   const location = useLocation();
  const param = useParams();
  useEffect(() => {
    dispatch(getDetailAuctionBuy(param.id));
  }, []);

  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="-space-y-px rounded-md shadow-sm">
            <div className="p-1">
              <h1 className="p-1">제목</h1>
              <div
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border 
            border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
            focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                {data.title}
              </div>
            </div>
            <div className="p-1">
              <h1 className="p-1">내용</h1>
              <div
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border 
            border-gray-300 px-3 py-20 text-gray-900 placeholder-gray-500 focus:z-10 
            focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                {data.content}
              </div>
            </div>
            <div className="p-1">
              <h1 className="p-1">카테고리</h1>
              <div
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border 
            border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
            focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                {data.category}
              </div>
            </div>
            <div className="p-1">
              <h1 className="p-1">최소상태 등급</h1>
              <div
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border 
            border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
            focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                {data.minCondition}
              </div>
            </div>
            <div className="p-1 relative">
              <h1 className="p-1">희망가격</h1>
              <div className="relative w-3/4">
                <div
                  className="py-2 px-3 pl-9 pr-16 block w-full border border-gray-300 rounded-md text-sm focus:z-10 
              focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  {data.lowWishPrice}
                </div>
              </div>
              <div className="relative w-3/4">
                <div
                  className="py-2 px-3 pl-9 pr-16 block w-full border border-gray-300 rounded-md text-sm focus:z-10 
              focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  {data.highWishPrice}
                </div>
              </div>
            </div>
          </div>
          <div className="p-1">
            <h1 className="p-1">마감기간</h1>
            <div
              className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border 
            border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
            focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {data.timeout}
            </div>
          </div>
        </div>
      </div>
      <div className="justify-end">
        <Link
          to="post"
          className="flex text-xl font-semibold leading-6 text-red-400 justify-end mr-10"
        >
          <button
            className="group relative flex w-1/5 justify-center rounded-md border border-transparent 
          bg-slate-900 py-2 px-4 text-sm font-semibold text-red-400 hover:bg-indigo-700 focus:outline-none 
            focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-10"
          >
            상품 제시
          </button>
        </Link>
      </div>
      <ViewAuctionCommentList />
    </div>
  );
};

export default ViewDetailAuctionBuy;
