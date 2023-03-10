import { useEffect } from "react"
import { useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { findAllTodo, findById } from "../../data/todo"

const FindById = (props) => {
    console.log(props)
    const [ todo, setTodos ] = useState([])
    const location = useLocation()
    const param = useParams()
    console.log(location, param.id)
    useEffect( () => {
        const byId = findById(Number(param.id)) 
        setTodos(byId)

    })
   
    return (
        <div>
            <h2> findById</h2>
            {todo && (
                <div >
                    <p>{todo.id}</p>
                    <p>{todo.title}</p>
                </div>)}
        </div>
    )
}

export default FindById;