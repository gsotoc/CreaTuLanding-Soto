import UsarData from './hooks/UsarData';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import AppRouter from './routes/AppRouter';

function App() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, increaseCount, decreaseCount } = UsarData();



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
          <AppRouter />
        </div>
        <Footer />
      </div>
  )
}

export default App
