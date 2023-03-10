import { Outlet } from "react-router-dom"
import Header from "./Header"

const Template =() => {
    return (
        <div>
            <Header></Header>
            <div className="App">
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Template;