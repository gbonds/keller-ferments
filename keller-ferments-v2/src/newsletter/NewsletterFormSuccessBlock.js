import React from 'react';
export default ({email}) => {
  return (
      <div className="email-input__success-msg">Success! We've added <strong>{email}</strong> to our newsletter. Thanks!</div>
  );
};