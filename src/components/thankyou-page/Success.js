import React from 'react';
import './Success.css';

export const Success = () => {
    return (
        <div className='container'>
            <h1 className='title'>Thank You!</h1>
            <img className='thanku-logo' src="media/thanku.jpeg" alt="Thank-you logo" border="0" />
            <p className='message'>En breve un ascesor se conectará a tu número móvil para coordinar la entrega. </p>
        </div>
    );
};
