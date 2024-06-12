import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Alta from './pages/Alta';
import Baja from './pages/Baja';
import Consulta from './pages/Consulta';
import Modificacion from './pages/Modificacion';

const Router = () => ( 
    <BrowserRouter>
        <Routes>   
            <Route path='/'index element={<Inicio/>} />
            <Route path='/alta' element={<Alta/>} />
            <Route path='/baja' element={<Baja/>} />
            <Route path='/consulta' element={<Consulta/>} />
            <Route path='/modificacion' element={<Modificacion/>} />
        </Routes>
    </BrowserRouter>
);

export default Router;