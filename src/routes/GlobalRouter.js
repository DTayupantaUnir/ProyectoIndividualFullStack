import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import ProductDetails from '../views/ProductDetails';
import NotFound from '../views/NotFound';
import {Overview} from "../views/Overview";
import {Header} from "../components/Header";
import {Summary} from "../components/summary/Summary";
import {Success} from "../components/thankyou-page/Success";
import { Shipping } from '../components/shipping-address/Shipping';

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/products" element={<Layout><Overview /></Layout>} />
                <Route path="/products/:productId" element={<Layout><ProductDetails /></Layout>} />
                <Route path="/summary" element={<Layout><Summary /></Layout>} />
                <Route path="/thanku" element={<Layout><Success /></Layout>} />
                <Route path="/shipping-address" element={<Layout><Shipping /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
    </>
);

export default GlobalRouter;
