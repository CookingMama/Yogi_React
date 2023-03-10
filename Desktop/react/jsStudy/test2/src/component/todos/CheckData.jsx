const CheckData = ({ el, i }) => {
  return (
    <tr key={el.id}>
      <td>{i + 1}</td>
      <td>{el.contents}</td>
      <td>{el.createAt.toLocaleString()}</td>
      <td>{el.checkDate.toLocaleString()}</td>
    </tr>
  );
};

export default CheckData;
