import '../App.css';
import { ShoppingCartIcon, LogIn } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import UsarData from '../hooks/UsarData';


function NavBar() {
  const { isCartOpen, setIsCartOpen, cartItems } = UsarData();
  const productosEnCarrito = cartItems.reduce((total, item) => total + item.count, 0);
  
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
            <NavLink className={({isActive})=>(isActive ? "navLink activo" : "navLink")} to="/">Inicio</NavLink>
            <NavLink className={({isActive})=>(isActive ? "navLink activo" : "navLink")} to ="/categorias">Categorias</NavLink>
            <NavLink className={({isActive})=>(isActive ? "navLink activo" : "navLink")} to="/ofertas">Ofertas</NavLink>
            <input type="text" placeholder="Buscar"/>
            <button onClick={() => setIsCartOpen(!isCartOpen)}>
              <ShoppingCartIcon size={22} color="black" />
              <span className="cartCount">{productosEnCarrito}</span>
            </button>
            <button><LogIn/></button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
