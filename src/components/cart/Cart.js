import React, {useContext} from 'react';
import './Cart.css'
import { Link } from "react-router-dom";
import {OlimpusContext} from "../../context/OlimpusContext";
export const Cart = () => {
  const { productsSelected,wishList,products } = useContext(OlimpusContext);
  
  return (
    <>
    <Link to={`/summary`}>
      <button type="button" className="btn btn-primary">
        <i className="fas fa-shopping-cart"></i>
      </button>
    </Link>

    <div>
      {wishList.length}
    </div>
    
  </>

  );
};

export default Cart;