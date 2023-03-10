import { useState } from "react";

const TodosPrac = () => {
  const [state, setState] = useState({
    content: "",
    isChecked: false,
  });

  const [log, setLog] = useState([]);
  const setFunc = (text, check, time) => {
    const data = {
      text: state.content,
      check: state.isChecked,
      time: new Date().toLocaleTimeString(),
    };

    setLog([...log, data]);
  };
  const saveTodos = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };
  const saveClick = () => {
    setFunc(state.content, state.isChecked, state.now);
  };
  const clickCheck = (idx) => {
    setState(log.filter((item, i) => i != idx));
  };

  const deleteClick = (idx) => {
    setLog(log.filter((item, i) => i != idx));
  };

  return (
    <div>
      <h1>Todos prac</h1>
      <input
        type="text"
        placeholder="Search"
        value={state.content}
        onChange={saveTodos}
      />
      <button onClick={saveClick}>Save</button>
      <table>
        <thead>
          <tr>
            <th>index</th>
            <th>content</th>
            <th>time</th>
            <th>check</th>
          </tr>
        </thead>
        <tbody>
          {log.map((el, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{el.text}</td>
              <td>{el.time}</td>
              <td>
                <input
                  type="checkBox"
                  checked={state.isChecked}
                  onChange={() => clickCheck(i)}
                ></input>
              </td>
              <td>
                <button onClick={() => deleteClick(i)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TodosPrac;
