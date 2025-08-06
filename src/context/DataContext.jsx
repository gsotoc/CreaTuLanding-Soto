import { createContext, useState, useReducer } from "react";
import GetData from "../hooks/GetData";
import { cartReducer, cartInitialState } from "../hooks/CartReducer";

export const DataContext = createContext();


export default function DataProvider ({children}) {
    const {
      productos,
      categorias,
      productosFiltrados,
      categoriaSeleccionada,
      setCategoriaSeleccionada,
      obtenerProductosFiltrados,
      loading,
      setLoading,
      paginaActual,
      siguientePagina,
      paginaAnterior,
      noHayMas,
      obtenerUnProducto,
    } = GetData();

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    const cartItems = state.items;


    const addToCart = (producto) => {
      dispatch({ type: "AGREGAR_ITEM", payload: producto });
    };

    const increaseCount = (id) => {
      dispatch({ type: "INCREMENTAR_CUENTA", payload: id });
    };

    const decreaseCount = (id) => {
      dispatch({ type: "DECREMENTAR_CUENTA", payload: id });
    };

    const removeFromCart = (id) => {
      dispatch({ type: "REMOVER_ITEM", payload: id });
    };

    function clearCart() {
      dispatch({ type: "CLEAR_CART" });
    }


    return <DataContext.Provider
          value={{
            productos,
            productosFiltrados,
            categorias,
            loading,
            setLoading,            
            categoriaSeleccionada,
            setCategoriaSeleccionada,
            obtenerProductosFiltrados,
            isCartOpen,
            setIsCartOpen,
            cartItems,
            dispatch,
            addToCart,
            increaseCount,
            decreaseCount,
            removeFromCart,
            clearCart,
            paginaActual,
            siguientePagina,
            paginaAnterior,
            noHayMas,
            obtenerUnProducto,
          }}
        >
          {children}
        </DataContext.Provider>
}





