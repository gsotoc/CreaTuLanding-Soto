import { useState, useEffect } from "react";
import { collection, getDocs, query, limit, startAfter, where } from "firebase/firestore";
import { db } from "../services/firebase";

export default function GetData() {
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [loading, setLoading] = useState(true);
  const [paginaActual, setPaginaActual] = useState(0);
  const [documentosPorPagina, setDocumentosPorPagina] = useState([]);
  const [noHayMas, setNoHayMas] = useState(false);
  const productosPorPagina = 30;

  useEffect(() => {
    obtenerCategorias();
    obtenerProductosFiltrados("Todas");
  }, []);

  const obtenerCategorias = async () => {
    try {
      const collectionRef = collection(db, "categorias");
      const querySnapshot = await getDocs(collectionRef);
      const categoriasDocs = querySnapshot.docs.map((doc) => doc.data().nombre);
      const categoriasFormateadas = categoriasDocs.map(cat => 
        cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase()
      );
      setCategorias(["Todas", ...categoriasFormateadas]);
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
    }
  };

  const obtenerProductosFiltrados = async (categoria) => {
    setLoading(true);
    setCategoriaSeleccionada(categoria);
    setPaginaActual(0);
    setDocumentosPorPagina([]);
    setNoHayMas(false);

    try {
      const collectionRef = collection(db, "productos");

      if (categoria === "Todas") {
        const pedido = query(collectionRef, limit(productosPorPagina));
        const querySnapshot = await getDocs(pedido);
        const docs = querySnapshot.docs;

        const productos = docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductosFiltrados(productos);
        setNoHayMas(docs.length < productosPorPagina);

        if (docs.length > 0) {
          setDocumentosPorPagina([docs[docs.length - 1]]);
        }
      } else {
        const pedido = query(collectionRef, where("category", "==", categoria.toLowerCase()));
        const querySnapshot = await getDocs(pedido);
        const docs = querySnapshot.docs;

        const productos = docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductosFiltrados(productos);
      }

    } catch (error) {
      console.error("Error al filtrar por categoría:", error);
    } finally {
      setLoading(false);
    }
  };

  const siguientePagina = async () => {
    if (noHayMas || categoriaSeleccionada !== "Todas") return;

    try {
      setLoading(true);
      const lastDoc = documentosPorPagina[paginaActual];
      if (!lastDoc) return;

      const collectionRef = collection(db, "productos");
      const pedido = query(collectionRef, startAfter(lastDoc), limit(productosPorPagina));
      const querySnapshot = await getDocs(pedido);
      const docs = querySnapshot.docs;

      const nuevosProductos = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProductosFiltrados(nuevosProductos);
      setPaginaActual(prev => prev + 1);
      setNoHayMas(docs.length < productosPorPagina);

      setDocumentosPorPagina(prev => {
        const copia = [...prev];
        copia[paginaActual + 1] = docs[docs.length - 1];
        return copia;
      });
    } catch (error) {
      console.error("Error al obtener más productos:", error);
    } finally {
      setLoading(false);
    }
  };

  const paginaAnterior = async () => {
    if (paginaActual === 0 || categoriaSeleccionada !== "Todas") return;

    try {
      setLoading(true);
      const pagina = paginaActual - 1;
      const lastDoc = documentosPorPagina[pagina - 1];
      const collectionRef = collection(db, "productos");

      let pedido;
      if (pagina === 0) {
        pedido = query(collectionRef, limit(productosPorPagina));
      } else {
        pedido = query(collectionRef, startAfter(lastDoc), limit(productosPorPagina));
      }

      const querySnapshot = await getDocs(pedido);
      const docs = querySnapshot.docs;

      const nuevosProductos = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProductosFiltrados(nuevosProductos);
      setPaginaActual(pagina);
      setNoHayMas(false);
    } catch (error) {
      console.error("Error al retroceder página:", error);
    } finally {
      setLoading(false);
    }
  };

  const obtenerUnProducto = async (id) => {
    try {
      const collectionRef = collection(db, "productos");
      const pedido = query(collectionRef, where("id", "==", parseInt(id)));
      const querySnapshot = await getDocs(pedido);
      if (querySnapshot.empty) {
        throw new Error("Producto no encontrado");
      } else {
       const producto = querySnapshot.docs[0].data();
       return producto;
      }
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    }
  }

  return {
    productos: productosFiltrados,
    categorias,
    categoriaSeleccionada,
    setCategoriaSeleccionada,
    loading,
    setLoading,
    paginaActual,
    siguientePagina,
    paginaAnterior,
    obtenerProductosFiltrados,
    obtenerUnProducto,
    noHayMas
  };
}
