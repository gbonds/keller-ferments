import React from 'react';

export default ({ email, errors, onEmailChange, onSubmit }) => {
    return (
        <>
            <form className="footer__form-container" onSubmit={onSubmit}>
                <div className="email-input-container">
                    {errors.email && <div className="email-input__error-msg">{errors.email}</div>}

                    <input
                        type="text"
                        id="email-input"
                        name="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={onEmailChange}
                    />
                </div>

                <button type="submit" id="email-signup-btn">Sign Up</button>
            </form>
        </>
    );
};