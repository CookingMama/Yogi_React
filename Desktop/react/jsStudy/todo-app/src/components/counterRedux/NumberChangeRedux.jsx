import { useState } from "react";
import { decrement, increment, incrementByAmount } from "../store/counter/counterSlice";
import { useDispatch } from 'react-redux'
import PrintNumberRedux from "./NumberPrintRedux";

const NumberChangeRedux = () => {
    const [number2, setNumber2] = useState(0);
    const dispatch = useDispatch()
    return (
        <div>
            {/* <PrintNumberRedux/> */}
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <input className = "border border-red-200" type = {"number"}
            onChange={(e) => setNumber2(e.target.value)}
            value = {number2} ></input> 
            <button onClick = {() => dispatch(incrementByAmount (Number(number2)))} > add</button>
        </div>

    )
}

export default NumberChangeRedux