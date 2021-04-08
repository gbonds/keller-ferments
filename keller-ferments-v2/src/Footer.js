import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import Newsletter from './newsletter/NewsletterFormController'

export default function Footer() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() // prevents browser from automatically refreshing onSubmit
        // if email input field is filled
        if (email) {
            console.log(`Success! Email submitted for ${email}`)
            setEmail('') // clears field to empty string
        }
        // else fail if email input field is empty
        else {
            console.log('Failed submission due to empty field.')
        }
    }

    return (
        <footer>
            <div className="footer__newsletter content-wrapper">
                <h4 className="footer__newsletter__header">
                    Want to hear more? Sign up for updates!
                </h4>
                < Newsletter />
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
