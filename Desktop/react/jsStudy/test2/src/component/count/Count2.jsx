import { useCallback, useEffect, useMemo, useState } from "react";

const Count2 = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  // const [count, setCount] = useState(0);
  
  let num = 0;
  const getPrimeNumber = () => {
        for (let i = 2; i <= number; i ++) {
            let isPrime = true;
            for (let j = 2; j < i; j ++) {
                if (i % j == 0) { //not prime
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                num++;
            }
        }
        // return setCount(num);
        return num;
    
  }
  const count = useMemo(()=> {
    return getPrimeNumber(number); 
  } ,[number])

  useEffect(() => {
    getPrimeNumber();
  },[number]);

  
  const addCallback = useCallback(() => {
    console.log("callback");
    console.log(number);
    return add(number);
  }, [])
  const add = (number) => {
    const a = 20;
  const b = 10;
    return a+b+number;

  }


  return (
    <div style={{ marginTop: "5em" }}>
      <div>
        <input
          type={"number"}
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        ></input>
        <button onClick={() => setNumber((pre) => ++pre)}>+</button>
        <input
          type={"number"}
          onChange={(e) => setNumber2(e.target.value)}
          value={number2}
        ></input>
        <button onClick={() => setNumber2((pre) => ++pre)}>+</button>
      </div>
      <b>{`${number} 안에 소수는 ${count}개 있습니다`}</b>
      <br></br>
      <b>{`addCallback ${addCallback()}`}</b>
    </div>
  );
};

export default Count2;