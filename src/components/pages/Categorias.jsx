import { useState, useEffect } from "react";
import { useData } from "../DataContext";
import ItemList from "../ItemList";
import '../../App.css';

function Categorias() {
  const { categorias, productos, loading, productosFiltrados, setProductosFiltrados } = useData();
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");


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
            <ItemList productos={productosFiltrados}/>
          </section>
        )}
      </main>
    </div>
  );
}

export default Categorias;
