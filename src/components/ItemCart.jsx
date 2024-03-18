/* eslint-disable react/prop-types */
import { useCounter } from "../hooks/itemCounter"
import { useCartContext } from "../context/CartContext"

const ItemCart = ( { producto } ) => {
    const { removerItem, updateItem } = useCartContext()
    const { count, increment, decrement } = useCounter(producto.quantity, producto.stock, 1)

    return (
        <>
            <div className="card m-5 shadow-sm">
                <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center m-3" style={{ maxWidth: 150 }}>
                        <img src={`../img/${producto.img}`} className="img-fluid border rounded-3" alt={`Portada de ${producto.title}`} />
                    </div>
                    <div className="col-md-10 d-flex align-items-center flex-wrap justify-content-between">
                        <div className="flex-fill ">
                            <div className="card-body">
                                <h5 className="card-title">{producto.title}</h5>
                                <p className="card-text">
                                    {producto.author}
                                </p>
                                <p className="card-text">
                                    <small className="text-body-secondary">Cantidad: {producto.quantity}</small>
                                </p>
                                <p className="card-text fw-semibold">
                                    Subtotal: ${producto.price * count}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex flex-wrap p-2" role="group">
                                    <button className="btn btn-danger ms-1" type="button" onClick={() => {updateItem(producto.id, count + 1)
                                        increment()}}>
                                        +
                                    </button>
                                    <span className="fw-bold p-2">{count}</span>
                                    <button className="btn btn-danger" type="button" onClick={async () => {updateItem(producto.id, count - 1) 
                                        decrement()}}>
                                        -
                                    </button>
                                    <button className="btn btn-danger ms-1" type="button" onClick={() => removerItem(producto.id) }>
                                        Remover del carrito
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemCart;
