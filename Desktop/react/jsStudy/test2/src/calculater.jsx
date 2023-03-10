import { useState } from "react";

const Calculator = () => {
  const [state, setState] = useState({
    num: 0,
    num2: 0,
  });
  const [log, setLog] = useState([]);
  const setFunc = (target, result, operate) => {
    const data = {
      target: state.num2,
      result,
      operate,
      before: state.num,
    };
    setLog([...log, data]);
    setState({ ...state, num: result });
  };
  const plusNum = () => {
    const { num, num2 } = state;
    setFunc(num2, num + Number(num2), "+");
  };
  const minusNum = () => {
    const { num, num2 } = state;
    // setState({ ...state, num: num - Number(num2) });
    setFunc(num2, num - Number(num2), "-");
  };
  const productNum = () => {
    const { num, num2 } = state;
    // setState({ ...state, num: num * Number(num2) });
    setFunc(num2, num * Number(num2), "*");
  };
  const divisionNum = () => {
    const { num, num2 } = state;
    // setState({ ...state, num: num / Number(num2) });
    setFunc(num2, num / Number(num2), "/");
  };

  const setInput = (e) => {
    setState({ ...state, num2: e.target.value });
  };
  return (
    <div>
      <h1>num : {state.num}</h1>
      <h2>{state.num % 2 == 0 ? "짝수입니다" : "홀수입니다"}</h2>
      <input
        type={"number"}
        value={state.num2}
        onChange={(e) => setInput(e)}
      ></input>
      <button onClick={plusNum}>+</button>
      <button onClick={minusNum}>-</button>
      <button onClick={productNum}>x</button>
      <button onClick={divisionNum}>%</button>
      <div>
        <table>
          <thead>
            <tr>
              <th>index</th>
              <th>before</th>
              <th>target</th>
              <th>result</th>
              <th>oper</th>
            </tr>
          </thead>
          <tbody>
            {log.map((el, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{el.before}</td>
                <td>{el.target}</td>
                <td>{el.result}</td>
                <td>{el.operate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
