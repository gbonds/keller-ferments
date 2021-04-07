import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

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
                <form className="footer__form-container" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="email-input"
                        name="email"
                        placeholder="Your email address"
                        value={email} // value references useState value
                        onFocus={(e) => e.target.placeholder = ""} // hides placeholder text when input is focused on
                        onBlur={(e) => e.target.placeholder = "Your email address"} // reinstates placeholder text after focus event
                        onChange={(e) => setEmail(e.target.value)} // onChange tracks the input as event target value
                    />
                    <button type="submit" id="email-signup-btn">Sign Me Up</button>
                </form>
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
