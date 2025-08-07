import '../App.css';
import Cart from './Cart';
import UsarData from '../hooks/UsarData';
import ItemCount from './ItemCount';
import { SquareX } from 'lucide-react';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ItemDetail ({ producto }) {

    const {cartItems, isCartOpen, setIsCartOpen, removeFromCart, increaseCount, decreaseCount, addToCart} = UsarData();
    const Navigate = useNavigate();

    const handleCerrar = () => {
        Navigate('/');
    }

    return <>
        <main className="main-detail-card">
            <article className="card details">
                <button onClick={handleCerrar} className='btn-cerrar'><SquareX color="white"/></button>
                <header>
                    <h2>{producto.title}</h2>
                </header>
                <section>
                    <button></button>
                    <div className='details-image'>
                        <img src={producto.images[0]} alt={producto.description} />
                        <p>{producto.description}</p>     
                    </div>
                    <div className='details-info'>
                        <p>Precio: ${producto.price}</p>
                        <p>Descuento: {producto.discountPercentage}%</p>
                        <p>Stock: {producto.stock}</p>
                        <p>Rating del producto: {producto.rating}/5</p>
                        {!cartItems.some(item => item.id === producto.id) && (
                        <ItemCount
                            stock={producto.stock}
                            count={1}
                            onAdd={(cantidad) => addToCart({ ...producto, count: cantidad })}
                        />
                        )}
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