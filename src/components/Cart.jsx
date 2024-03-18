import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import ItemList from "./ItemList"

const Cart = () => {
    const { cart, totalPrice, vaciarCart, getCantidadItems } = useCartContext()
    console.log(cart);

    return (
        <>

            {
                cart.length === 0 ?
                <>
                    <div className="margin-texto d-flex flex-column align-items-center">
                        <h1 className="text-center saludo">
                            Tu Carrito 
                            <span className="nombreTienda"> esta vacio</span>
                        </h1>
                    <p className="text-center mx-auto p-2 w-75">No has seleccionado ningun producto todavia. Compra un nuevo libro ahora y <span className="fw-semibold">vive una nueva aventura...</span></p>
                    <Link to={'/'}>
                        <button className="btn btn-danger" type="button">
                            Ir al inicio
                        </button>
                    </Link>
                    </div>
                </> 
                :
                <>
                    <div className="margin-texto">
                        <h1 className="text-center saludo">
                            Tu   
                            <span className="nombreTienda"> Carrito</span>
                        </h1>
                        <p className="text-center">Finaliza tu compra</p>
                        <div>
                            {<ItemList libros={cart} cardType='ItemCart' />}
                            <div>
                                <h2 className="text-body-emphasis">Resumen de compra</h2>
                                <p className="text-body-secondary">Cantidad total de libros: { getCantidadItems() }</p>
                                <p className="text-body-secondary">Total a pagar: ${ totalPrice() }</p>
                                <div className="d-inline" role="group">
                                    <button className="btn btn-danger m-2" type="button" onClick={vaciarCart}>
                                        Eliminar productos
                                    </button>
                                    <Link to={'/'}>
                                        <button className="btn btn-danger m-2" type="button">
                                            Seguir Comprando
                                        </button>
                                    </Link>
                                    <Link to={'/checkout'}>
                                        <button className="btn btn-danger m-2" type="button">
                                            Finalizar Compra
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </> 
            }

        </>
    );
}

export default Cart;
