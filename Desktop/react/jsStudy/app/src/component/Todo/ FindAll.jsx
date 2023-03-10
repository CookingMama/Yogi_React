import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { findAllTodo } from "../../data/todo"

const FindAll = () => {
    const [ todo, setTodos ] = useState([])
    const getAll = () => {
        const todos = findAllTodo();
        setTodos(todos);
    }
    const location = useLocation();
    useEffect(() => {
        getAll();
        
    }, [location])
    return (
        <div>
            <h2> find All</h2>
            {todo.map((t) => (
                <div key = {t.id}>
                    <p>{t.id}</p>
                    <p>{t.title}</p>
                </div>))}
        </div>
    )
}

export default FindAll;