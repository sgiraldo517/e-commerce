import { Link } from "react-router-dom"

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


function Item({ producto }) {
    return (
        <>
            <div className="col justify-content-center">
                <div className="card mb-4 rounded-3 shadow-lg h-100">
                    <div className="card-header">
                        {producto.category}
                    </div>
                    <img src={`../img/${producto.img}`} className="card-img-top h-20" alt={`Portada de ${producto.title}`} />
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <h6 className="text-body-secondary">{producto.author}</h6>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>${producto.price}</li>
                            <li>Stock: {producto.stock}</li>
                        </ul>
                    </div>
                    <div className="card-footer">
                        <Link to={`/product/${producto.id}`}>
                            <button className="btn btn-outline-danger w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Ver detalles
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;
