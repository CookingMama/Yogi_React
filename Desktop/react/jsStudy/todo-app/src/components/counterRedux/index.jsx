import { useState } from "react";
import NumberChangeRedux from "./NumberChangeRedux"
import PrintNumberRedux from "./NumberPrintRedux";


const CounterRedux = () => {
    const [number, setNumber] = useState(0);

    
    return (
        <div>
            <PrintNumberRedux/>
            <NumberChangeRedux/>
        </div>
    )
    
}

export default CounterRedux