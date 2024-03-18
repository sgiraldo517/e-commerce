import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import NotFound from './components/NotFound'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'

const App = () => {
    return (
    <>
        <BrowserRouter>
            <CartProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<ItemListContainer saludo="Bienvenido a " tienda="untold" mensaje="Encuentra tu nueva historia" />} />
                    <Route path='/category/:cid' element={<ItemListContainer saludo="Encuentra tu libro " tienda="favorito" mensaje="Estos son los libros para tu categoria seleccionada:"/>} />
                    <Route path='/oferta/:promo' element={<ItemListContainer saludo="Bienvenido a " tienda="Ofertas" mensaje="Aprovecha esta oportunidad"/>} />
                    <Route path='/product/:pid' element={<ItemDetailsContainer />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    </>
    );
}

export default App;
