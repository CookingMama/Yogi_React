const Body = ({ name, age }) => {
  // const name = props.name
  return (
    <div>
      <p> body</p>
      <p> name : {name}</p>
      <p> age : {age}</p>
      <p>{age > 19 ? "성인입니다" : "학생입니다"}</p>
    </div>
  );
};

export default Body;
