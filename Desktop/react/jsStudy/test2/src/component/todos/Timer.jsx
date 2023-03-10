import { useEffect, useState } from "react";

const Timer = ({todos}) => {
    const [timer, setTimer] = useState(new Date().toLocaleString())
    const [lastMoving, setLastMoving] = useState("");
    useEffect(() => {
        // setTimeout(() => {
        //     alert("time is up!");
        // },1000); 
        const interval = createInterval();
        // setTimeout(() => {
        //     clearInterval(interval);
        // },5000);
    },[]);
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setLastMoving(`${i} 초 전....`)
        },1000);
        return() => clearInterval(interval);
    }, [todos]
    )
    const createInterval = () => {
        return setInterval(() => {
            setTimer(new Date().toLocaleString());
        },1000);
    }
    const interval = createInterval();

    return (
        <div>
            <h2>타이머</h2>
            <b>{timer}</b>
            <b>{lastMoving}</b>
        </div>
    );
};

export default Timer;