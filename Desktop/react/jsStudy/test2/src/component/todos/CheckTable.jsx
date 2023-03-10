import CheckData from "./CheckData";

const CheckTable = ({ todos , filterTodos}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>index</th>
          <th>contents</th>
          <th>createAt</th>
          <th>checkDate</th>
        </tr>
      </thead>
      <tbody>
        {todos
          .filter((el) => el.checked)
          .sort((a, b) => {
            return b.checkDate - a.checkDate;
          })
          .map((el, i) => (
            <CheckData key={i} el={el} i={i} />
          ))}
      </tbody>
    </table>
  );
};

export default CheckTable;
