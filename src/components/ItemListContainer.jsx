

// eslint-disable-next-line react/prop-types
function ItemListContainer({ saludo, tienda, mensaje }) {
    return (
        <>
            <div>
                <h1 className="text-end saludo">
                    {saludo}
                    <span className="nombreTienda">{tienda}</span>
                </h1>
                <p className="text-end">{mensaje}</p>
            </div>
        </>
    );
}

export default ItemListContainer;
