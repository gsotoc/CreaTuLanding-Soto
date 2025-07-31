import UsarData from "../hooks/UsarData";
import ItemList from "../components/ItemList";
import CartWidget from "../components/Cart";
import "../App.css";

function Categorias() {
  const {
    productos,
    productosFiltrados,
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
  } = UsarData();

  const handleCategoriaClick = (categoria) => {
    setCategoriaSeleccionada(categoria);
    obtenerProductosFiltrados(categoria);
  };

  return (
    <div className="categorias-layout">
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

      <main>
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <section className="cards-container">
            <ItemList productos={productosAMostrar} />
          </section>
        )}
      </main>

      {isCartOpen && (
        <CartWidget
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          removeFromCart={removeFromCart}
          increaseCount={increaseCount}
          decreaseCount={decreaseCount}
        />
      )}
    </div>
  );
}

export default Categorias;
