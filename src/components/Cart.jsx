import UsarData from "../hooks/UsarData";
import ItemCount from "./ItemCount";

function Cart({ onClose }) {
  const {
    cartItems,          
    removeFromCart,
    increaseCount,
    decreaseCount
  } = UsarData();

  return (
    <aside>
      <h2>Carrito</h2>

      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <article className="cartItem" key={item.id}>
              <header>
                {item.title}
                <button className="removeItem" onClick={() => removeFromCart(item.id)}>x</button>
              </header>

              <div className="cartItemCount">
                <ItemCount id={item.id} count={item.count || 1} stock={item.stock} />
              </div>

              <div className="cartItemPrice">
                <p>Total: $ {(item.price * item.count).toFixed(2)}</p>
              </div>
            </article>
          ))}
        </div>
      )}

      <div>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </aside>
  );
}

export default Cart;
