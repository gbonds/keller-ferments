import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="footer__newsletter">
                <h4 className="footer__newsletter__header">
                    Want to hear more? Sign up for updates!
                </h4>
                <div className="footer__newsletter__email-input">Your email</div>
            </div>
            <div className="footer__nav">
                <div className="footer__social-links">
                    <a href="#"><i className="fab fa-instagram-square"></i></a>
                    <a href="#"><i className="fab fa-facebook-square"></i></a>
                    <a href="#"><i className="fab fa-twitter-square"></i></a>
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
