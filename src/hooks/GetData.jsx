import { useState, useEffect } from "react";
import { collection, getDocs, query, limit, startAfter, where } from "firebase/firestore";
import { db } from "../services/firebase";

export default function GetData() {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [loading, setLoading] = useState(true);
  const [paginaActual, setPaginaActual] = useState(0);
  const [documentosPorPagina, setDocumentosPorPagina] = useState([]);
  const [noHayMas, setNoHayMas] = useState(false);
  const productosPorPagina = 30;

  // Carga inicial
  useEffect(() => {
    obtenerCategorias();
    obtenerDatos(0);
  }, []);

  const obtenerDatos = async (pagina) => {
    try {
      setLoading(true);
      const collectionRef = collection(db, "productos");

      let pedido;
      if (pagina === 0) {
        pedido = query(collectionRef, limit(productosPorPagina));
      } else {
        const start = documentosPorPagina[pagina - 1];
        if (!start) return;
        pedido = query(collectionRef, startAfter(start), limit(productosPorPagina));
      }

      const querySnapshot = await getDocs(pedido);
      const docs = querySnapshot.docs;
      const nuevosProductos = docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      setProductos(nuevosProductos);
      setPaginaActual(pagina);
      setNoHayMas(docs.length < productosPorPagina);

      // Guardar el último documento para paginar
      if (!documentosPorPagina[pagina] && docs.length > 0) {
        setDocumentosPorPagina((prev) => {
          const copia = [...prev];
          copia[pagina] = docs[docs.length - 1];
          return copia;
        });
      }
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    } finally {
      setLoading(false);
    }
  };

  const obtenerCategorias = async () => {
    try {
      const collectionRef = collection(db, "categorias");
      const querySnapshot = await getDocs(collectionRef);
      const categoriasDocs = querySnapshot.docs.map((doc) => doc.data().nombre);
      const categoriasFormateadas = categoriasDocs.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase());
      setCategorias(["Todas", ...categoriasFormateadas]);
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
    }
  };

  const obtenerProductosFiltrados = async (categoria) => {
    setCategoriaSeleccionada(categoria);
    setPaginaActual(0);
    setDocumentosPorPagina([]);
    setNoHayMas(false);

    if (categoria === "Todas") {
      obtenerDatos(0);
      return;
    }

    try {
      setLoading(true);
      const collectionRef = collection(db, "productos");
      const pedido = query(collectionRef, where("category", "==", categoria.toLowerCase()));
      const querySnapshot = await getDocs(pedido);
      const docs = querySnapshot.docs;
      const productosPorCategoria = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductosFiltrados(productosPorCategoria);
    } catch (error) {
      console.error("Error al filtrar por categoría:", error);
    } finally {
      setLoading(false);
    }
  };

  const siguientePagina = () => {
    if (!noHayMas && categoriaSeleccionada === "Todas") {
      obtenerDatos(paginaActual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaActual > 0 && categoriaSeleccionada === "Todas") {
      obtenerDatos(paginaActual - 1);
    }
  };

  return {
    productos,
    productosFiltrados,
    categorias,
    categoriaSeleccionada,
    setCategoriaSeleccionada,
    loading,
    paginaActual,
    siguientePagina,
    paginaAnterior,
    obtenerProductosFiltrados,
    noHayMas
  };
}
