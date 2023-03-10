import { useEffect, useState } from "react";
import { api } from "../../api/api";
import Loading from "../utils/Loading";
import MyTodo from "./MyTodo";

const MyTodos = ( {todos, getTodosApi, page, setPage,setTodos})  => {
    
    const [loading, setLoading] = useState([]);
    const [maxPage, setMaxPage] = useState(1)
    
    const getMyTodo = async () => {
        const getTodos = await getTodosApi(page)
        setTodos([...todos, ...getTodos.data.myTodos]);
        setMaxPage(getTodos.data.totalPage);
        setPage(page + 1);
      };

      useEffect(() => {
        moreView();
      }, []);
    
      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
          
        }, 2000);
      }, [todos]);
    
      const moreView = () => {
        setLoading(true);
        getMyTodo();
    
      }
    

      return (
        <div className="border border-solid rounded border-spacing-2 p-2">
          {loading ? <Loading /> : 
          todos.map
            ((el) => (
              <MyTodo
              key = {el.id} 
              content = {el.content} 
              checked = {el.checked} 
              createAt = {el.createAt}
              />
              ))}
              {maxPage > page && 
              <button onClick={moreView}>더보기</button>
              }
        </div>
      );
    }

export default MyTodos;