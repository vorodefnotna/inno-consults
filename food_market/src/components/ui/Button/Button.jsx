import React from 'react';

import './Button.scss'

const Button = ({type, label, onClick, className}) => {
  return (
    <button type={type} className={`market-button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;