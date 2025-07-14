import { Routes, Route } from 'react-router-dom';
import { useData } from './components/DataContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';
import Categorias from './components/pages/Categorias';
import Ofertas from './components/pages/Ofertas';


function App() {
  const count = 0;  
  const { productos, loading, isCartOpen, setIsCartOpen, cartItems, removeFromCart, increaseCount, decreaseCount, addToCart, setCartItems } = useData();



  return (
      <div className="layout">
        <NavBar
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          increaseCount={increaseCount}
          decreaseCount={decreaseCount}
        />
        <div className={`content ${isCartOpen ? 'cart-open' : ''}`}>
          <Routes>
            <Route path="/" element={
              <ItemListContainer/>
             }/>;
            <Route path="/categorias" element={<Categorias />} />;
            <Route path="/ofertas" element={<Ofertas />} />;
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
        <Footer />
      </div>
  )
}

export default App
