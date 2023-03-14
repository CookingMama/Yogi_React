import { useSelector } from "react-redux";

const Home = () => {
  const { data } = useSelector((state) => state.user);
  return (
    <div className="container text-center p-4 items-center">
      <p className="text-2xl font-bold bg-red-400 text-white rounded-md">내가 원하는 물건! 요기요기!!</p>
      <div className="flex justify-center mt-5 rounded-md">
        <img className="w-1/4 h-1/5" src="https://firebasestorage.googleapis.com/v0/b/yogi-350dc.appspot.com/o/mainImg.png?alt=media" />
        <img className="w-1/4 h-1/5" src="https://firebasestorage.googleapis.com/v0/b/yogi-350dc.appspot.com/o/mainImg.png?alt=media" />
        <img className="w-1/4 h-1/5" src="https://firebasestorage.googleapis.com/v0/b/yogi-350dc.appspot.com/o/mainImg.png?alt=media" />
      </div>
    </div>
  );
};

export default Home;
