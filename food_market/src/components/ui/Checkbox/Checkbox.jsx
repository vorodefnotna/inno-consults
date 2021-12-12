import React, {forwardRef} from 'react';

import './checkbox.scss'

const Checkbox = forwardRef(({id, className, label, onClick}, ref) => {
  return (
    <div className={`market-checkbox ${className}`}>
      <input
        ref={ref}
        type='checkbox'
        id={id}
        onClick={onClick}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
})

export default Checkbox;