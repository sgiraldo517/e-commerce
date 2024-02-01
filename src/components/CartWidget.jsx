

const CartWidget = () => {
    return (
        <div className="carrito">
            <button type="button" className="btn btn-danger position-relative"><i className="fa-solid fa-cart-shopping"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">0</span>
            </button>
        </div>
    );
}

export default CartWidget;
