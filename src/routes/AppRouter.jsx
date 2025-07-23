import { Routes, Route } from 'react-router-dom';
import Categorias from '../pages/Categorias';
import Ofertas from '../pages/Ofertas';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';

function AppRouter () {
    return (
         <Routes>
            <Route path="/" element={
            <ItemListContainer/>
            }/>;
            <Route path="/categorias" element={<Categorias />} />;
            <Route path="/ofertas" element={<Ofertas />} />;
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
        </Routes>
    )      
}
export default AppRouter;