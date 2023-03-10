import { useState } from "react";
import PrintNumber from "./NumberPrint";

const NumberChange = ({ setNumber}) => {

    

    const [number2, setNumber2] = useState(0);
    return (
        <div>
            <PrintNumber/>
            <button onClick={() => setNumber((pre) => ++pre)}>+</button>
            <button onClick={() => setNumber((pre) => --pre)}>-</button>
            <input className = "border border-red-200" type = {"number"}
            onChange={(e) => setNumber2(e.target.value)}
            value = {number2} ></input> 
            <button onClick = {() => setNumber((number) => Number(number2)  + Number(number)) } > add</button>
        </div>

    )
}

export default NumberChange