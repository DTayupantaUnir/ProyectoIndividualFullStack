import React, {useContext} from 'react';
import {OlimpusContext} from "../../context/OlimpusContext";
import './Summary.css';
import { Link } from "react-router-dom";

export const Summary = () => {
  const { productsSelected,wishList,products } = useContext(OlimpusContext);
  let totalAmount= 0;

  return (
    <div>
      <h3>Resumen de la compra</h3>
      <div className='Summary-resumen'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Descripción</th>
            <th scope="col">Talla</th>
            <th scope="col">Color</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          
         
          {wishList.map((id) => {
            let selectedProduct = products.find((product) => product.id === id);
            if (selectedProduct) {
              totalAmount += selectedProduct.precio;
              return (
                <tr scope="row">
                  <td>{selectedProduct.name}</td>
                  <td>{selectedProduct.talla}</td>
                  <td>{selectedProduct.color}</td>
                  <td>{selectedProduct.precio.toLocaleString('es-EC', { style: 'currency', currency: 'USD' })}</td>
                </tr>
              );
            } else {
              return null; // Omitir elementos que no cumplan la condición
            }
          })}


          
            
         
          <tr>
              <td></td>
              <td></td>
              <td><b>Total</b></td>
              <td><b>{totalAmount.toLocaleString('es-EC', { style: 'currency', currency: 'USD' })}</b></td>
            </tr>
        </tbody>
      </table>
      </div>
      <div className='buttons-section'>    
              <Link to={`/shipping-address`}>
                <button className="btn btn-primary">
                <i className="fas fa-credit-card"></i> Procesar Pago</button>
              </Link>
      </div>    
    </div>
  );
}

