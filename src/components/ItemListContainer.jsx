import CartWidget from './CartWidget';
import ItemList from './ItemList';
import UseData from '../hooks/UseData';


function ItemListContainer() {

  const { productos, loading, cartItems, isCartOpen, setIsCartOpen, removeFromCart, increaseCount, decreaseCount } = UseData();
  

  return (
    <>
      {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <main>
            <section className='cards-container'>
              <ItemList productos={productos}/>
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
