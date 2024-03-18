/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useState, createContext, useContext } from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {
    const [cart, setCart] = useState([])

    const existeCart = (id) => {
        return cart.some(prod => prod.id === id) 
    }

    const agregarItem = (item, cantidad) => {
        if (existeCart(item.id)) {
            const index = cart.findIndex(prod => prod.id === item.id)
            const aux = [...cart]
            aux[index].quantity = cantidad
            setCart(aux)
        } else {
            const nuevoItem = {
                ...item,
                quantity: cantidad
            }
        setCart([...cart, nuevoItem])
        }
    }

    const updateItem = (id, newQuantity) => {
        const index = cart.findIndex(prod => prod.id === id)
        const aux = cart
        aux[index].quantity = newQuantity
        setCart([...aux])
    }

    const removerItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const vaciarCart = () => {
        setCart([])
    }

    const getCantidadItems = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc += (prod.quantity*prod.price), 0)
    }

    console.log(cart.length);


    return (
        <CartContext.Provider value = {{ cart, agregarItem, updateItem, removerItem, vaciarCart, getCantidadItems, totalPrice }} >
            {props.children} 
        </CartContext.Provider>
    )

}   


