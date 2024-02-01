import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="logo" href="#" >
                        <img src="/1.png" alt="Untold Libreria" className="logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav nav-underline">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ofertas</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Literatura Universal</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">No ficcion</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Otros</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <CartWidget />
            </nav>
        </>
    );
}

export default Navbar;
