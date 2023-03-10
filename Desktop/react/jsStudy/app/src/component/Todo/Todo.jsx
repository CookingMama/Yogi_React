import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { insertTodo } from "../../data/todo";

const Todo =() => {
    const [title, setTitle] = useState("");
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        const id = insertTodo(title)
        setTitle("");
        navigate(`/todo`);
    }
    
    return (
        <div>
            <form onSubmit = {onSubmit}>
                <input 
                name = {"title"}
                onChange = {e => setTitle(e.target.value)}
                value = {title}
                ></input>
                <input type = {"submit"}></input>
            </form>
            <Outlet/>
        </div>
    )
}

export default Todo;