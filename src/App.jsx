import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import './App.css';
import Categorias from './components/pages/Categorias';
import Ofertas from './components/pages/Ofertas'



function App() {
  const [productos, setProductos] = useState([]); //Estado para guardar los productos obtenidos desde el API
  const [isCartOpen, setIsCartOpen] = useState(false); //Estado para saber si el carrito está cerrado o abierto
  const [cartItems, setCartItems] = useState([]); //Estado para agregar los productos del carrito
  const [loading, setLoading] = useState(true); // Estado para indicar que la página está cargando
  const count = 0;  

    useEffect(() => {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => {
          setProductos(data.products);         
          setLoading(false);                  
        })
        .catch((error) => {
          console.error('Error:', error);      
          setLoading(false);                   
        });

    }, []);
  
    
    

 const increaseCount = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseCount = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
    );
    setCartItems(updatedCart);
  };

  
  const addToCart = (producto) => {
    
    if (cartItems.find((item) => item.id === producto.id)) {
      increaseCount(producto.id);
    } else {
      setCartItems([...cartItems, { ...producto, count: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  //Funcionalidad para filtrar con el input, funciona pero debería considerar filtrar por categorías también
  //const [productosFiltrados, setProductosFiltrados] = useState(productos) //Estado para manejar los filtros
  // useEffect(() => {
    //   setProductosFiltrados(productos);
    // }, [productos]);
  // const filtrar = (e) => {


  //   if(!e.target.value){
  //     setProductosFiltrados(productos)
  //   } else {
  //     const datoIngresado = e.target.value.trim("").toLowerCase();
  //     const itemsFiltrados = productos.filter((item)=>item.title.trim("").toLowerCase().includes(datoIngresado));
  //     setProductosFiltrados(itemsFiltrados); 
  //   }
       
  // }


  return (
      <div className="layout">
        <NavBar
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          increaseCount={increaseCount}
          decreaseCount={decreaseCount}
        />
        <div className={`content ${isCartOpen ? 'cart-open' : ''}`}>
          <Routes>
            <Route path="/" element={
              <ItemListContainer 
              addToCart={addToCart} 
              productos={productos} 
              loading={loading} 
              isCartOpen={isCartOpen}
              setIsCartOpen={setIsCartOpen}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              increaseCount={increaseCount}
              decreaseCount={decreaseCount}
             />
             }/>;
            <Route path="/categorias" element={<Categorias />} />;
            <Route path="/ofertas" element={<Ofertas />} />;
          </Routes>
        </div>
        <Footer />
      </div>
  )
}

export default App
