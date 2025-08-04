import { useParams } from 'react-router-dom';
import UsarData from '../hooks/UsarData';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';

function ItemDetailContainer() {
  const { id } = useParams();
  const { obtenerUnProducto, loading, setLoading } = UsarData();
  const [unProducto, setUnProducto] = useState(null);


  useEffect(() => {
    const cargarProducto = async () => {
      setLoading(true);
      const resultado = await obtenerUnProducto(id);
      setUnProducto(resultado);
      setLoading(false);
    };

    cargarProducto();
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!unProducto) return <p>Producto no encontrado.</p>;

  return (
    <ItemDetail producto={unProducto} />
  );
}

export default ItemDetailContainer;
