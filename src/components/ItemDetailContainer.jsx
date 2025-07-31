import { useParams } from 'react-router-dom';
import UsarData from '../hooks/UsarData';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const { productos } = UsarData();

  const producto = productos.find((p) => p.id === parseInt(id));

  return (
    <ItemDetail producto={producto}/>
  );
}

export default ItemDetailContainer;