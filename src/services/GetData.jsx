import { useEffect, useState } from "react";

function GetData() {
    const [productos, setProductos] = useState([]); //Estado para guardar los productos obtenidos desde el API
    const [categorias, setCategorias] = useState([]); //Estado para guardar las categorias
    const [loading, setLoading] = useState(true); // Estado para indicar que la página está cargando

    useEffect( ()=>{
        const fetchData = async () => {
            setLoading(true);
            try {
                const [resProductos, resCategorias] = await Promise.all ([
                    fetch('https://dummyjson.com/products'),
                    fetch('https://dummyjson.com/products/categories')
                ])

                if (!resProductos || !resCategorias) {
                    throw new Error("Error al obtener datos");
                }
                const dataProductos = await resProductos.json();
                const dataCategorias = await resCategorias.json();

                setProductos(dataProductos.products || []);
                setCategorias(dataCategorias || []);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            };
        }

        fetchData();
    },[]);

    return {productos, categorias, loading}    
}

export default GetData;