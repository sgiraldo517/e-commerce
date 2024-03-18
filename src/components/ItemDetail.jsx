/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { useCounter } from "../hooks/itemCounter"
import { useCartContext } from "../context/CartContext"

// eslint-disable-next-line no-unused-vars, react/prop-types
const ItemDetail = ({ item }) => {
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)
    const { agregarItem } = useCartContext()

    const handleAddToCart = () => {
        agregarItem(item, count)
    }

    return (
        <>
            <div className="container my-5">
                <div className="row position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5 align-items-center">
                    <div className="col-md-6">
                        <img src={`../img/${item.img}`} className="w-75" alt={`Portada de ${item.title}`} />
                    </div>
                    <div className="col-md-6">
                        <Link to={'/'}>
                        <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"/>
                        </Link>
                            <h1 className="text-body-emphasis">{item.title}</h1>
                            <h2 className="text-body-secondary">{item.author}</h2>
                            <p>
                                {item.description}
                            </p>
                            <p className="card-text">
                                <small className="text-body-secondary">Precio: ${item.price}</small>
                            </p>
                            <p className="card-text">
                                <small className="text-body-secondary">Stock: {item.stock} unidades disponibles</small>
                            </p>
                            <div className="d-inline" role="group">
                                <button className="btn btn-danger ms-1" type="button" onClick={increment}>
                                    +
                                </button>
                                <span className="fw-bold p-2">{count}</span>
                                <button className="btn btn-danger" type="button" onClick={decrement}>
                                    -
                                </button>
                                <button className="btn btn-danger ms-1" type="button" onClick={reset}>
                                    Limpiar
                                </button>
                                <button className="btn btn-danger ms-1" type="button" onClick={handleAddToCart}>
                                    Agregar al carrito
                                </button>
                            </div>
                            
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
