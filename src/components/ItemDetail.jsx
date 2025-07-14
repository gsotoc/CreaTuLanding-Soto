import '../App.css';

function ItemDetail ({ producto }) {

    return <>
        <main className="main-detail-card">
            <article className="card details">
            <h2>{producto.title}</h2>
            <img src={producto.images[0]} alt={producto.description} />
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>
            <p>Descuento: {producto.discountPercentage}%</p>
            <p>Rating del producto: {producto.rating}/5</p>
            <button className='addToCart'>Agregar al carrito</button>
            </article>
        </main>
    </>
}

export default ItemDetail;