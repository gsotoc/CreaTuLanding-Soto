import { Routes, Route } from 'react-router-dom';
import Ofertas from '../pages/Ofertas';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import CheckoutForm from '../components/CheckoutForm';

function AppRouter () {
    return (
         <Routes>
            <Route path="/" element={
            <ItemListContainer/>
            }/>;
            <Route path="/categorias" element={<ItemListContainer />} />;
            <Route path="/ofertas" element={<Ofertas />} />;
            <Route path="/checkout" element={<CheckoutForm />} />;
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
        </Routes>
    )      
}
export default AppRouter;