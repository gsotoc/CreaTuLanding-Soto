import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false); //Estado para saber si el carrito está cerrado o abierto
  const [cartItems, setCartItems] = useState([]); //Estado para agregar los productos del carrito

  const addToCart = (producto) => {
    setCartItems([...cartItems, producto]);
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
      />

      <ItemListContainer addToCart={addToCart}/>
      <footer>
        <p>Aquí irá el footer de la tienda</p>
      </footer>
    </div>
  )
}

export default App
