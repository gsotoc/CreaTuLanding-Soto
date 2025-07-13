import CartWidget from './CartWidget';
import ItemList from './itemList';

function ItemListContainer({ productos, loading, cartItems, isCartOpen, setIsCartOpen, removeFromCart, increaseCount,decreaseCount, addToCart }) {
  
  return (
    <>
      {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <main>
            <section className='cards-container'>
              <ItemList items={productos} addToCart={addToCart}/>
            </section>
          </main>  
        )}

        {isCartOpen ? (
          <CartWidget
            items={cartItems}
            onClose={() => setIsCartOpen(false)}
            removeFromCart={removeFromCart}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
          />
        ) : null}
    </>
  );
}

export default ItemListContainer;
