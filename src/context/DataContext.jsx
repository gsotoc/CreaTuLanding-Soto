import { createContext, useState, useReducer } from "react";
import GetData from "../services/GetData";
import { cartReducer, cartInitialState } from "../hooks/CartReducer";

export const DataContext = createContext();



export default function DataProvider ({children}) {
    const { productos, categorias, loading } = GetData(); //Uso la data traida desde la app en GetData.jsx 
    const [isCartOpen, setIsCartOpen] = useState(false); //Estado para saber si el carrito está cerrado o abierto
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

    
    return <>
        <DataContext.Provider value={{  productos, categorias, loading, isCartOpen, setIsCartOpen, cartItems, dispatch, addToCart, increaseCount, decreaseCount, removeFromCart }}>
        {children}
        </DataContext.Provider>
    </> 
}





