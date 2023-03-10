import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../api/api";
import { clearTodo, getTodos } from "../store/todo/todoSlice";
import Loading from "../utils/Loading";
import FriendTodo from "./FriendTodo";

const FriendTodos = () => {
  const dispatch = useDispatch();
  const { data,status,error,page,maxPage} = useSelector((state) => state.homeTodos);
  console.log(status);

  // const [todos, setTodos] = useState([]);
  // const [loading, setLoading] = useState([]);
  //   const [maxPage, setMaxPage] = useState(1)
  //   const [page, setPage] = useState(1)

    const getFreindTodo = async () => {
        dispatch(getTodos(page));
    }

  // const getFreindTodo = async () => {
  //   const getTodos = await api("get", `/todos/friend?page=${page}`);
    
  //   setTodos([...todos, ...getTodos.data.friendTodos]);
  //   setMaxPage(getTodos.data.totalPage);
  // };
  // useEffect(() => {
  //   moreView();
  // }, []);
  useEffect(() => {
    if (status === "idle") moreView();
  }, [status]);
  useEffect(() => {
    if (status === "failed") dispatch(clearTodo());
  }, []);
  

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //     setPage(page + 1);
  //   }, 2000);
  // }, [todos]);

  const moreView = () => {
    // setLoading(true);
    getFreindTodo();

  }

  return (
    <div className="border border-solid rounded border-spacing-2 p-2">
      {status === "loading" && <Loading />}
      {status === "failed" && <p className="text-red-600"> {error} </p>}
      <>
        <p className="text-red-600">{error}</p>
        <button onClick={() =>  dispatch(clearTodo())}>refresh</button>
      </>
      
      {status === "succeeded"&&
      data.map
        ((el) => (
          <FriendTodo
          key = {el.id} 
          content = {el.content} 
          name = {el.name} 
          createAt = {el.createAt}
          />
          ))}
          {maxPage > page && 
          <button onClick={moreView}>더보기</button>
          }
    </div>
  );
};

export default FriendTodos;