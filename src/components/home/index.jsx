import { useSelector } from "react-redux";

const Home = () => {
  const { data } = useSelector((state) => state.user);
  return (
    <div className="container text-center p-4 items-center">
      <p>{data.nickName}</p>
    </div>
  );
};

export default Home;
