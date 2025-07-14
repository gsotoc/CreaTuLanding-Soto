import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DataContext = createContext();

function DataProvider ({children}) {
    const location = useLocation();
    const [productos, setProductos] = useState([]); //Estado para guardar los productos obtenidos desde el API
    const [categorias, setCategorias] = useState([]); //Estado para guardar las categorias
    const [loading, setLoading] = useState(true); // Estado para indicar que la página está cargando
    const [isCartOpen, setIsCartOpen] = useState(false); //Estado para saber si el carrito está cerrado o abierto
    const [cartItems, setCartItems] = useState([]); //Estado para agregar los productos del carrito
    const [productosFiltrados, setProductosFiltrados] = useState(productos);
    

    const url = location.pathname === '/categorias'
    ? 'https://dummyjson.com/products/categories'
    : 'https://dummyjson.com/products';

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if (data.products){
                setProductos(data.products);  
                setLoading(false);
            } else if(Array.isArray(data)) {    
                setCategorias(data);
                setLoading(false);
            }
                            
        })
        .catch((error) => {
          console.error('Error:', error);      
          setLoading(false);                   
        })
        .finally(() => setLoading(false));
    }, [url]);

    const addToCart = (producto) => {
    
      if (cartItems.find((item) => item.id === producto.id)) {
        increaseCount(producto.id);
      } else {
        setCartItems([...cartItems, { ...producto, count: 1 }]);
      }
    };

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

    const removeFromCart = (id) => {
      setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const insertDetails = (e) => {
      console.log(e.target);
    };


    return <>
        <DataContext.Provider value={{  productos, categorias, loading, isCartOpen, setIsCartOpen, cartItems, setCartItems, addToCart, increaseCount, decreaseCount, removeFromCart, productosFiltrados, setProductosFiltrados }}>
        {children}
        </DataContext.Provider>
    </> 
}

export function useData() {
  return useContext(DataContext);
}


export default DataProvider;