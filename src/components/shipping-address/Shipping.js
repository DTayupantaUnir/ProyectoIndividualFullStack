import React, { useState } from 'react';
import './Shipping.css';
import {useNavigate} from "react-router";

export const Shipping = () => {
    const [name, setName] = useState('');
    const [movil, setMovil] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        navigate('/thanku');
        // Aquí puedes realizar alguna acción con los datos del formulario
    };

    return (
        <div className="shipping-container">
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
            <label for="shipping-nombre">
                Nombre: </label>
                <input type="text" className='form-control' placeholder='Ingrese su nombre' id='shipping-nombre' 
                value={name} onChange={(e) => setName(e.target.value)} required/>
            
            </div>
            <div className='form-group'>
            <label for="shipping-movil">
                Telefono: </label>
                <input type="text" className='form-control' placeholder='Ingrese su número móvil' id='shipping-movil' 
                value={movil} onChange={(e) => setMovil(e.target.value)} required />
            
            </div>
            <div className='form-group'>
            <label for="shipping-address">
                Dirección: </label>
                <input type="text" className='form-control' placeholder='Ingrese su dirección' id='shipping-address' 
                value={address} onChange={(e) => setAddress(e.target.value)} required/>
            
            </div>
            <div className='form-group'>
            <label for="shipping-address">
                Ciudad: </label>
                <input type="text" className='form-control' placeholder='Ingrese la Ciudad de residencia' id='shipping-city' 
                value={city} onChange={(e) => setCity(e.target.value)} required/>
            
            </div>
            <div className='shipping-button-section'>
                <button className='btn btn-primary' type="submit"> <i className="fas fa-credit-card"></i> Finalizar Compra</button>
            </div>
        </form>
        </div>
    );
};


