import { useParams } from 'react-router-dom';
import UseData from '../hooks/UseData';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const { productos } = UseData();

  const producto = productos.find((p) => p.id === parseInt(id));

  return (
    <ItemDetail producto={producto}/>
  );
}

export default ItemDetailContainer;