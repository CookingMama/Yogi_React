import { useState } from "react";

const Todos = () => {
  const [contents, setContents] = useState("");
  const [todos, setTodos] = useState([]);
  const onChangeHandler = (e) => {
    console.log(e)
    const { name, value } = e.target;
    if (name === "contents") setContents(value);
  };
  const todoSave = () => {
    const todo = {
      contents,
      createAt: new Date().toLocaleString(),
      checked: false,
      delete: false,
      id: todos.length,
    };
    setTodos([...todos, todo]);
    setContents("");
  };
  const todoDelete = (id) => {
    // delete from todos where id = ?
    // const delTodos = todos.filter((el) => el.id !== id);
    const delTodos = todos.map((el) =>
      el.id === id ? { ...el, delete: true } : el
    );
    console.log(todos);
    setTodos(delTodos);
    console.log(delTodos);
    
  };
  const onChangeCheck = (e, id) => {
    // update todos set checked = true where id = ?;
    const checkTodo = todos.map((el) =>
      el.id === id
        ? {
            ...el,
            checked: true,
            checkDate: new Date().toLocaleString(),
          }
        : el
    );
    setTodos(checkTodo);
  };
  return (
    <div>
      <h1>Todos</h1>
      <div>
        <input
          name={"contents"}
          onChange={onChangeHandler}
          value={contents}
        ></input>
        <button onClick={todoSave}>save</button>
      </div>
      <h2>해야 할 일</h2>
      <table>
        <thead>
          <tr>
            <th>index</th>
            <th>contents</th>
            <th>createAt</th>
            <th>check</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((el) =>
            el.delete || el.checked ? null : (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.contents}</td>
                <td>{el.createAt}</td>
                <td>
                  <input
                    type={"checkbox"}
                    onChange={(e) => onChangeCheck(e, el.id)}
                  />
                </td>
                <td>
                  <button onClick={() => todoDelete(el.id)}>X</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <h2>한 일</h2>
      <table>
        <thead>
          <tr>
            <th>index</th>
            <th>contents</th>
            <th>createAt</th>
            <th>checkDate</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.contents}</td>
              <td>{el.createAt}</td>
              <td>{el.checkDate}</td>
              <td>
                <button>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;