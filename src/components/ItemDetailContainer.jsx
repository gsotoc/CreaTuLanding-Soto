import { useParams } from 'react-router-dom';
import { useData } from './DataContext';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { id } = useParams();
  const { productos } = useData();

  const producto = productos.find((p) => p.id === parseInt(id));

  return (
    <ItemDetail producto={producto}/>
  );
}

export default ItemDetailContainer;