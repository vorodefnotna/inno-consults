import React, {forwardRef} from 'react';

const Input = forwardRef (({placeHolder, id, className, onInput}, ref) => {
  return (
      <input
        ref={ref}
        type="text"
        id={id}
        className={`market-input ${className}`}
        placeholder={placeHolder}
        onInput={onInput}
      />
  );
})

export default Input;