import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css';


function ItemListContainer () {
    const [productos, setProductos] = useState([]); //Estado para guardar los productos
    const [loading, setLoading] = useState(true);  //Estado para mostrar carga

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
        <>
            <main>
                {loading ? (
                    <p>Cargando productos...</p>
                ) : (
                    <section className='listContainer'>
                      {productos.map((producto) => (
                        <article className='card' key={producto.id}>
                          <header>
                            <p>{producto.title}</p>
                          </header>
                          <img src={producto.image} alt={producto.description}/>
                          <div>
                            <p>{producto.price}</p>
                          </div>
                        </article>
                      ))}
                    </section>
                )}
            </main>
        </>
    )
}

export default ItemListContainer;