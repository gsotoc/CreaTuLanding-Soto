import UsarData from "../hooks/UsarData";
import ItemCount from "./ItemCount";
import CartTotal from "../hooks/CartTotal";
import { Link } from "react-router-dom";
import { SquareX } from "lucide-react";

function Cart({ onClose }) {
  const {
    cartItems,          
    removeFromCart,
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
                <button className="btn-cerrar" onClick={() => removeFromCart(item.id)}><SquareX/></button>
              </header>

              <div className="cartItemCount">
                <ItemCount id={item.id} count={item.count} stock={item.stock} />
              </div>

              <div className="cartItemPrice">
                <p>Subtotal: $ {(item.price * item.count).toFixed(2)}</p>
              </div>
            </article>
          ))}
        </div>
      )}

      <div>
          <h2><span>Total: $ <CartTotal /></span></h2>
      </div>

      <div className="cartActions">
        <button className="closeCart" onClick={onClose}>Cerrar</button>
        <button className="comprar">
          <Link to="/checkout">Comprar</Link>
        </button>
      </div>
    </aside>
  );
}

export default Cart;
