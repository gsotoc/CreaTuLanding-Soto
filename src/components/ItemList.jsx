import Item from "./item";
import { useLocation } from "react-router-dom";
import { useData } from "./DataContext";

function ItemList( ) {
  const location = useLocation();
  const { productos, productosFiltrados} = useData();

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