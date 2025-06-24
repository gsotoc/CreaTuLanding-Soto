function CartWidget({ items, onClose, removeFromCart, increaseCount, decreaseCount }) {
  return (
    <aside>
      <h2>Carrito</h2>
      {items.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {items.map((item) => (
            <article className="cartItem" key={item.id}>
              <header>
                {item.title}
                <button className="removeItem" onClick={() => removeFromCart(item.id)}>x</button>
              </header>
              <div className="cartItemCount">
                <button onClick={() => decreaseCount(item.id)} disabled={item.count <= 1}>-</button>
                <p>{item.count}</p>
                <button onClick={() => increaseCount(item.id)}>+</button>
              </div>
              <div className="cartItemPrice">
                <p>Total: $ {(item.price * item.count).toFixed(2)}</p>
              </div>  
            </article>
          ))}
        </div>
      )}
      <button onClick={onClose}>Cerrar</button>
    </aside>
  );
}

export default CartWidget;
