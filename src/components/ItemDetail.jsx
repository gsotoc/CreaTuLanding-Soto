import '../App.css';
import Cart from './Cart';
import UsarData from '../hooks/UsarData';

function ItemDetail ({ producto }) {

    const {cartItems, isCartOpen, setIsCartOpen, removeFromCart, increaseCount, decreaseCount, addToCart} = UsarData();

    return <>
        <main className="main-detail-card">
            <article className="card details">
                <header>
                    <h2>{producto.title}</h2>
                </header>
                <section>
                    <div className='details-image'>
                        <img src={producto.images[0]} alt={producto.description} />
                        <p>{producto.description}</p>     
                    </div>
                    <div className='details-info'>
                        <p>Precio: ${producto.price}</p>
                        <p>Descuento: {producto.discountPercentage}%</p>
                        <p>Stock: {producto.stock}</p>
                        <p>Rating del producto: {producto.rating}/5</p>
                        <button className="addToCart" onClick={() => addToCart(producto)}>Agregar al carrito</button>
                    </div>
                </section>
            </article>
        </main>

        {isCartOpen && (
            <Cart 
                items={cartItems}
                onClose={() => setIsCartOpen(false)}
                removeFromCart={removeFromCart}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
            />
        )}
    </>
}

export default ItemDetail;