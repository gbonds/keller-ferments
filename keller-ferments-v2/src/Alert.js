import React, { useEffect } from 'react'

export default function Alert({ type, msg, removeAlert }) {
    // passing type and msg properties from alert, as well as removeAlert (aka showAlert)

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        }, 1700)
        return () => {
            // cleanup function
            clearTimeout(timeout)
        }
    }, []) // dependency array- every time alert changes, timer restarts

    return (
        <div className="email-input__alert-msg">
            {/* will return p element with alert and alert-[type] class */}
            <p className={`alert alert-${type}`} >{msg}</p>
        </div>
    )
}
