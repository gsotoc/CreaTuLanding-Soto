function CartWidget({ items, onClose, removeFromCart }) {

  return (
    <aside>
      <h2>Carrito</h2>
      {items.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li className="cartItem" key={item.id}>
              {item.title} - ${item.price} <button className="removeItem" onClick={() => removeFromCart(item.id)}>x</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={onClose}>Cerrar</button>
    </aside>
  );
}

export default CartWidget;
