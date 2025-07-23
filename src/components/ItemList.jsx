import Item from "./Item";
import { useLocation } from "react-router-dom";
import UseData from "../hooks/UseData";

function ItemList( { productosFiltrados }) {
  const location = useLocation();
  const { productos } = UseData();

  const datosAMostrar = location.pathname === '/' ? productos : productosFiltrados;

  return (
    <>
      {datosAMostrar.map(producto => (
        <Item key={producto.id} data={producto} />
      ))}
    </>
  );
}

export default ItemList;