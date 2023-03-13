import { useSelector } from "react-redux";
import ViewMyProductSell from "./ViewMyProductSell";

const MyPage = () => {
  const { data } = useSelector((state) => state.user);
  return (
    <div className="container text-center p-4 items-center text-2xl font-bold">
      <p>{data.nickName}님의 마이페이지</p>
      <ViewMyProductSell />
    </div>
  );
};

export default MyPage;
