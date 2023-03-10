import { useState } from "react";
import { api } from "../../api/api";
import MyTodos from "./MyTodos"
import WriteTodo from "./WriteTodo"

const Me = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1)
    const getTodosApi = async(page) => {
       
        const getTodos = await api("get", `/todos?page=${page}`);
        // if (page === 1)  setTodos([...getTodos.data.myTodos]);
        // else setTodos([...todos, ...getTodos.data.myTodos]);
        return getTodos;
    }
    
    const saveTodo =  async(content) => {
        const response = await api("post", "todos", content);

        if (response.status === 201) {
            await setTodosFunc([])
            for (let i = 1; i< page; i++)  {
                const res = await getTodosApi(i);
                await setTodosFunc(res.data.myTodos)
            }
        }
        return response;
    };
    const setTodosFunc = async (todos) => {
        if (todos.length === 0) setTodos([]);
        else setTodos(pre =>[...pre, ...todos]);
    }
   

    return (
        <div className = "container text-center p-4 items-center">
        {/* 글쓰는거 */}
        <WriteTodo saveTodo = {saveTodo}> </WriteTodo>
        {/* 내리스트 보기 */}
        <MyTodos 
        getTodosApi= {getTodosApi} 
        page = {page} 
        setPage = {setPage} 
        todos = { todos}
        setTodos = {setTodos}></MyTodos>
        </div>

    )
}
export default Me