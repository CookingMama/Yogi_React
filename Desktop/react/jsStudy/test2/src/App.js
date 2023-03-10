import { useState } from "react";
// import "./App.css";
// import Body from "./body";
// import Calculater from "./calculater";
// import Title from "./Title";
// import Todos from "./component/todos/Todos";
// import TodosPrac from "./TodosPrac";
// import CustomColor1 from "./component/style/CustomColor1";
// import BootstrapCustom from "./component/style/BootstrapCustom";
import Count2 from "./component/count/Count2";

function App() {
  return (

    <div>
      <Count2></Count2>
    </div>
    // <div>
      
    //   {/* <title>Todos</title>
    //   <BootstrapCustom></BootstrapCustom>
    //   {/* <CustomColor1></CustomColor1> */}
    //   <Todos></Todos> */}
    // </div>

    // <div>
    //   <Title>Calculater</Title>
    //   <Calculater></Calculater>
    // </div>
  );

  // const name = "park"
  //   const [name, setName] = useState("park");
  //   const [age, setAge] = useState(30);
  //   const changeName = (e) => {
  //     console.log(e);
  //     setNames(age+1)
  //   };
  // const plusAge = () => {
  //   setAge(age + 1);
  // };
  //   return (
  //     <div>
  //       <Title name={name} age={age}></Title>
  //       <Body name={name} age={age}></Body>
  //       <input type={"text"} value={name} onChange={(e) => changeName(e)}></input>
  //       <button onClick={changeName}>change name</button>
  //       <button onClick={plusAge}>plusAge</button>
  //     </div>
  //   );
  // }
}

export default App;
