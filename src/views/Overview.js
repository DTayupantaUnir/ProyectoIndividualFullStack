import React, {useContext} from 'react';
import '../styles/styles.css';
import {Product} from "../components/Product"
import {OlimpusContext} from "../context/OlimpusContext";
import {LinearProgress} from "@mui/material";

export const Overview = () => {

    const { products} = useContext(OlimpusContext);

    return (
        <div>
            <div className="product-container">

                {
                    /**
                     * Por cada producto conocido
                     * Se crea un product con la informacion del producto
                     *
                     * Si los datos aun no se han recogido (lista de size 0) del back-end, se muestra un Spinner.
                     */
                    products.length > 0 ? (
                        products.map((product, index) => (
                            <Product
                                key={index}
                                id={product.id}
                                name={product.name}
                                talla={product.talla}
                                color={product.color}
                                precio={product.precio}
                                url_imagen={product.url_imagen}
                            />
                        ))
                    ) : (
                        <LinearProgress className='LinearProgress' color="primary"/>
                    )
                }

                {}
            </div>
        </div>
    );
}