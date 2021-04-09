import React, { useState } from 'react'
import Alert from './Alert'

export default function EmailSignup() {
    const [email, setEmail] = useState('')
    const [alert, setAlert] = useState({
        // passing an object to useState with a empty msg and type values assigned to it
        show: true,
        type: '',
        msg: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault() // prevents screen refresh
        // if email is empty or doesn't include @
        // TODO include parameters to invalidate emails missing .com, .net, etc. use REGEX?
        if (!email || !email.includes('@')) {
            // display danger alert
            showAlert(true, 'danger', 'Please enter a valid email.')
        }
        else {
            // display success alert
            showAlert(true, 'success', 'Thanks! Your email has been added.')
            // TODO use setEmail to style submitted email, maybe dark gray? goal is to further validate to visitor that email has been submitted.
        }
    }

    // function to reset setAlert, used in above handleSubmit function and passed to Alert component so it
    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg })
    }

    return (
        <>
            <form className="footer__form-container" onSubmit={handleSubmit}>
                <div className="email-input-container">
                    {/* if alert.show is true, then display alert component. pass alert properties to Alert component */}
                    {alert.show && <Alert {...alert} removeAlert={showAlert} />}

                    <input
                        type="text"
                        id="email-input"
                        name="email"
                        placeholder="Your email address"
                        //value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit" id="email-signup-btn">Sign Up</button>
            </form>
        </>
    )
}

