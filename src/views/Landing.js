    import React from 'react';
    import {Link} from "react-router-dom";
    import useRedirection from "../hooks/useRedirection";

    function Landing() {

        useRedirection("/products", 5000); // Redireccionamos a la vista de productos en 3 segundos

        return (
            <div className="landing">
                    <Link to={"/products"}> {/* Añadimos un enlace a la vista de productos */}
                        <img src="olimpus.jpeg" alt="Olimpus" />
                        <p >Tu tienda de ropa fitness</p>
                    </Link>
                    <span className="laser-pointer"></span> {/* Puntero láser original */}
                    <span className="laser-pointer-reverse"></span> {/* Nuevo puntero láser en sentido contrario */}
            </div>
        );
    }

    export default Landing;
