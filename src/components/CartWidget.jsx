import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
    const { getCantidadItems } = useCartContext();

    return (
        <div className="carrito">
            <Link to={`/cart`}>
                <button type="button" className="btn btn-danger position-relative"><i className="fa-solid fa-cart-shopping"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{ getCantidadItems() }</span>
                </button>
            </Link>
        </div>
    );
}

export default CartWidget;
