import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import EmailSignup from './EmailSignup'

export default function Footer() {
    const [email, setEmail] = useState('')

    return (
        <footer>
            <div className="footer__newsletter content-wrapper">
                <h4 className="footer__newsletter__header">
                    Want to hear more? Sign up for updates!
                </h4>
                < EmailSignup />
            </div>
            <div className="footer__nav">
                <div className="footer__social-links">
                    <a href="" target='_blank'>
                        <FontAwesomeIcon icon={faInstagramSquare} />
                    </a>
                    <a href="" target='_blank'>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    <a href="" target='_blank'>
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </a>
                </div>
                <div className="footer__nav-links">
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Recipes</a></li>
                    <li><a href="">Contact</a></li>
                </div>
                <div className="footer__copyright">
                    <p>&copy; Keller Ferments 2020</p>
                </div>
            </div>
        </footer>
    )
}
