// productDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {OlimpusContext} from '../context/OlimpusContext';

const ProductDetails = () => {
    const { productId } = useParams();
    const { products } = useContext(OlimpusContext);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return <h2>producto no encontrado</h2>;
    }

 

    return (
        <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-talla">Talla: {product.talla}</p>
            <p className="product-color">Color: {product.color} </p>
            <p className="product-color">Precio: {product.precio} </p>
        </div>
    );
}

export default ProductDetails;