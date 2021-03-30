import React from 'react'
// TODO add logo import here, was having issues with file path in production. -GB 3/30/21

export default function Header() {
    return (
        <header className="header-section">
            <a href="index.html" className="header__logo-link">
                <img
                    src='img/logo_gray_hex212121.png'
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
