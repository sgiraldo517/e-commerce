/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import  Item  from "./Item"

const ItemList = ({ libros }) => {
    return (
        <div className="container my-5">
            <div className="p-5 bg-body-tertiary rounded-3 shadow-lg">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 text-center mx-auto">
                        {libros.map(libro => <Item producto={libro} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemList;






