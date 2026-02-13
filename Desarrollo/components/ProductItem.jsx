const ProductItem = ({productId, ProductName, price, imageUrl, description}) => {
    return (
        <div>
            <img src={imageUrl} alt={ProductName} width="150" />
            <h3>{ProductName}</h3>
            <p>ID: {productId}</p>
            <p>Precio: ${price}</p>
            <p>{description}</p>
            <hr />
        </div>
    );
}

export default ProductItem;