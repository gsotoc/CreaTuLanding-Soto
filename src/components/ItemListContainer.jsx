import CartWidget from './Cart';
import ItemList from './ItemList';
import UsarData from '../hooks/UsarData';
import Paginacion from './Paginacion';
import { useLocation } from 'react-router-dom';

function ItemListContainer() {
  const location = useLocation();

  const {
    productos,
    productosFiltrados,
    loading,
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    increaseCount,
    decreaseCount,
    paginaActual,
    siguientePagina,
    paginaAnterior,
  } = UsarData();

  const productosMostrados = location.pathname === '/categorias' ? productosFiltrados : productos;


  return (
    <>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <main>
          
          <Paginacion
            paginaActual={paginaActual}
            siguientePagina={siguientePagina}
            paginaAnterior={paginaAnterior}
          />

          <section className='cards-container'>
            <ItemList productos={productosMostrados} />
          </section>  

          <Paginacion
            paginaActual={paginaActual}
            siguientePagina={siguientePagina}
            paginaAnterior={paginaAnterior}
          />
            
        </main>
      )}

      {isCartOpen && (
        <CartWidget
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          removeFromCart={removeFromCart}
          increaseCount={increaseCount}
          decreaseCount={decreaseCount}
        />
      )}
    </>
  );
}

export default ItemListContainer;
