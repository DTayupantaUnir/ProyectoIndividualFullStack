import {useEffect, useState} from "react";

export const useCart = () => {

    const [products, setProductsSelected] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información 
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setproducts(res));

        setTimeout(() => {
            setProductsSelected([
                {id: "1", name: "Camiseta", talla: "XL", color: "Azul", precio: "$40.00",url_imagen:"media/camiseta.jpeg"},
                {id: "2", name: "Top", talla: "S", color: "Rojo", precio: "$20.00",url_imagen:"media/top.jpeg"},
   
            ]);
        }, 2500);
    }, []);

    return products;
}