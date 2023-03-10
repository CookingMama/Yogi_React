const PlanData = ({ el, onChangeCheck, i, todoDelete }) => {
  return (
    <tr key={el.id}>
      <td>{i + 1}</td>
      <td>{el.contents}</td>
      <td>{el.createAt.toLocaleString()}</td>
      <td>
        <input type={"checkbox"} onChange={(e) => onChangeCheck(e, el.id)} />
      </td>
      <td>
        <button onClick={() => todoDelete(el.id)}>X</button>
      </td>
    </tr>
  );
};

export default PlanData;
