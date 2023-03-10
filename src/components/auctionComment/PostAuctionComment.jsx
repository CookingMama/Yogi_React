import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiFileComment } from "../../api/api";

const PostAuctionComment = () => {
  const [auctionComment, setAuctionComment] = useState({
    title: "",
    content: "",
    pCondition: null,
    biddingPrice: 0,
    file: null,
    nameFile: "",
  });
  const param = useParams();
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = //
      await apiFileComment(
        "post",
        `/auction/${param.id}/comment`,
        auctionComment
      ); //
    // .catch((e) => {
    //   alert(e.response.data);
    // });
    if (response?.status === 201) {
      navigate(`/auctionbuy/${param.id}`);
    }
  };

  const setFileName = (e) => {
    setAuctionComment({
      ...auctionComment,
      nameFile: e.target.files[0].name,
      file: e.target.files[0],
    });
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setAuctionComment({ ...auctionComment, [name]: value });
  };
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div className="p-1">
              <h1 className="p-1">제목</h1>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border 
                border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
                focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="OOO 싸게 팝니다! 얼마 안 썼어요~~!"
                onChange={onChangeHandler}
              />
            </div>
            <div className="p-1 relative">
              <h1 className="p-1">가격</h1>
              <div className="relative">
                <input
                  type="number"
                  id="biddingPrice"
                  name="biddingPrice"
                  className="py-2 px-3 pl-9 pr-16 block w-full border border-gray-300 rounded-md text-sm focus:z-10 
                  focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="1,000"
                  onChange={onChangeHandler}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                  <span className="text-gray-500">￦</span>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
                  <span className="text-gray-500">원</span>
                </div>
              </div>
            </div>
            <div className="p-1">
              <h1 className="p-1">상태</h1>
              <select
                id="pCondition"
                name="pCondition"
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border 
                border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
                focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                onChange={onChangeHandler}
              >
                <option>-- 눌러서 선택해주세요! --</option>
                <option>S</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
              </select>
            </div>
            <div className="p-1">
              <h1 className="p-1">사진</h1>
              <input
                id="file"
                name="file"
                type="file"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border 
                border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
                focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
                file:mr-4 file:py-2 file:px-4 file:rounded-full 
                file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
                onChange={setFileName}
              />
            </div>
            <div className="p-1">
              <h1 className="p-1">내용</h1>
              <input
                id="content"
                name="content"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border 
                border-gray-300 px-3 py-20 text-gray-900 placeholder-gray-500 focus:z-10 
                focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="진짜 아끼던 상품이에요! 생활기스 조금 있어요.."
                onChange={onChangeHandler}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="group relative flex w-1/2 justify-center rounded-md border border-transparent 
                bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none 
                focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-5"
              >
                등록
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostAuctionComment;
