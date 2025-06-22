import { useEffect, useState } from 'react';

function ItemListContainer({ addToCart }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch('https://fakestoreapi.com/products');
        const datos = await respuesta.json();
        setProductos(datos);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };
    obtenerProductos();
  }, []);

  return (
    <main>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <section className="listContainer">
          {productos.map((producto) => (
            <article className="card" key={producto.id}>
              <header><p>{producto.title}</p></header>
              <img src={producto.image} alt={producto.description} />
              <div>
                <p>${producto.price}</p>
                <button className='addToCart' onClick={() => addToCart(producto)}>Agregar al carrito</button>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default ItemListContainer;
