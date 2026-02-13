//Lista de productos

import React from 'react';
import { useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
    const [products, setProducts] = useState([
        { productId: 1, ProductName: 'Teclado Logitect', price: 10.99, imageUrl: 'https://apizd.zonadigitalsv.com/storage/productos/6QL3O7odaLWzHmpPwgRXWxJXiaCi7w2CTXRNpfni.png', description: 'Teclado de mebrana y teclas programables.' },
        { productId: 2, ProductName: 'Laptop Asus', price: 299.99, imageUrl: 'https://api.zonadigitalsv.com/storage/products/imagen_generada698ca26197c38.jpg', description: 'Laptop de alto rendimiento con procesador Intel Core i7.' },
        { productId: 3, ProductName: 'Mouse Razer', price: 39.99, imageUrl: 'https://apizd.zonadigitalsv.com/storage/productos/hhWkPDQiKbB8eumiLiKF1SPYmqFPN7eyptanimCJ.png', description: 'Mouse ergonómico con sensor óptico de alta precisión.' },
        { productId: 4, ProductName: 'Monitor MSI', price: 199.99, imageUrl: 'https://apizd.zonadigitalsv.com/storage/productos/fvCWePNqo3Np23nntTZsdlFdVEZ2s3CT3AiFC4Ns.png', description: 'Monitor de 24 pulgadas con resolución Full HD.' },
        { productId: 5, ProductName: 'Disco SSD', price: 89.99, imageUrl: 'https://api.zonadigitalsv.com/storage/products/imagen_generada64750c13c7503.jpg', description: 'Disco SSD de 1TB con velocidad de lectura rápida.' },

    ]);

    return (
        <div>
            <h2>Lista de Productos</h2>
            {products.map((product) => (
                <ProductItem key={product.productId} {...product} />
            ))}
        </div>
    );
};

export default ProductList; 