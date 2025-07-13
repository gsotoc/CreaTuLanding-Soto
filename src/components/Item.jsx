function Item ({data, addToCart}) {
    return <>
         <article className="card" key={data.id}>
            <header><p>{data.title}</p></header>
            <img src={data.images[0] } alt={data.description} />
            <div>
            <p>${data.price}</p>
            <button className='addToCart' onClick={() => addToCart(data)}>Agregar al carrito</button>
            </div>
        </article>
    </>
}

export default Item;