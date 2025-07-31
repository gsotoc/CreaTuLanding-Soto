export default function Paginacion({ paginaActual, siguientePagina, paginaAnterior }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2rem 0' }}>
      <button onClick={paginaAnterior} >Anterior</button>
      <span>Página {paginaActual + 1}</span>
      <button onClick={siguientePagina}>Siguiente</button>
    </div>
  );
}
