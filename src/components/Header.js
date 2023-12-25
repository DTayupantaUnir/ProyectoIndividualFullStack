import React from "react";
import Cart from "./cart/Cart";

export const Header = () => {
    return (
        <header className="header-footer">
            <h1 className="header-footer-text">** Olimpus Store **</h1>
            <Cart />
        </header>
    );
}