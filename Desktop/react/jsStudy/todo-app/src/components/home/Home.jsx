import { useDispatch, useSelector } from "react-redux";
import Counter from "../counter";
import FriendTodos from "./FriendTodos";


const Home = () => {
  const {data} = useSelector((state) => state.user);
  return (
    <div className="container text-center p-4 items-center">
      <h2>{data.name} 님 환영합니다.</h2>
      <div className="m-4">
        <FriendTodos />
      </div>
    </div>
  );
};

export default Home;