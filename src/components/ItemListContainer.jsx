import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import  ItemList  from "./ItemList"

// eslint-disable-next-line react/prop-types
function ItemListContainer({ saludo, tienda, mensaje }) {
    const [libros, setProducts] = useState([])
    const { cid } = useParams()
    const { promo } = useParams()

    useEffect(() => {
        fetch('../data/libros.json')
            .then(response => response.json())
            .then(prods => {
                if (cid) {
                    const productosFiltrados = prods.filter(prod => prod.cid == cid)
                    setProducts(productosFiltrados)   
                } else if (promo) {
                    console.log(promo);
                    const productosOfertados = prods.filter(prod => prod.promotion == promo)
                    console.log(productosOfertados);
                    setProducts(productosOfertados)
                } else {
                    setProducts(prods)
                }

            })
            .catch((error) => console.log(error))
    }, [cid, promo])

    return (
        <>
            <div className="margin-texto">
                <h1 className="text-center saludo">
                    {saludo}
                    <span className="nombreTienda">{tienda}</span>
                </h1>
                <p className="text-center">{mensaje}</p>
            </div>

            <div>
                <div className="container my-5">
                    <div className="p-5 bg-body-tertiary rounded-3 shadow-lg">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-md-3 g-4 text-center mx-auto">
                                <ItemList libros={libros} cardType='Item'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default ItemListContainer;
