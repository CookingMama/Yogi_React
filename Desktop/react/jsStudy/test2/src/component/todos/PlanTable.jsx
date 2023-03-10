import PlanData from "./PlanData";

const PlanTable = ({ todos, setTodos ,filterTodos}) => {
  const isPlanView = (el) => {
    return el.delete || el.checked;
  };
  
  const todoDelete = (id) => {
    // delete from todos where id = ?
    // const delTodos = todos.filter((el) => el.id !== id);
    const delTodos = todos.map((el) =>
      el.id === id ? { ...el, delete: true } : el
    );
    setTodos(delTodos);
  };
  const onChangeCheck = (e, id) => {
    // update todos set checked = true where id = ?;
    const checkTodo = todos.map((el) =>
      el.id === id
        ? {
            ...el,
            checked: true,
            checkDate: new Date(),
          }
        : el
    );
    setTodos(checkTodo);
  };
  return (
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
        {filterTodos
          .filter((el) => !isPlanView(el))
          .map(
            (el, i) =>
              <PlanData 
              el = {el}
              onChangeCheck = {onChangeCheck}
              todoDelete = {todoDelete}
              i = {i}
              />
              )
          }
      </tbody>
    </table>
  );
};

export default PlanTable;
