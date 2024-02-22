/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import  ItemDetail  from "./ItemDetail"

const ItemDetailsContainer = () => {
    const [item, setItem] = useState([])
    const { pid } = useParams()

    useEffect(() => {
        fetch('../data/libros.json')
            .then(response => response.json())
            .then(libros => {
                const prod = libros.find(libro => libro.id == pid)
                console.log(prod);
                if (prod)
                    setItem(prod)
            })
    }, [])
    return (
                <ItemDetail item={item} />
    );
}

export default ItemDetailsContainer;

