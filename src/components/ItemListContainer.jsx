import { useEffect } from 'react';
import Cart from './Cart';
import ItemList from './ItemList';
import UsarData from '../hooks/UsarData';
import Paginacion from './Paginacion';
import { useLocation } from 'react-router-dom';

function ItemListContainer() {
  const location = useLocation();

  const {
    productos,
    categorias,
    categoriaSeleccionada,
    setCategoriaSeleccionada,
    obtenerProductosFiltrados,
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


  useEffect(() => {
    if (location.pathname === '/') {
      obtenerProductosFiltrados("Todas");
    }
  }, [location.pathname]);

  const handleCategoriaClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
    obtenerProductosFiltrados(categoria);
  };

  const esRutaCategorias = location.pathname === '/categorias';

  return (
    <>
      <main>
        <Paginacion
          paginaActual={paginaActual}
          siguientePagina={siguientePagina}
          paginaAnterior={paginaAnterior}
        />

        <div className="main-content">
          {esRutaCategorias && (
            <aside className="category-list">
              <h1>Categorías</h1>
              <ul>
                {categorias.map((categoria, i) => (
                  <li
                    key={i}
                    className={
                      categoriaSeleccionada === categoria
                        ? "category-elemento category-active"
                        : "category-elemento"
                    }
                    onClick={() => handleCategoriaClick(categoria)}
                  >
                    {categoria}
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <section className="cards-container">
            {loading ? (
              <p>Cargando productos...</p>
            ) : (
              <ItemList productos={productos} />
            )}
          </section>
        </div>

        <Paginacion
          paginaActual={paginaActual}
          siguientePagina={siguientePagina}
          paginaAnterior={paginaAnterior}
        />
      </main>

      {isCartOpen && (
        <Cart
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
