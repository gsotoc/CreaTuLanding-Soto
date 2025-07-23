import { useState, useEffect } from "react";
import UseData from "../hooks/UseData";
import ItemList from "../components/ItemList";
import CartWidget from "../components/CartWidget";
import '../App.css';

function Categorias() {
  const { categorias, productos, loading, cartItems, isCartOpen, setIsCartOpen, removeFromCart, increaseCount, decreaseCount  } = UseData();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [productosFiltrados, setProductosFiltrados] = useState(); //Estado para filtrar productos



  useEffect(() => {
    if (categoriaSeleccionada === "Todas") {
        setProductosFiltrados([...productos]);
    } else {
        const filtrados = productos.filter(
        (item) =>
            item.category.toLowerCase() === categoriaSeleccionada.toLowerCase()
        );
        setProductosFiltrados(filtrados);
    }
    }, [categoriaSeleccionada, productos]);

  return (
    <div className="categorias-layout">
      <aside className="category-list">
        <h1>Categorías</h1>
        <ul>
            <li
            className= {categoriaSeleccionada === "Todas" ? "category-elemento category-active" : "category-elemento"}
            onClick={() => setCategoriaSeleccionada("Todas")}
            >
            Todas
            </li>
            {categorias.map((categoria, i) => (
            <li
                key={i}
                className= {categoriaSeleccionada === categoria.slug ? "category-elemento category-active" : "category-elemento"}
                onClick={() => setCategoriaSeleccionada(categoria.slug)}
            >
                {categoria.name}
            </li>
            ))}
        </ul>
        </aside>


      <main>
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <section className="cards-container">
            <ItemList productosFiltrados={productosFiltrados}/>
          </section>
        )}
      </main>

      {isCartOpen ? (
          <CartWidget
            items={cartItems}
            onClose={() => setIsCartOpen(false)}
            removeFromCart={removeFromCart}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
          />
        ) : null}
    </div>
  );
}

export default Categorias;
