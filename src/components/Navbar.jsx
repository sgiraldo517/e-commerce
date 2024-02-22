import CartWidget from './CartWidget';
import Categories from './Categories';
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg color-fondo">
                <div className="container-fluid">
                    <Link to={'/'}>
                        <a className="logo">
                            <img src="/img/1.png" alt="Untold Libreria" className="logo"/>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <Categories />
                </div>
                <CartWidget />
            </nav>
        </>
    );
}

export default Navbar;
