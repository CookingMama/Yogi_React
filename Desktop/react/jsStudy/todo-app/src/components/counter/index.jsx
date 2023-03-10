import { useState } from "react";
import NumberChange from "./NumberChange"
import PrintNumber from "./NumberPrint"


const Counter = () => {
    const [number, setNumber] = useState(0);

    
    return (
        <div>
            <NumberChange/>
        </div>
    )
    
}

export default Counter