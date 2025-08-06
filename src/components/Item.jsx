import { Link } from "react-router-dom";
import UsarData from "../hooks/UsarData";
import ItemCount from "./ItemCount";

function Item({ data }) {
  const { addToCart } = UsarData();

  return (
    <article className="card">
      <header><p>{data.title}</p></header>
      <img src={data.images[0]} alt={data.description} />
      <Link to={`/producto/${data.id}`}>Ver detalles</Link>
      <div className="card-info">
        <p>${data.price}</p>
        <ItemCount
          stock={data.stock}
          count={1}
          onAdd={(cantidad) => addToCart({ ...data, count: cantidad })}
        />
      </div>
    </article>
  );
}

export default Item;
