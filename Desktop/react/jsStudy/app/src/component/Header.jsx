import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [count,setCount] = useState(0)
    return (
    <div>
        <Link to = {"/"}>home</Link >
        <Link to = {"/about"}>about</Link >
        <Link to = {"/me"}>me</Link >
        <Link to = {"/todo"}>todo</Link >
        <button onClick={()=>setCount(count+1)}>+1</button>
            <h1>{count}</h1>
    </div>
    )
}

export default Header;