import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import UsarData from '../hooks/UsarData';


function NavBar() {
  const { isCartOpen, setIsCartOpen } = UsarData();

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
          <div className='navElements'>
            <Link to="/">Inicio</Link>
            <Link to ="/categorias">Categorias</Link>
            <Link to="/ofertas">Ofertas</Link>
            <input type="text" placeholder="Buscar"/>
            <button onClick={() => setIsCartOpen(!isCartOpen)}>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <FontAwesomeIcon icon={faRightToBracket} />
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
