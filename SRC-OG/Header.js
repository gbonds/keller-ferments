import React, { useState, useRef, useEffect } from 'react'
// TODO add logo import here, was having issues with file path in production. -GB 3/30/21
import { FaBars } from 'react-icons/fa'

export default function Header() {
    const [showLinks, setShowLinks] = useState(false)
    const navLinksContainerRef = useRef(null)
    const navLinksRef = useRef(null)

    useEffect(() => {
        const linksHeight = navLinksRef.current.getBoundingClientRect().height // returns values of element's height, can also find width, xy position
        if (showLinks) {
            navLinksContainerRef.current.style.height = `${linksHeight}px`
            // if showLinks is true, then show links
        } else {
            navLinksContainerRef.current.style.height = '0px'
            // if showLinks is false, then make element 0px high
        }
    }, [showLinks]) // everytime showLinks changes, do above callback function

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

            <div className='header__nav-links-container' ref={navLinksContainerRef} >
                <ul className='header__nav-links' ref={navLinksRef} >
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Recipes</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

        </header >
    )
}
