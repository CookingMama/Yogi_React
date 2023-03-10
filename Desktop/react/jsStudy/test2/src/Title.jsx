const Title = (props) => {
  console.log(props);
  return (
    <div>
      <h1>title</h1>
      <p>ssss</p>
      {props.children}
    </div>
  );
};

export default Title;
