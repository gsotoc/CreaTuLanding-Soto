import Item from "./item";

function ItemList({ items, addToCart }) {
  return (
    <>
      {items.map(producto => (
        <Item key={producto.id} data={producto} addToCart={addToCart} />
      ))}
    </>
  );
}

export default ItemList;