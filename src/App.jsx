import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer saludo="Bienvenido a " tienda="untold" mensaje="Encuentra tu nueva historia" />} />
                <Route path='/category/:cid' element={<ItemListContainer saludo="Encuentra tu libro " tienda="favorito" mensaje="Estos son los libros para tu categoria seleccionada:"/>} />
                <Route path='/oferta/:promo' element={<ItemListContainer saludo="Bienvenido a " tienda="Ofertas" mensaje="Aprovecha esta oportunidad"/>} />
                <Route path='/product/:pid' element={<ItemDetailsContainer />} />
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default App;
