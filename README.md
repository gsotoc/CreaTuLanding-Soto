1- Estoy usando el componente fetch data para hacer fetch tanto a 
'https://dummyjson.com/products' como a 'https://dummyjson.com/products/categories' para ello, estoy usando 2 estados
para guardar la información, tuve el problema que estos fetchs devuelven cosas distintas, uno devuelve un array de categorias y el de productos devuelve un objeto. Por eso usé el "Array.isarray()" en el else if


2- En DataContext tengo toda la información del contecto además de las funciones para agregar al carrito y manejar toda la funcionalidad del carrito

3- Para solucionar el problema de que luego de filtrar en categories en inicio se mostraba solo lo de esa categoría, estoy usando renderizado condicional y pasando productos en inicio ya que de momento quiero ver todos los productos y en categories tengo un filtro y paso productos filtrados 
