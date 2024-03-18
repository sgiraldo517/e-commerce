/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import  Item  from "./Item"
import ItemCart from "./ItemCart";

const ItemList = ({ libros, cardType }) => {
    return (
    <>
        {
            cardType === 'Item' ?
                libros.map(libro => <Item producto={libro} key={libro.id} />)
            :
                libros.map(libro => <ItemCart producto={libro} key={libro.id} />)
        }
    </>
    )
}

export default ItemList;






