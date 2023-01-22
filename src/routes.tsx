import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cardapio from './Pages/Cardapio';
import Sobre from './Pages/Sobre';
import Inicio from './Pages/Inicio';
import Prato from './Pages/Prato';
import NotFound from './Pages/NotFound';
import Menu from 'Components/Menu';
import PaginaPadrao from 'Components/PaginaPadrao';
import Footer from 'Components/Footer';

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='sobre' element={<Sobre />} />
                    </Route>
                    <Route path='prato/:id' element={<Prato />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </main >
    );
}