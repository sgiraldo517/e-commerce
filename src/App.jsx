import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './styles/App.css'

const App = () => {
    return (
        <>
            <div className='contenido-todo'>
                <Navbar />
                <div className='contenido-text'>
                    <ItemListContainer saludo="Bienvenido a " tienda="untold" mensaje="Encuentra tu nueva historia"/>
                </div>
            </div>
        </>
    );
}

export default App;
