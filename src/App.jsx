import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'



function App() {
  const [isCartOpen, setIsCartOpen] = useState(false); //Estado para saber si el carrito está cerrado o abierto
  const [cartItems, setCartItems] = useState([]); //Estado para agregar los productos del carrito
  const count = 0;

 const increaseCount = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseCount = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
    );
    setCartItems(updatedCart);
  };

  
  const addToCart = (producto) => {
    
    if (cartItems.find((item) => item.id === producto.id)) {
      increaseCount(producto.id);
    } else {
      setCartItems([...cartItems, { ...producto, count: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };


  return (
    <div className={`layout ${isCartOpen ? 'cart-open' : ''}`}>
      <NavBar
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />

      <ItemListContainer addToCart={addToCart}/>
      <footer>
        <p>Aquí irá el footer de la tienda</p>
      </footer>
    </div>
  )
}

export default App
