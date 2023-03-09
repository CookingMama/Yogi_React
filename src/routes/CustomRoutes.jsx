import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Main from "../components/main";
import Productsell from "../components/productSell";
import PostSell from "../components/productSell/PostSell";
import Login from "../components/user/Login";
import SignUp from "../components/user/SignUp";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="productsell" element={<Productsell />} />
          <Route path="productsell/post" element={<PostSell />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
