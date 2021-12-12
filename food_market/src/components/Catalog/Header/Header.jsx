import React from 'react';

import Cart from './Cart';

const Header = ({className, title, cart}) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      {cart && <Cart count={cart.count} price={cart.price}/>}
    </div>
  );
};

export default Header;