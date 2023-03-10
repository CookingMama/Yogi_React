import { useState } from "react";
const MakeTodos = ({ setTodos, todos }) => {
  console.log("makeTodos");
  const isPlanView = (el) => {
    return el.delete || el.checked;
  };
  const [contents, setContents] = useState("");
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "contents") setContents(value);
  };
  const todoSave = () => {
    const todo = {
      contents,
      createAt: new Date(),
      checked: false,
      delete: false,
      id: todos.length,
    };
    setTodos([...todos, todo]);
    setContents("");
  };
  return (
    <div>
      <input
        name={"contents"}
        onChange={onChangeHandler}
        value={contents}
      ></input>
      <button onClick={todoSave}>save</button>
    </div>
  );
};
export default MakeTodos;
