import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

const WriteTodo = ({saveTodo}) => {
    const [todos, setTodos] = useState({
        content: "",
    })
    const [newTodo, setNewTodo] = useState([])

    
    const navigate = useNavigate();
    const onSubmit = async(e) => {
        e.preventDefault();
        const response = await saveTodo(todos)      
        setTodos({content: ""})
        
        
        // if (response?.status === 201) {
        //     alert("등록완료")
        //   navigate("/me");
        // }
    }
    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setTodos({ ...todos, [name] : value
        })
        setNewTodo({...newTodo, [name] : value })
      }



    return (
        <div>
            <h1>Write Todo</h1>
            <form onSubmit={onSubmit}>
            <input 
            id="content"
            name="content"
            placeholder="enter content"
            onChange={onChangeHandler}
            value={todos.content}
            
            ></input>
            <button
                type="submit"
                className=" rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              > Submit</button>
            </form>
        </div>
    )
}
export default WriteTodo;