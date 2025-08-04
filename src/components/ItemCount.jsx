import UsarData from "../hooks/UsarData";

function ItemCount({ id, count, stock }) {
  const { increaseCount, decreaseCount } = UsarData();

  return (
    <>
      <button onClick={() => decreaseCount(id)} disabled={count <= 1}>-</button>
      <p>{count}</p>
      <button onClick={() => increaseCount(id)} disabled={count >= stock}>+</button>
    </>
  );
}

export default ItemCount;
