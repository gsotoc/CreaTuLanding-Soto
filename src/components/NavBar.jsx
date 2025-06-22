import '../App.css';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

function NavBar({ isCartOpen, setIsCartOpen, cartItems, removeFromCart }) {
  return (
    <>
      <header className='NavBar'>
        <div id="envios">
          <span><p>Envíos GRATIS a todo el país!</p></span>
        </div>
        <nav>
          <div>
            <img src="https://res.cloudinary.com/dwicisnc3/image/upload/v1750030231/logo_ehk61z.png" alt="Logo del ecommerce" />
          </div>
          <div>
            <ul className="navList">
              <li><a href="">Camisas</a></li>
              <li><a href="">Remeras</a></li>
              <li><a href="">Pantalones</a></li>
              <li><a href="">Bermudas</a></li>
              <li><a href="">Calzado</a></li>
              <li><a href="">Ofertas</a></li>
            </ul>
            <div>
              <input type="text" placeholder="Buscar" />
              <button onClick={() => setIsCartOpen(!isCartOpen)}>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <FontAwesomeIcon icon={faRightToBracket} />
            </div>
          </div>
        </nav>
      </header>

      {isCartOpen && (
          <CartWidget
            items={cartItems}
            onClose={() => setIsCartOpen(false)}
            removeFromCart={removeFromCart}
          />

      )}
    </>
  );
}

export default NavBar;
