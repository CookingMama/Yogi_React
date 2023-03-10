import {BrowserRouter, Route, Routes} from "react-router-dom"
import CounterRedux from "../components/counterRedux";
import Home from "../components/home/Home";
import Main from "../components/main";
import Me from "../components/me/Me";
import Login from "../components/user/Login";
import SignUp from "../components/user/SignUp";

const CustomRoutes = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Main/>}>
                <Route path = "" element = {<Home/>}/>
                <Route path = "login" element = {<Login/>}/>
                <Route path = "signup" element = {<SignUp/>}/>
                <Route path = "me" element = {<Me/>}/>
                <Route path = "counter" element = {<CounterRedux/>}/>
            </Route>
                
        </Routes>
    </BrowserRouter>
   )
}

export default CustomRoutes;