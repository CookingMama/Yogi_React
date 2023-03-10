import { useState } from "react";
import CheckTable from "./CheckTable";
import MakeTodos from "./MakeTodos";
import PlanTable from "./PlanTable";
import SelectTodos from "./SelectTodos";
import Timer from "./Timer";

const Todos = () => {
  console.log("todo");
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  console.log(todos.sort((a, b) => a > b));

  return (
    <div>
      <h1>Todos</h1>
      <MakeTodos setTodos={setTodos} todos={todos} />
      <h2>Timer</h2>
      <Timer todos = {todos}>
      </Timer>
    
      <h2>검색</h2>
      <SelectTodos
        todos = {todos}
        setFilterTodos = {setFilterTodos}>
      </SelectTodos>
      <h2>해야 할 일</h2>
      <PlanTable setTodos={setTodos} 
      filterTodos={filterTodos.length === 0? todos : filterTodos}
      todos = {todos}
      ></PlanTable>
      <h2>한 일</h2>
      <CheckTable 
      filterTodos={filterTodos.length === 0? todos : filterTodos}
      todos = {todos} />
    </div>
  );
};

export default Todos;
