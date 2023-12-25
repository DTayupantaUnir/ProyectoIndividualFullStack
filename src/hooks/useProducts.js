import {useEffect, useState} from "react";

export const useProducts = () => {

    const [products, setProducts] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información 
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setproducts(res));

        setTimeout(() => {
            setProducts([
                {id: "1", name: "Camiseta", talla: "XL", color: "Azul", precio: 60.00,url_imagen:"media/camiseta.jpeg"},
                {id: "2", name: "Top", talla: "S", color: "Rojo", precio: 20.35,url_imagen:"media/top.jpeg"},
                {id: "3", name: "Short", talla: "S", color: "Verde",precio: 40.82,url_imagen:"media/short.jpeg"},
                {id: "4", name: "Leggins", talla: "M", color: "Amarillo", precio: 90,url_imagen:"media/leggins.jpeg"},
                {id: "5", name: "Sudadera", talla: "M", color: "Negro", precio: 50.00,url_imagen:"media/sudadera_hombre.jpeg"},
                {id: "6", name: "Sudadera", talla: "S", color: "Azul",precio: 30.00,url_imagen:"media/sudadera_mujer.jpeg"}
            ]);
        }, 2500);
    }, []);

    return products;
}