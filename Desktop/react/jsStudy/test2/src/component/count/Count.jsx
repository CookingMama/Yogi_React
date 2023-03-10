import { useState } from "react";
import { Button } from "reactstrap";
const Count = () => {
    const [requestNumber,setRequestNumber] = useState(0);
    const [primeCount, setPrimeCount] = useState(0);
    let num = 0;
    const getPrimeNumber = () => {
          for (let i = 2; i <= requestNumber; i ++) {
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
          return setPrimeCount(num);
      
    }
    useEffect(() => {
        getPrimeNumber();
      },[number]);
    

    return (
        <div style={{ marginTop: "5em" }}>
      <div>
        <input
          type={"number"}
          onChange={(e) => setRequestNumber(e.target.value)}
          value={number}
        ></input>
        <button onClick={() => setRequestNumber((pre) => ++pre)}>+</button>
      </div>
      <b>{`${requestNumber} 안에 소수는 ${primeCount}개 있습니다`}</b>
    </div>
    )
}

export default Count;