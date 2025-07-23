import { Link } from "react-router-dom";
import UseData from "../hooks/UseData";

function Item ({data}) {
    const { addToCart } = UseData();
    return <>
         <article className="card" key={data.id}>
            <header><p>{data.title}</p></header>
            <img src={data.images[0] } alt={data.description} />
            <Link to={`/producto/${data.id}`}>Ver detalles</Link>
            <div>
            <p>${data.price}</p>
            <button className='addToCart' onClick={() => addToCart(data)}>Agregar al carrito</button>
            </div>
        </article>
    </>
}

export default Item;