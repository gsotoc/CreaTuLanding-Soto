import { createContext, useState, useReducer, useEffect } from "react";
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
      paginaActual,
      siguientePagina,
      paginaAnterior,
      noHayMas
    } = GetData();

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, dispatch] = useReducer(cartReducer, cartInitialState);

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

    return <DataContext.Provider
          value={{
            productos,
            productosFiltrados,
            categorias,
            loading,
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
            paginaActual,
            siguientePagina,
            paginaAnterior,
            noHayMas,
          }}
        >
          {children}
        </DataContext.Provider>
}





