import { Link } from "react-router-dom"

function Categories() {
    return (
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav nav-underline">
                <li className="nav-item">
                    <Link to={'/'}>
                        <a className="nav-link" aria-current="page">Inicio</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/oferta/true'}>
                        <a className="nav-link">Ofertas</a>
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                    <ul className="dropdown-menu">
                        <li>
                            <Link to={'/category/lit-universal'}>
                                <a className="dropdown-item" >Literatura Universal</a>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/category/no-ficcion'}>
                                <a className="dropdown-item" >No ficcion</a>
                            </Link>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <Link to={'/'}>
                                <a className="dropdown-item">Ver todos</a>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Categories;
