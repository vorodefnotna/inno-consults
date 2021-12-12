import React from 'react';

import './Button.scss'

const Button = ({label, onClick, className}) => {
  return (
    <button className={`market-button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;