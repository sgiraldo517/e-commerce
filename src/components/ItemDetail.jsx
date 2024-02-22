/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

// eslint-disable-next-line no-unused-vars, react/prop-types
const ItemDetail = ({ item }) => {
    return (
        <>
            <div className="container my-5">
                <div className="row position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5 align-items-center">
                    <div className="col">
                        <img src={`../img/${item.img}`} className="w-75" alt={`Portada de ${item.title}`} />
                    </div>
                    <div className="col">
                        <Link to={'/'}>
                        <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"/>
                        </Link>
                            <h1 className="text-body-emphasis">{item.title}</h1>
                            <h2 className="text-body-secondary">{item.author}</h2>
                            <p className="col-lg-6 mx-auto mb-4">
                                {item.description}
                            </p>
                            <p className="card-text">
                                <small className="text-body-secondary">Precio: ${item.price}</small>
                            </p>
                            <button className="btn btn-danger px-5 mb-5" type="button">
                                Agregar al carrito
                            </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
