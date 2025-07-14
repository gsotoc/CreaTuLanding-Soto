Requisitos del proyecto

1- Implementación de React Router y creación de las distintas rutas necesarias para mostrar las vistas de nuestra app.

2- División entre componentes contenedores encargados de manejar el estado y los efectos (ItemListContainer, ItemDetailContainer) y componentes de presentación, encargados del apartado visual (estructura de elementos, estilos, classNames, etc.)

3- Los componentes contenedores harán un llamado asíncrono a "Promises" que resuelvan luego de un breve retardo los datos solicitados (listado de productos, un producto)

4 -Uso del método Array.map() y la prop "key" para listar todos los productos en el catálogo.
(Array.map y la prop key fue usado en ItemList.jsx)

5 - Uso del hook useParams() de react router para leer el segmento actual de la URL y mostrar el contenido correspondiente.
(useParams() lo usé en ItemDetailContainer)


Notas para mi!!
1- Estoy usando el componente fetch data para hacer fetch tanto a 
'https://dummyjson.com/products' como a 'https://dummyjson.com/products/categories' para ello, estoy usando 2 estados
para guardar la información, tuve el problema que estos fetchs devuelven cosas distintas, uno devuelve un array de categorias y el de productos devuelve un objeto. Por eso usé el "Array.isarray()" en el else if


2- En DataContext tengo toda la información del contecto además de las funciones para agregar al carrito y manejar toda la funcionalidad del carrito

3- Para solucionar el problema de que luego de filtrar en categories en inicio se mostraba solo lo de esa categoría, estoy usando renderizado condicional y pasando productos en inicio ya que de momento quiero ver todos los productos y en categories tengo un filtro y paso productos filtrados 
