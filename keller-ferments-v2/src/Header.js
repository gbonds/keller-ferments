import React from 'react'
import logo from './img/logo_gray_hex212121.png'

export default function Header() {
    return (
        <header className="header-section">
            <a href="index.html" className="header__logo-link">
                <img
                    src={logo}
                    alt="Keller Ferment logo"
                    className="header__logo"
                />
            </a>
            <nav className="header__nav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Locations</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Recipes</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
