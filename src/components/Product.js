import React from "react";
import { Link } from "react-router-dom";
import { OlimpusContext } from "../context/OlimpusContext";


export const Product = ({ id, name, talla, color, precio,url_imagen }) => {
  const {wishList,addItemtoWishList} = React.useContext(OlimpusContext);

  return (
    <div className="detalle-tarjeta">
      <table className="table">
        <thead>
          <tr>
            <h3>{name}</h3>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Talla: {talla}</p>
              <p>Color: {color}</p>
            </td>
            <td><img className="imagen_producto" src={url_imagen} alt="Imagen del producto" /></td>
          </tr>
          <tr>
            <td>
              <p><b>Precio: {precio.toLocaleString('es-EC', { style: 'currency', currency: 'USD' })}</b></p>
            </td>
            <td>
              
                <button className="btn btn-primary" onClick={() => {
                  addItemtoWishList(id);
                  
                }}>
                <i className="fas fa-shopping-cart"></i> Agregar al Carrito</button>
              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
