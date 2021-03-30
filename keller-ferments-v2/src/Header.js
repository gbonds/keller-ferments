import React, { useState } from 'react'
// TODO add logo import here, was having issues with file path in production. -GB 3/30/21
import { FaBars } from 'react-icons/fa'

export default function Header() {
    const [showLinks, setShowLinks] = useState(true)

    return (
        <header className="header-section">
            <div className="header__navbar">
                <a href="index.html" className="header__logo-link">
                    <img
                        src='img/logo_gray_hex212121.png'
                        alt="Keller Ferment logo"
                        className="header__logo"
                    />
                </a>
                <button
                    className="nav-toggle-btn"
                    onClick={() => {
                        setShowLinks(!showLinks)
                    }}
                >
                    <FaBars />
                </button>
            </div>

            {showLinks &&
                <div className="header__nav-links show-container">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Locations</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            }
        </header >
    )
}
