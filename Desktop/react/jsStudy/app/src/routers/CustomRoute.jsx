import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "../component/About";
import Home from "../component/Home";
import Me from "../component/Me";
import Todo from "../component/Todo/Todo";
import Template from "../component/Template";
import FindAll from "../component/Todo/ FindAll";
import FindById from "../component/Todo/FindById";

const CustomRoute = () => {
    return <BrowserRouter>
        <Routes>
            <Route element = {<Template/>}>
                <Route path={"/"} element = {<Home></Home>}></Route>
                <Route path={"/about"} element = {<About></About>}></Route>
                <Route path={"/me"} element = {<Me></Me>}/>
                <Route path={"/todo"} element = {<Todo></Todo>}>
                    <Route path={"/todo"} element = {<FindAll></FindAll>}></Route>
                    <Route path={":id"} element = {<FindById></FindById>}></Route>
                </Route>
                
            </Route>
        </Routes>
    </BrowserRouter>
}

export default CustomRoute;