import {Input} from "reactstrap";
import { useEffect, useState } from "react";

const SelectTodos = ({todos, setFilterTodos}) => {
    const [key,setKey] = useState("");
    const onChangeHandler = (e) => {
        const {value} = e.target;
        setKey(value);
    }
    useEffect(() => {
        const filterTodos = //
        todos.filter((el) => el.contents.includes(key));
        if (key === "") { 
            setFilterTodos([]);
        } else {
        setFilterTodos(filterTodos);
        }       
    },[key,  todos] );   
    return (
  <div style={{width: "30%"}}>
    <Input value={key} onChange={onChangeHandler}/>
  </div>

    
    )
}

export default SelectTodos;